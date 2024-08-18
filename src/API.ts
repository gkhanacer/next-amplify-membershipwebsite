/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title?: string | null,
  body?: string | null,
  description?: string | null,
  readTime?: number | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  description?: ModelStringInput | null,
  readTime?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title?: string | null,
  body?: string | null,
  description?: string | null,
  readTime?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  description?: string | null,
  readTime?: number | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateTestimonialInput = {
  id?: string | null,
  name?: string | null,
  avatar?: string | null,
  testimony?: string | null,
};

export type ModelTestimonialConditionInput = {
  name?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  testimony?: ModelStringInput | null,
  and?: Array< ModelTestimonialConditionInput | null > | null,
  or?: Array< ModelTestimonialConditionInput | null > | null,
  not?: ModelTestimonialConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Testimonial = {
  __typename: "Testimonial",
  id: string,
  name?: string | null,
  avatar?: string | null,
  testimony?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTestimonialInput = {
  id: string,
  name?: string | null,
  avatar?: string | null,
  testimony?: string | null,
};

export type DeleteTestimonialInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  description?: ModelStringInput | null,
  readTime?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelTestimonialFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  testimony?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTestimonialFilterInput | null > | null,
  or?: Array< ModelTestimonialFilterInput | null > | null,
  not?: ModelTestimonialFilterInput | null,
};

export type ModelTestimonialConnection = {
  __typename: "ModelTestimonialConnection",
  items:  Array<Testimonial | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  readTime?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTestimonialFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  testimony?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTestimonialFilterInput | null > | null,
  or?: Array< ModelSubscriptionTestimonialFilterInput | null > | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    body?: string | null,
    description?: string | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    body?: string | null,
    description?: string | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    body?: string | null,
    description?: string | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTestimonialMutationVariables = {
  input: CreateTestimonialInput,
  condition?: ModelTestimonialConditionInput | null,
};

export type CreateTestimonialMutation = {
  createTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    name?: string | null,
    avatar?: string | null,
    testimony?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTestimonialMutationVariables = {
  input: UpdateTestimonialInput,
  condition?: ModelTestimonialConditionInput | null,
};

export type UpdateTestimonialMutation = {
  updateTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    name?: string | null,
    avatar?: string | null,
    testimony?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTestimonialMutationVariables = {
  input: DeleteTestimonialInput,
  condition?: ModelTestimonialConditionInput | null,
};

export type DeleteTestimonialMutation = {
  deleteTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    name?: string | null,
    avatar?: string | null,
    testimony?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    body?: string | null,
    description?: string | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title?: string | null,
      body?: string | null,
      description?: string | null,
      readTime?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestimonialQueryVariables = {
  id: string,
};

export type GetTestimonialQuery = {
  getTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    name?: string | null,
    avatar?: string | null,
    testimony?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTestimonialsQueryVariables = {
  filter?: ModelTestimonialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestimonialsQuery = {
  listTestimonials?:  {
    __typename: "ModelTestimonialConnection",
    items:  Array< {
      __typename: "Testimonial",
      id: string,
      name?: string | null,
      avatar?: string | null,
      testimony?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    body?: string | null,
    description?: string | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    body?: string | null,
    description?: string | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    body?: string | null,
    description?: string | null,
    readTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTestimonialSubscriptionVariables = {
  filter?: ModelSubscriptionTestimonialFilterInput | null,
};

export type OnCreateTestimonialSubscription = {
  onCreateTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    name?: string | null,
    avatar?: string | null,
    testimony?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTestimonialSubscriptionVariables = {
  filter?: ModelSubscriptionTestimonialFilterInput | null,
};

export type OnUpdateTestimonialSubscription = {
  onUpdateTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    name?: string | null,
    avatar?: string | null,
    testimony?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTestimonialSubscriptionVariables = {
  filter?: ModelSubscriptionTestimonialFilterInput | null,
};

export type OnDeleteTestimonialSubscription = {
  onDeleteTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    name?: string | null,
    avatar?: string | null,
    testimony?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
