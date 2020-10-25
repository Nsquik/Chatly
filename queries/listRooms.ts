import { gql } from "@apollo/client";

export const GET_USER_ROOMS = gql`
  {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;
