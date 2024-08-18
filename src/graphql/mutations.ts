/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createTestimonial = /* GraphQL */ `mutation CreateTestimonial(
  $input: CreateTestimonialInput!
  $condition: ModelTestimonialConditionInput
) {
  createTestimonial(input: $input, condition: $condition) {
    id
    name
    avatar
    testimony
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTestimonialMutationVariables,
  APITypes.CreateTestimonialMutation
>;
export const updateTestimonial = /* GraphQL */ `mutation UpdateTestimonial(
  $input: UpdateTestimonialInput!
  $condition: ModelTestimonialConditionInput
) {
  updateTestimonial(input: $input, condition: $condition) {
    id
    name
    avatar
    testimony
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTestimonialMutationVariables,
  APITypes.UpdateTestimonialMutation
>;
export const deleteTestimonial = /* GraphQL */ `mutation DeleteTestimonial(
  $input: DeleteTestimonialInput!
  $condition: ModelTestimonialConditionInput
) {
  deleteTestimonial(input: $input, condition: $condition) {
    id
    name
    avatar
    testimony
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTestimonialMutationVariables,
  APITypes.DeleteTestimonialMutation
>;
