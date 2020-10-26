import { LazyQueryResult, QueryLazyOptions } from "@apollo/client";
import { IMessage, IUserRoom } from "@type/models";
import { ChatRoomParams } from "@type/navigation";

export interface STATE {
  messages: IMessage[];
  currentRoom: ChatRoomParams | null;
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
  payload: any;
};

export type ChatroomActionTypes =
  | UPDATE_MESSAGES
  | CHANGE_ROOM
  | CLEAR_ALL
  | TOGGLE_SUBSCRIBED;

type loadMessagesVariables = { id: string | undefined };

type loadMessagesResponseData = {
  room: {
    messages: IMessage[];
  };
};
export interface Hook {
  state: STATE;
  dispatch: React.Dispatch<ChatroomActionTypes>;
  loadMessages: (
    options?:
      | QueryLazyOptions<{
          id: string | undefined;
        }>
      | undefined
  ) => void;
  loadMessagesResult: LazyQueryResult<
    loadMessagesResponseData,
    loadMessagesVariables
  >;
}
