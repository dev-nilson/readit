import { gql } from "@apollo/client";

export const GET_SUBPOST_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubpostsByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_POSTS = gql`
  query MyQuery {
    postsList {
      id
      text
      username
      subpost_id
      created_at
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subposts {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    postsListByTopic(topic: $topic) {
      id
      text
      username
      subpost_id
      created_at
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subposts {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query MyQuery($post_id: ID!) {
    getPosts(post_id: $post_id) {
      id
      text
      username
      subpost_id
      created_at
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subposts {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_VOTES_BY_POST_ID = gql`
  query MyQuery($id: ID!) {
    getVotes(id: $id) {
      id
      upvote
      username
      post_id
      created_at
    }
  }
`;

export const GET_SUBPOSTS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubpostsWithLimit(limit: $limit) {
      id
      topic
      created_at
    }
  }
`;
