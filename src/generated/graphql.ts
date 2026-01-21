import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: Date | string; output: Date | string; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: { input: any; output: any; }
};

export type ArrayRoleInputOperator = {
  arrayContained?: InputMaybe<Array<Array<Role>>>;
  arrayContains?: InputMaybe<Array<Array<Role>>>;
  arrayOverlaps?: InputMaybe<Array<Array<Role>>>;
  eq?: InputMaybe<Array<Role>>;
  gt?: InputMaybe<Array<Role>>;
  gte?: InputMaybe<Array<Role>>;
  ilike?: InputMaybe<Array<Role>>;
  in?: InputMaybe<Array<Array<Role>>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Array<Role>>;
  lt?: InputMaybe<Array<Role>>;
  lte?: InputMaybe<Array<Role>>;
  ne?: InputMaybe<Array<Role>>;
  notIlike?: InputMaybe<Array<Role>>;
  notIn?: InputMaybe<Array<Array<Role>>>;
  notLike?: InputMaybe<Array<Role>>;
};

export type BooleanInputOperator = {
  arrayContained?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  arrayContains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  arrayOverlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
  postsCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CategoryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostWhere>;
};


export type CategoryPostsCountArgs = {
  where?: InputMaybe<PostWhere>;
};

export type CategoryCreate = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<Category_Posts>;
};

export type CategoryOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type CategoryUpdate = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Category_Posts>;
};

export type CategoryWhere = {
  AND?: InputMaybe<Array<CategoryWhere>>;
  NOT?: InputMaybe<CategoryWhere>;
  OR?: InputMaybe<Array<CategoryWhere>>;
  createdAt?: InputMaybe<DateTimeInputOperator>;
  id?: InputMaybe<StringInputOperator>;
  name?: InputMaybe<StringInputOperator>;
  posts?: InputMaybe<PostWhere>;
  updatedAt?: InputMaybe<DateTimeInputOperator>;
};

export type Category_Posts = {
  set?: InputMaybe<Array<Category_PostsSet>>;
};

export type Category_PostsSet = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeInputOperator = {
  arrayContained?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  arrayContains?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  arrayOverlaps?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  ilike?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  notIlike?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  notLike?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyCategory: Array<Category>;
  createManyPost: Array<Post>;
  createManyUser: Array<User>;
  createOneCategory: Category;
  createOnePost: Post;
  createOneUser: User;
  deleteCategory: Array<Category>;
  deletePost: Array<Post>;
  deleteUser: Array<User>;
  seeds?: Maybe<Scalars['Boolean']['output']>;
  signIn?: Maybe<User>;
  signOut?: Maybe<Scalars['Boolean']['output']>;
  updateCategory: Array<Category>;
  updatePost: Array<Post>;
  updateUser: Array<User>;
};


export type MutationCreateManyCategoryArgs = {
  input: Array<CategoryCreate>;
};


export type MutationCreateManyPostArgs = {
  input: Array<PostCreate>;
};


export type MutationCreateManyUserArgs = {
  input: Array<UserCreate>;
};


export type MutationCreateOneCategoryArgs = {
  input: CategoryCreate;
};


export type MutationCreateOnePostArgs = {
  input: PostCreate;
};


export type MutationCreateOneUserArgs = {
  input: UserCreate;
};


export type MutationDeleteCategoryArgs = {
  where?: InputMaybe<CategoryWhere>;
};


export type MutationDeletePostArgs = {
  where?: InputMaybe<PostWhere>;
};


export type MutationDeleteUserArgs = {
  where?: InputMaybe<UserWhere>;
};


export type MutationSignInArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCategoryArgs = {
  input: CategoryUpdate;
  where?: InputMaybe<CategoryWhere>;
};


export type MutationUpdatePostArgs = {
  input: PostUpdate;
  where?: InputMaybe<PostWhere>;
};


export type MutationUpdateUserArgs = {
  input: UserUpdate;
  where?: InputMaybe<UserWhere>;
};

