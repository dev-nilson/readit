import { gql } from "@apollo/client";

export const GET_SUBPOST_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubpostsByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`
