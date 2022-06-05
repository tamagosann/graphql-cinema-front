import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FilmModel = {
  __typename?: 'FilmModel';
  id: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  films?: Maybe<Array<FilmModel>>;
  prismaFilms?: Maybe<Array<FilmModel>>;
};

export type FilmsIndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type FilmsIndexPageQuery = { __typename?: 'Query', films?: Array<{ __typename?: 'FilmModel', id: string, title: string }> | null };


export const FilmsIndexPageDocument = gql`
    query filmsIndexPage {
  films {
    id
    title
  }
}
    `;

export function useFilmsIndexPageQuery(options?: Omit<Urql.UseQueryArgs<FilmsIndexPageQueryVariables>, 'query'>) {
  return Urql.useQuery<FilmsIndexPageQuery>({ query: FilmsIndexPageDocument, ...options });
};