export enum OrderBy {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorCount: Scalars['Int']['output'];
  authorId?: Maybe<Scalars['String']['output']>;
  categories: Array<Category>;
  categoriesCount: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  publishedAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type PostAuthorArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserWhere>;
};


export type PostAuthorCountArgs = {
  where?: InputMaybe<UserWhere>;
};


export type PostCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryWhere>;
};


export type PostCategoriesCountArgs = {
  where?: InputMaybe<CategoryWhere>;
};

export type PostCreate = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Post_Categories>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  publishedAt?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type PostUpdate = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Post_Categories>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostWhere = {
  AND?: InputMaybe<Array<PostWhere>>;
  NOT?: InputMaybe<PostWhere>;
  OR?: InputMaybe<Array<PostWhere>>;
  author?: InputMaybe<UserWhere>;
  authorId?: InputMaybe<StringInputOperator>;
  categories?: InputMaybe<CategoryWhere>;
  content?: InputMaybe<StringInputOperator>;
  createdAt?: InputMaybe<DateTimeInputOperator>;
  id?: InputMaybe<StringInputOperator>;
  published?: InputMaybe<BooleanInputOperator>;
  publishedAt?: InputMaybe<DateTimeInputOperator>;
  title?: InputMaybe<StringInputOperator>;
  updatedAt?: InputMaybe<DateTimeInputOperator>;
};

export type Post_Categories = {
  set?: InputMaybe<Array<Post_CategoriesSet>>;
};

export type Post_CategoriesSet = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  countCategory: Scalars['Int']['output'];
  countPost: Scalars['Int']['output'];
  countUser: Scalars['Int']['output'];
  findFirstCategory?: Maybe<Category>;
  findFirstPost?: Maybe<Post>;
  findFirstUser?: Maybe<User>;
  findManyCategory: Array<Category>;
  findManyPost: Array<Post>;
  findManyUser: Array<User>;
  me?: Maybe<User>;
};


export type QueryCountCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryCountPostArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhere>;
};


export type QueryCountUserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type QueryFindFirstCategoryArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryFindFirstPostArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostWhere>;
};


export type QueryFindFirstUserArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserWhere>;
};


export type QueryFindManyCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryFindManyPostArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostWhere>;
};


export type QueryFindManyUserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserWhere>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type StringInputOperator = {
  arrayContained?: InputMaybe<Array<Scalars['String']['input']>>;
  arrayContains?: InputMaybe<Array<Scalars['String']['input']>>;
  arrayOverlaps?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
  postsCount: Scalars['Int']['output'];
  roles: Array<Role>;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostWhere>;
};


export type UserPostsCountArgs = {
  where?: InputMaybe<PostWhere>;
};

export type UserCreate = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Role>>;
};

export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  roles?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type UserUpdate = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Role>>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  createdAt?: InputMaybe<DateTimeInputOperator>;
  email?: InputMaybe<StringInputOperator>;
  id?: InputMaybe<StringInputOperator>;
  name?: InputMaybe<StringInputOperator>;
  posts?: InputMaybe<PostWhere>;
  roles?: InputMaybe<ArrayRoleInputOperator>;
  updatedAt?: InputMaybe<DateTimeInputOperator>;
};

export type CategoryFragment = { __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string };

export type PostFragment = { __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string };

export type UserFragment = { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string };

export type MeQueryVariables = Exact<{
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> } | null };

export type FindManyCategoryQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhere>;
  orderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type FindManyCategoryQuery = { __typename?: 'Query', findManyCategory: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> }> };

export type FindFirstCategoryQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhere>;
  orderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type FindFirstCategoryQuery = { __typename?: 'Query', findFirstCategory?: { __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> } | null };

export type CountCategoryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhere>;
}>;


export type CountCategoryQuery = { __typename?: 'Query', countCategory: number };

export type FindManyPostQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhere>;
  orderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
  postsCountWhere2?: InputMaybe<PostWhere>;
  postsOffset2?: InputMaybe<Scalars['Int']['input']>;
  postsLimit2?: InputMaybe<Scalars['Int']['input']>;
  postsWhere2?: InputMaybe<PostWhere>;
  postsOrderBy2?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
}>;


