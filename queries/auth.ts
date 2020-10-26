import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;
