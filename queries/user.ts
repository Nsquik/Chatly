import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  {
    user {
      firstName
      lastName
      email
      _id: id
      role
    }
  }
`;
