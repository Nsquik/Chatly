import { IMessage, IUserRoom } from "@type/models";

export interface STATE {
  messages: IMessage[];
  currentRoom: IUserRoom | null;
  subscribed: boolean;
}

export enum ACTION_TYPES {
  UPDATE_MESSAGES = "UPDATE_MESSAGES",
  CHANGE_ROOM = "CHANGE_ROOM",
  TOGGLE_SUBSCRIBED = "TOGGLE_SUBSCRIBED",
  CLEAR_ALL = "CLEAR_ALL",
}

export type UPDATE_MESSAGES = {
  type: ACTION_TYPES.UPDATE_MESSAGES;
  payload: { value: IMessage };
};

export type CHANGE_ROOM = {
  type: ACTION_TYPES.CHANGE_ROOM;
  payload: { value: STATE["currentRoom"] };
};

export type TOGGLE_SUBSCRIBED = {
  type: ACTION_TYPES.TOGGLE_SUBSCRIBED;
  payload: { value: STATE["subscribed"] };
};

export type CLEAR_ALL = {
  type: ACTION_TYPES.CLEAR_ALL;
  payload?: { value: STATE };
};

export type ChatroomActionTypes =
  | UPDATE_MESSAGES
  | CHANGE_ROOM
  | CLEAR_ALL
  | TOGGLE_SUBSCRIBED;