/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    body
    description
    readTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      body
      description
      readTime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getTestimonial = /* GraphQL */ `query GetTestimonial($id: ID!) {
  getTestimonial(id: $id) {
    id
    name
    avatar
    testimony
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTestimonialQueryVariables,
  APITypes.GetTestimonialQuery
>;
export const listTestimonials = /* GraphQL */ `query ListTestimonials(
  $filter: ModelTestimonialFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestimonials(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      avatar
      testimony
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTestimonialsQueryVariables,
  APITypes.ListTestimonialsQuery
>;
