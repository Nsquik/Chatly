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
`;

export const SUBSCRIBE_ROOM_TYPING = gql`
  subscription OnRoomTyping($id: String!) {
    typingUser(roomId: $id) {
      _id: id
      firstName
      lastName
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation($id: String!, $body: String!) {
    sendMessage(body: $body, roomId: $id) {
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
`;
