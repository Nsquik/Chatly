import { useLazyQuery } from "@apollo/client";
import {
  STATE,
  ChatroomActionTypes,
  ACTION_TYPES,
} from "@res/contexts/chatroom/types";
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
      return { ...state, currentRoom: payload?.value };
    case ACTION_TYPES.TOGGLE_SUBSCRIBED:
      return { ...state, subscribed: !state.subscribed };
    case ACTION_TYPES.UPDATE_MESSAGES:
      return { ...state, messages: [...state.messages, payload?.value] };
    case ACTION_TYPES.CLEAR_ALL:
      return payload?.value || INIT_STATE;
  }
};

export const useChatRoom = (
  initialState: STATE = INIT_STATE,
  reducer = internalReducer
) => {};
