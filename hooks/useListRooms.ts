import { useQuery } from "@apollo/client";
import { GET_USER_ROOMS } from "@queries/listRooms";
import { IUserRoom } from "@type/models";

export const useListRooms = () => {
  return useQuery<{ usersRooms: { rooms: IUserRoom[] } }>(GET_USER_ROOMS);
};
