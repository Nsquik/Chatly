export interface RootStackParams extends Record<string, object | undefined> {
  Root: undefined;
  NotFound?: undefined;
}

export interface HomeStackParams extends Record<string, object | undefined> {
  ListRooms: undefined;
  ChatRoom: undefined;
}
