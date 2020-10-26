import { gql } from "@apollo/client";

export const GET_ROOM_MESSAGES = gql`
  query GET_ROOM_MESSAGES($id: ID!) {
    room(id: $id) {
      messages {
        id
        body
        insertedAt
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
`;
