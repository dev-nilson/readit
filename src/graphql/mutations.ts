import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation MyMutation(
    $username: String!
    $text: String!
    $subpost_id: ID!
  ) {
    inserPost(
      subpost_id: $subpost_id
      username: $username
      text: $text
    ) {
      subpost_id
      username
      text
    }
  }
`