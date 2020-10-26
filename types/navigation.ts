export interface RootStackParams extends Record<string, object | undefined> {
  Root: undefined;
  NotFound?: undefined;
}

export type ChatRoomParams = {
  roomId: string;
  roomName: string;
};

export interface HomeStackParams extends Record<string, object | undefined> {
  ListRooms: undefined;
  ChatRoom: ChatRoomParams;
}
