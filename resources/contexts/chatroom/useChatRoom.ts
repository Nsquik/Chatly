import { useLazyQuery, useSubscription } from "@apollo/client";
import { GET_ROOM_MESSAGES, SUBSCRIBE_MESSAGE_ADDED } from "@queries/chatRoom";
import {
  STATE,
  ChatroomActionTypes,
  ACTION_TYPES,
} from "@res/contexts/chatroom/types";
import { ChatRoomParams } from "@type/navigation";
import { useRef, useReducer, useCallback, useState } from "react";
import Toast from "react-native-toast-message";

const INIT_STATE: STATE = {
  messages: [],
  currentRoom: null,
  subscribed: false,
};

export const internalReducer = (state: STATE, action: ChatroomActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.CHANGE_ROOM:
      return { ...state, currentRoom: payload.value };
    case ACTION_TYPES.TOGGLE_SUBSCRIBED:
      return { ...state, subscribed: !state.subscribed };
    case ACTION_TYPES.UPDATE_MESSAGES:
      return { ...state, messages: [...state.messages, payload.value] };
    case ACTION_TYPES.CLEAR_ALL:
      return INIT_STATE;
    default:
      return state;
  }
};

export const useChatRoom = (
  initialState: STATE = INIT_STATE,
  reducer = internalReducer
) => {
  const userInitialState = useRef<STATE>(initialState);
  const [isChatOpen, setChatOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer<
    (state: STATE, action: ChatroomActionTypes) => STATE
  >(reducer, userInitialState.current);

  const { currentRoom } = state;

  const [loadMessages, loadMessagesResult] = useLazyQuery(GET_ROOM_MESSAGES, {
    variables: { id: currentRoom?.roomId },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      const {
        room: { messages },
      } = data;
      dispatch({
        type: ACTION_TYPES.UPDATE_MESSAGES,
        payload: { value: messages },
      });
    },
  });

  const { updateQuery } = loadMessagesResult;

  const subscription = useSubscription(SUBSCRIBE_MESSAGE_ADDED, {
    skip: !currentRoom,
    variables: { id: currentRoom?.roomId },
    shouldResubscribe: true,
    onSubscriptionData: ({
      subscriptionData: {
        data: { messageAdded },
      },
    }) =>
      updateQuery?.((prev, _options) => {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "New message",
          text2: "You've got new message in the last opened chat room",
        });
        dispatch({
          type: ACTION_TYPES.UPDATE_MESSAGES,
          payload: { value: messageAdded },
        });

        return { ...prev, messageAdded };
      }),
  });

  const checkAndLoad = useCallback(
    (passedRoom: ChatRoomParams) => {
      const isNewRoomPassed = !(
        JSON.stringify(currentRoom) === JSON.stringify(passedRoom)
      );
      if (isNewRoomPassed) {
        dispatch({
          type: ACTION_TYPES.CLEAR_ALL,
          payload: null,
        });
        dispatch({
          type: ACTION_TYPES.CHANGE_ROOM,
          payload: { value: passedRoom },
        });
        loadMessages();
      }

      return isNewRoomPassed;
    },
    [loadMessages, dispatch, currentRoom]
  );

  return {
    state,
    dispatch,
    loadMessages,
    loadMessagesResult,
    checkAndLoad,
    subscription,
    setChatOpen,
  };
};
