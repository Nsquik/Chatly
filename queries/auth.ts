import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Register(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $passwordConfirmation: String!
  ) {
    registerUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      passwordConfirmation: $passwordConfirmation
    ) {
      id
    }
  }
`;