export type FindManyPostQuery = { __typename?: 'Query', findManyPost: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> } | null, categories: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> }> }> };

export type FindFirstPostQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhere>;
  orderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
  postsCountWhere2?: InputMaybe<PostWhere>;
  postsOffset2?: InputMaybe<Scalars['Int']['input']>;
  postsLimit2?: InputMaybe<Scalars['Int']['input']>;
  postsWhere2?: InputMaybe<PostWhere>;
  postsOrderBy2?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
}>;


export type FindFirstPostQuery = { __typename?: 'Query', findFirstPost?: { __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> } | null, categories: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> }> } | null };

export type CountPostQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhere>;
}>;


export type CountPostQuery = { __typename?: 'Query', countPost: number };

export type FindManyUserQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhere>;
  orderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type FindManyUserQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> }> };

export type FindFirstUserQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhere>;
  orderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type FindFirstUserQuery = { __typename?: 'Query', findFirstUser?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> } | null };

export type CountUserQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhere>;
}>;


export type CountUserQuery = { __typename?: 'Query', countUser: number };

export type SignInMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut?: boolean | null };

export type SeedsMutationVariables = Exact<{ [key: string]: never; }>;


export type SeedsMutation = { __typename?: 'Mutation', seeds?: boolean | null };

export type CreateOneCategoryMutationVariables = Exact<{
  input: CategoryCreate;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type CreateOneCategoryMutation = { __typename?: 'Mutation', createOneCategory: { __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> } };

export type CreateManyCategoryMutationVariables = Exact<{
  input: Array<CategoryCreate> | CategoryCreate;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type CreateManyCategoryMutation = { __typename?: 'Mutation', createManyCategory: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> }> };

export type UpdateCategoryMutationVariables = Exact<{
  input: CategoryUpdate;
  where?: InputMaybe<CategoryWhere>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> }> };

export type DeleteCategoryMutationVariables = Exact<{
  where?: InputMaybe<CategoryWhere>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> }> };

export type CreateOnePostMutationVariables = Exact<{
  input: PostCreate;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
  postsCountWhere2?: InputMaybe<PostWhere>;
  postsOffset2?: InputMaybe<Scalars['Int']['input']>;
  postsLimit2?: InputMaybe<Scalars['Int']['input']>;
  postsWhere2?: InputMaybe<PostWhere>;
  postsOrderBy2?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
}>;


export type CreateOnePostMutation = { __typename?: 'Mutation', createOnePost: { __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> } | null, categories: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> }> } };

export type CreateManyPostMutationVariables = Exact<{
  input: Array<PostCreate> | PostCreate;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
  postsCountWhere2?: InputMaybe<PostWhere>;
  postsOffset2?: InputMaybe<Scalars['Int']['input']>;
  postsLimit2?: InputMaybe<Scalars['Int']['input']>;
  postsWhere2?: InputMaybe<PostWhere>;
  postsOrderBy2?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
}>;


export type CreateManyPostMutation = { __typename?: 'Mutation', createManyPost: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> } | null, categories: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> }> }> };

export type UpdatePostMutationVariables = Exact<{
  input: PostUpdate;
  where?: InputMaybe<PostWhere>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
  postsCountWhere2?: InputMaybe<PostWhere>;
  postsOffset2?: InputMaybe<Scalars['Int']['input']>;
  postsLimit2?: InputMaybe<Scalars['Int']['input']>;
  postsWhere2?: InputMaybe<PostWhere>;
  postsOrderBy2?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> } | null, categories: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> }> }> };

export type DeletePostMutationVariables = Exact<{
  where?: InputMaybe<PostWhere>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
  postsCountWhere2?: InputMaybe<PostWhere>;
  postsOffset2?: InputMaybe<Scalars['Int']['input']>;
  postsLimit2?: InputMaybe<Scalars['Int']['input']>;
  postsWhere2?: InputMaybe<PostWhere>;
  postsOrderBy2?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> } | null, categories: Array<{ __typename?: 'Category', postsCount: number, id: string, name: string, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string }> }> }> };

