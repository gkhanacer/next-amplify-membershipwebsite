/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateTestimonial = /* GraphQL */ `subscription OnCreateTestimonial(
  $filter: ModelSubscriptionTestimonialFilterInput
) {
  onCreateTestimonial(filter: $filter) {
    id
    name
    avatar
    testimony
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTestimonialSubscriptionVariables,
  APITypes.OnCreateTestimonialSubscription
>;
export const onUpdateTestimonial = /* GraphQL */ `subscription OnUpdateTestimonial(
  $filter: ModelSubscriptionTestimonialFilterInput
) {
  onUpdateTestimonial(filter: $filter) {
    id
    name
    avatar
    testimony
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTestimonialSubscriptionVariables,
  APITypes.OnUpdateTestimonialSubscription
>;
export const onDeleteTestimonial = /* GraphQL */ `subscription OnDeleteTestimonial(
  $filter: ModelSubscriptionTestimonialFilterInput
) {
  onDeleteTestimonial(filter: $filter) {
    id
    name
    avatar
    testimony
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTestimonialSubscriptionVariables,
  APITypes.OnDeleteTestimonialSubscription
>;
