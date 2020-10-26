import { gql } from "@apollo/client";

export const GET_ROOM_MESSAGES = gql`
  query GET_ROOM_MESSAGES($id: ID!) {
    room(id: $id) {
      messages {
        _id: id
        text: body
        createdAt: insertedAt
        user {
          _id: id
          firstName
          lastName
        }
      }
    }
  }
`;

export const SUBSCRIBE_MESSAGE_ADDED = gql`
  subscription OnMsgAdded($id: ID!) {
    messageAdded(roomId: $id) {
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
