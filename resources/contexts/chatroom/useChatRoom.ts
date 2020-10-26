import { useLazyQuery } from "@apollo/client";
import { STATE } from "@res/contexts/chatroom/types";
import { useRef, useReducer, useCallback, useState } from "react";

const INIT_STATE: STATE = {
  messages: [],
  currentRoom: null,
  subscribed: false,
};

export const internalReducer = (state: STATE) => {};

export const useChatRoom = (
  initialState: STATE = INIT_STATE,
  reducer = internalReducer
) => {};
