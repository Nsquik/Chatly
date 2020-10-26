import { useLazyQuery } from "@apollo/client";
import { GET_ROOM_MESSAGES, SUBSCRIBE_MESSAGE_ADDED } from "@queries/chatRoom";
import {
  STATE,
  ChatroomActionTypes,
  ACTION_TYPES,
} from "@res/contexts/chatroom/types";
import { ChatRoomParams } from "@type/navigation";
import { useRef, useReducer, useCallback, useState } from "react";

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

  const [state, dispatch] = useReducer<
    (state: STATE, action: ChatroomActionTypes) => STATE
  >(reducer, userInitialState.current);

  const { currentRoom } = state;

  const [loadMessages, loadMessagesResult] = useLazyQuery(GET_ROOM_MESSAGES, {
    variables: { id: currentRoom?.roomId },
    notifyOnNetworkStatusChange: true,
    // fetchPolicy: "network-only",
    onCompleted: (data) => {},
  });

  const checkAndLoad = useCallback(
    (passedRoom: ChatRoomParams) => {
      const isNewRoomPassed = !(
        JSON.stringify(currentRoom) === JSON.stringify(passedRoom)
      );
      if (isNewRoomPassed) {
        dispatch({
          type: ACTION_TYPES.CHANGE_ROOM,
          payload: { value: passedRoom },
        });
        loadMessages();
      }
      //   console.log(loadMessagesResult.subscribeToMore);
      //   if (loadMessagesResult.subscribeToMore) {
      //     loadMessagesResult.subscribeToMore({
      //       document: SUBSCRIBE_MESSAGE_ADDED,
      //     });
      //   }
      return isNewRoomPassed;
    },
    [loadMessages, dispatch, currentRoom]
  );

  return { state, dispatch, loadMessages, loadMessagesResult, checkAndLoad };
};