export type CreateOneUserMutationVariables = Exact<{
  input: UserCreate;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type CreateOneUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> } };

export type CreateManyUserMutationVariables = Exact<{
  input: Array<UserCreate> | UserCreate;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type CreateManyUserMutation = { __typename?: 'Mutation', createManyUser: Array<{ __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> }> };

export type UpdateUserMutationVariables = Exact<{
  input: UserUpdate;
  where?: InputMaybe<UserWhere>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: Array<{ __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> }> };

export type DeleteUserMutationVariables = Exact<{
  where?: InputMaybe<UserWhere>;
  postsCountWhere?: InputMaybe<PostWhere>;
  postsOffset?: InputMaybe<Scalars['Int']['input']>;
  postsLimit?: InputMaybe<Scalars['Int']['input']>;
  postsWhere?: InputMaybe<PostWhere>;
  postsOrderBy?: InputMaybe<Array<PostOrderBy> | PostOrderBy>;
  authorCountWhere?: InputMaybe<UserWhere>;
  categoriesCountWhere?: InputMaybe<CategoryWhere>;
  authorOffset?: InputMaybe<Scalars['Int']['input']>;
  authorLimit?: InputMaybe<Scalars['Int']['input']>;
  authorWhere?: InputMaybe<UserWhere>;
  authorOrderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>;
  categoriesOffset?: InputMaybe<Scalars['Int']['input']>;
  categoriesLimit?: InputMaybe<Scalars['Int']['input']>;
  categoriesWhere?: InputMaybe<CategoryWhere>;
  categoriesOrderBy?: InputMaybe<Array<CategoryOrderBy> | CategoryOrderBy>;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: Array<{ __typename?: 'User', postsCount: number, id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string, posts: Array<{ __typename?: 'Post', authorCount: number, categoriesCount: number, id: string, published: boolean, title: string, content: string, authorId?: string | null, createdAt: Date | string, updatedAt: Date | string, publishedAt: Date | string, author?: { __typename?: 'User', id: string, email: string, name: string, roles: Array<Role>, createdAt: Date | string, updatedAt: Date | string } | null, categories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: Date | string, updatedAt: Date | string }> }> }> };

export const CategoryFragmentDoc = gql`
    fragment category on Category {
  id
  name
  createdAt
  updatedAt
}
    `;
export const PostFragmentDoc = gql`
    fragment post on Post {
  id
  published
  title
  content
  authorId
  createdAt
  updatedAt
  publishedAt
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  email
  name
  roles
  createdAt
  updatedAt
}
    `;
