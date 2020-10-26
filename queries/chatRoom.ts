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

export const SUBSCRIBE_MESSAGE_ADDED = gql`
  subscription OnMsgAdded {
    messageAdded(roomId: "9652cf09-e839-4ca9-9bed-8138fbd3c5b9") {
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
`;