export const MeDocument = gql`
    query Me($postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  me {
    ...user
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}
${CategoryFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};
export const FindManyCategoryDocument = gql`
    query FindManyCategory($offset: Int, $limit: Int, $where: CategoryWhere, $orderBy: [CategoryOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  findManyCategory(
    offset: $offset
    limit: $limit
    where: $where
    orderBy: $orderBy
  ) {
    ...category
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${CategoryFragmentDoc}
${PostFragmentDoc}
${UserFragmentDoc}`;

export function useFindManyCategoryQuery(options?: Omit<Urql.UseQueryArgs<FindManyCategoryQueryVariables>, 'query'>) {
  return Urql.useQuery<FindManyCategoryQuery, FindManyCategoryQueryVariables>({ query: FindManyCategoryDocument, ...options });
};
export const FindFirstCategoryDocument = gql`
    query FindFirstCategory($offset: Int, $where: CategoryWhere, $orderBy: [CategoryOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  findFirstCategory(offset: $offset, where: $where, orderBy: $orderBy) {
    ...category
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${CategoryFragmentDoc}
${PostFragmentDoc}
${UserFragmentDoc}`;

export function useFindFirstCategoryQuery(options?: Omit<Urql.UseQueryArgs<FindFirstCategoryQueryVariables>, 'query'>) {
  return Urql.useQuery<FindFirstCategoryQuery, FindFirstCategoryQueryVariables>({ query: FindFirstCategoryDocument, ...options });
};
export const CountCategoryDocument = gql`
    query CountCategory($limit: Int, $where: CategoryWhere) {
  countCategory(limit: $limit, where: $where)
}
    `;

export function useCountCategoryQuery(options?: Omit<Urql.UseQueryArgs<CountCategoryQueryVariables>, 'query'>) {
  return Urql.useQuery<CountCategoryQuery, CountCategoryQueryVariables>({ query: CountCategoryDocument, ...options });
};
export const FindManyPostDocument = gql`
    query FindManyPost($offset: Int, $limit: Int, $where: PostWhere, $orderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!], $postsCountWhere2: PostWhere, $postsOffset2: Int, $postsLimit2: Int, $postsWhere2: PostWhere, $postsOrderBy2: [PostOrderBy!]) {
  findManyPost(offset: $offset, limit: $limit, where: $where, orderBy: $orderBy) {
    ...post
    authorCount(where: $authorCountWhere)
    categoriesCount(where: $categoriesCountWhere)
    author(
      offset: $authorOffset
      limit: $authorLimit
      where: $authorWhere
      orderBy: $authorOrderBy
    ) {
      ...user
      postsCount(where: $postsCountWhere)
      posts(
        offset: $postsOffset
        limit: $postsLimit
        where: $postsWhere
        orderBy: $postsOrderBy
      ) {
        ...post
      }
    }
    categories(
      offset: $categoriesOffset
      limit: $categoriesLimit
      where: $categoriesWhere
      orderBy: $categoriesOrderBy
    ) {
      ...category
      postsCount(where: $postsCountWhere2)
      posts(
        offset: $postsOffset2
        limit: $postsLimit2
        where: $postsWhere2
        orderBy: $postsOrderBy2
      ) {
        ...post
      }
    }
  }
}
    ${PostFragmentDoc}
${UserFragmentDoc}
${CategoryFragmentDoc}`;

export function useFindManyPostQuery(options?: Omit<Urql.UseQueryArgs<FindManyPostQueryVariables>, 'query'>) {
  return Urql.useQuery<FindManyPostQuery, FindManyPostQueryVariables>({ query: FindManyPostDocument, ...options });
};
export const FindFirstPostDocument = gql`
    query FindFirstPost($offset: Int, $where: PostWhere, $orderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!], $postsCountWhere2: PostWhere, $postsOffset2: Int, $postsLimit2: Int, $postsWhere2: PostWhere, $postsOrderBy2: [PostOrderBy!]) {
  findFirstPost(offset: $offset, where: $where, orderBy: $orderBy) {
    ...post
    authorCount(where: $authorCountWhere)
    categoriesCount(where: $categoriesCountWhere)
    author(
      offset: $authorOffset
      limit: $authorLimit
      where: $authorWhere
      orderBy: $authorOrderBy
    ) {
      ...user
      postsCount(where: $postsCountWhere)
      posts(
        offset: $postsOffset
        limit: $postsLimit
        where: $postsWhere
        orderBy: $postsOrderBy
      ) {
        ...post
      }
    }
    categories(
      offset: $categoriesOffset
      limit: $categoriesLimit
      where: $categoriesWhere
      orderBy: $categoriesOrderBy
    ) {
      ...category
      postsCount(where: $postsCountWhere2)
      posts(
        offset: $postsOffset2
        limit: $postsLimit2
        where: $postsWhere2
        orderBy: $postsOrderBy2
      ) {
        ...post
      }
    }
  }
}
    ${PostFragmentDoc}
${UserFragmentDoc}
${CategoryFragmentDoc}`;

export function useFindFirstPostQuery(options?: Omit<Urql.UseQueryArgs<FindFirstPostQueryVariables>, 'query'>) {
  return Urql.useQuery<FindFirstPostQuery, FindFirstPostQueryVariables>({ query: FindFirstPostDocument, ...options });
};
export const CountPostDocument = gql`
    query CountPost($limit: Int, $where: PostWhere) {
  countPost(limit: $limit, where: $where)
}
    `;

export function useCountPostQuery(options?: Omit<Urql.UseQueryArgs<CountPostQueryVariables>, 'query'>) {
  return Urql.useQuery<CountPostQuery, CountPostQueryVariables>({ query: CountPostDocument, ...options });
};
export const FindManyUserDocument = gql`
    query FindManyUser($offset: Int, $limit: Int, $where: UserWhere, $orderBy: [UserOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  findManyUser(offset: $offset, limit: $limit, where: $where, orderBy: $orderBy) {
    ...user
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}
${CategoryFragmentDoc}`;

export function useFindManyUserQuery(options?: Omit<Urql.UseQueryArgs<FindManyUserQueryVariables>, 'query'>) {
  return Urql.useQuery<FindManyUserQuery, FindManyUserQueryVariables>({ query: FindManyUserDocument, ...options });
};
export const FindFirstUserDocument = gql`
    query FindFirstUser($offset: Int, $where: UserWhere, $orderBy: [UserOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  findFirstUser(offset: $offset, where: $where, orderBy: $orderBy) {
    ...user
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}
${CategoryFragmentDoc}`;

export function useFindFirstUserQuery(options?: Omit<Urql.UseQueryArgs<FindFirstUserQueryVariables>, 'query'>) {
  return Urql.useQuery<FindFirstUserQuery, FindFirstUserQueryVariables>({ query: FindFirstUserDocument, ...options });
};
export const CountUserDocument = gql`
    query CountUser($limit: Int, $where: UserWhere) {
  countUser(limit: $limit, where: $where)
}
    `;

export function useCountUserQuery(options?: Omit<Urql.UseQueryArgs<CountUserQueryVariables>, 'query'>) {
  return Urql.useQuery<CountUserQuery, CountUserQueryVariables>({ query: CountUserDocument, ...options });
};
export const SignInDocument = gql`
    mutation SignIn($email: String, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  signIn(email: $email) {
    ...user
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}
${CategoryFragmentDoc}`;

export function useSignInMutation() {
  return Urql.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument);
};
export const SignOutDocument = gql`
    mutation SignOut {
  signOut
}
    `;

export function useSignOutMutation() {
  return Urql.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument);
};
export const SeedsDocument = gql`
    mutation Seeds {
  seeds
}
    `;

export function useSeedsMutation() {
  return Urql.useMutation<SeedsMutation, SeedsMutationVariables>(SeedsDocument);
};
export const CreateOneCategoryDocument = gql`
    mutation CreateOneCategory($input: CategoryCreate!, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  createOneCategory(input: $input) {
    ...category
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${CategoryFragmentDoc}
${PostFragmentDoc}
${UserFragmentDoc}`;

export function useCreateOneCategoryMutation() {
  return Urql.useMutation<CreateOneCategoryMutation, CreateOneCategoryMutationVariables>(CreateOneCategoryDocument);
};
export const CreateManyCategoryDocument = gql`
    mutation CreateManyCategory($input: [CategoryCreate!]!, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  createManyCategory(input: $input) {
    ...category
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${CategoryFragmentDoc}
${PostFragmentDoc}
${UserFragmentDoc}`;

export function useCreateManyCategoryMutation() {
  return Urql.useMutation<CreateManyCategoryMutation, CreateManyCategoryMutationVariables>(CreateManyCategoryDocument);
};
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($input: CategoryUpdate!, $where: CategoryWhere, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  updateCategory(input: $input, where: $where) {
    ...category
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${CategoryFragmentDoc}
${PostFragmentDoc}
${UserFragmentDoc}`;

export function useUpdateCategoryMutation() {
  return Urql.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument);
};
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($where: CategoryWhere, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  deleteCategory(where: $where) {
    ...category
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${CategoryFragmentDoc}
${PostFragmentDoc}
${UserFragmentDoc}`;

export function useDeleteCategoryMutation() {
  return Urql.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument);
};
export const CreateOnePostDocument = gql`
    mutation CreateOnePost($input: PostCreate!, $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!], $postsCountWhere2: PostWhere, $postsOffset2: Int, $postsLimit2: Int, $postsWhere2: PostWhere, $postsOrderBy2: [PostOrderBy!]) {
  createOnePost(input: $input) {
    ...post
    authorCount(where: $authorCountWhere)
    categoriesCount(where: $categoriesCountWhere)
    author(
      offset: $authorOffset
      limit: $authorLimit
      where: $authorWhere
      orderBy: $authorOrderBy
    ) {
      ...user
      postsCount(where: $postsCountWhere)
      posts(
        offset: $postsOffset
        limit: $postsLimit
        where: $postsWhere
        orderBy: $postsOrderBy
      ) {
        ...post
      }
    }
    categories(
      offset: $categoriesOffset
      limit: $categoriesLimit
      where: $categoriesWhere
      orderBy: $categoriesOrderBy
    ) {
      ...category
      postsCount(where: $postsCountWhere2)
      posts(
        offset: $postsOffset2
        limit: $postsLimit2
        where: $postsWhere2
        orderBy: $postsOrderBy2
      ) {
        ...post
      }
    }
  }
}
    ${PostFragmentDoc}
${UserFragmentDoc}
${CategoryFragmentDoc}`;

export function useCreateOnePostMutation() {
  return Urql.useMutation<CreateOnePostMutation, CreateOnePostMutationVariables>(CreateOnePostDocument);
};
export const CreateManyPostDocument = gql`
    mutation CreateManyPost($input: [PostCreate!]!, $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!], $postsCountWhere2: PostWhere, $postsOffset2: Int, $postsLimit2: Int, $postsWhere2: PostWhere, $postsOrderBy2: [PostOrderBy!]) {
  createManyPost(input: $input) {
    ...post
    authorCount(where: $authorCountWhere)
    categoriesCount(where: $categoriesCountWhere)
    author(
      offset: $authorOffset
      limit: $authorLimit
      where: $authorWhere
      orderBy: $authorOrderBy
    ) {
      ...user
      postsCount(where: $postsCountWhere)
      posts(
        offset: $postsOffset
        limit: $postsLimit
        where: $postsWhere
        orderBy: $postsOrderBy
      ) {
        ...post
      }
    }
    categories(
      offset: $categoriesOffset
      limit: $categoriesLimit
      where: $categoriesWhere
      orderBy: $categoriesOrderBy
    ) {
      ...category
      postsCount(where: $postsCountWhere2)
      posts(
        offset: $postsOffset2
        limit: $postsLimit2
        where: $postsWhere2
        orderBy: $postsOrderBy2
      ) {
        ...post
      }
    }
  }
}
    ${PostFragmentDoc}
${UserFragmentDoc}
${CategoryFragmentDoc}`;

export function useCreateManyPostMutation() {
  return Urql.useMutation<CreateManyPostMutation, CreateManyPostMutationVariables>(CreateManyPostDocument);
};
export const UpdatePostDocument = gql`
    mutation UpdatePost($input: PostUpdate!, $where: PostWhere, $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!], $postsCountWhere2: PostWhere, $postsOffset2: Int, $postsLimit2: Int, $postsWhere2: PostWhere, $postsOrderBy2: [PostOrderBy!]) {
  updatePost(input: $input, where: $where) {
    ...post
    authorCount(where: $authorCountWhere)
    categoriesCount(where: $categoriesCountWhere)
    author(
      offset: $authorOffset
      limit: $authorLimit
      where: $authorWhere
      orderBy: $authorOrderBy
    ) {
      ...user
      postsCount(where: $postsCountWhere)
      posts(
        offset: $postsOffset
        limit: $postsLimit
        where: $postsWhere
        orderBy: $postsOrderBy
      ) {
        ...post
      }
    }
    categories(
      offset: $categoriesOffset
      limit: $categoriesLimit
      where: $categoriesWhere
      orderBy: $categoriesOrderBy
    ) {
      ...category
      postsCount(where: $postsCountWhere2)
      posts(
        offset: $postsOffset2
        limit: $postsLimit2
        where: $postsWhere2
        orderBy: $postsOrderBy2
      ) {
        ...post
      }
    }
  }
}
    ${PostFragmentDoc}
${UserFragmentDoc}
${CategoryFragmentDoc}`;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const DeletePostDocument = gql`
    mutation DeletePost($where: PostWhere, $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!], $postsCountWhere2: PostWhere, $postsOffset2: Int, $postsLimit2: Int, $postsWhere2: PostWhere, $postsOrderBy2: [PostOrderBy!]) {
  deletePost(where: $where) {
    ...post
    authorCount(where: $authorCountWhere)
    categoriesCount(where: $categoriesCountWhere)
    author(
      offset: $authorOffset
      limit: $authorLimit
      where: $authorWhere
      orderBy: $authorOrderBy
    ) {
      ...user
      postsCount(where: $postsCountWhere)
      posts(
        offset: $postsOffset
        limit: $postsLimit
        where: $postsWhere
        orderBy: $postsOrderBy
      ) {
        ...post
      }
    }
    categories(
      offset: $categoriesOffset
      limit: $categoriesLimit
      where: $categoriesWhere
      orderBy: $categoriesOrderBy
    ) {
      ...category
      postsCount(where: $postsCountWhere2)
      posts(
        offset: $postsOffset2
        limit: $postsLimit2
        where: $postsWhere2
        orderBy: $postsOrderBy2
      ) {
        ...post
      }
    }
  }
}
    ${PostFragmentDoc}
${UserFragmentDoc}
${CategoryFragmentDoc}`;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const CreateOneUserDocument = gql`
    mutation CreateOneUser($input: UserCreate!, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  createOneUser(input: $input) {
    ...user
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}
${CategoryFragmentDoc}`;

export function useCreateOneUserMutation() {
  return Urql.useMutation<CreateOneUserMutation, CreateOneUserMutationVariables>(CreateOneUserDocument);
};
export const CreateManyUserDocument = gql`
    mutation CreateManyUser($input: [UserCreate!]!, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  createManyUser(input: $input) {
    ...user
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}
${CategoryFragmentDoc}`;

export function useCreateManyUserMutation() {
  return Urql.useMutation<CreateManyUserMutation, CreateManyUserMutationVariables>(CreateManyUserDocument);
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UserUpdate!, $where: UserWhere, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  updateUser(input: $input, where: $where) {
    ...user
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}
${CategoryFragmentDoc}`;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($where: UserWhere, $postsCountWhere: PostWhere, $postsOffset: Int, $postsLimit: Int, $postsWhere: PostWhere, $postsOrderBy: [PostOrderBy!], $authorCountWhere: UserWhere, $categoriesCountWhere: CategoryWhere, $authorOffset: Int, $authorLimit: Int, $authorWhere: UserWhere, $authorOrderBy: [UserOrderBy!], $categoriesOffset: Int, $categoriesLimit: Int, $categoriesWhere: CategoryWhere, $categoriesOrderBy: [CategoryOrderBy!]) {
  deleteUser(where: $where) {
    ...user
    postsCount(where: $postsCountWhere)
    posts(
      offset: $postsOffset
      limit: $postsLimit
      where: $postsWhere
      orderBy: $postsOrderBy
    ) {
      ...post
      authorCount(where: $authorCountWhere)
      categoriesCount(where: $categoriesCountWhere)
      author(
        offset: $authorOffset
        limit: $authorLimit
        where: $authorWhere
        orderBy: $authorOrderBy
      ) {
        ...user
      }
      categories(
        offset: $categoriesOffset
        limit: $categoriesLimit
        where: $categoriesWhere
        orderBy: $categoriesOrderBy
      ) {
        ...category
      }
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}
${CategoryFragmentDoc}`;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};