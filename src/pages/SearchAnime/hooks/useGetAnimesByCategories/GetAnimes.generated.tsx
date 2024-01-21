import * as Types from '../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SearchAnimeInitialAnimesQueryQueryVariables = Types.Exact<{
  season?: Types.InputMaybe<Types.MediaSeason>;
  seasonYear?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  nextSeason?: Types.InputMaybe<Types.MediaSeason>;
  nextYear?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type SearchAnimeInitialAnimesQueryQuery = { __typename?: 'Query', trending?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, bannerImage?: string | null, season?: Types.MediaSeason | null, seasonYear?: number | null, description?: string | null, type?: Types.MediaType | null, format?: Types.MediaFormat | null, status?: Types.MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, genres?: Array<string | null> | null, isAdult?: boolean | null, averageScore?: number | null, popularity?: number | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, color?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: Types.MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number } | null, studios?: { __typename?: 'StudioConnection', edges?: Array<{ __typename?: 'StudioEdge', isMain: boolean, node?: { __typename?: 'Studio', id: number, name: string } | null } | null> | null } | null } | null> | null } | null, season?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, bannerImage?: string | null, season?: Types.MediaSeason | null, seasonYear?: number | null, description?: string | null, type?: Types.MediaType | null, format?: Types.MediaFormat | null, status?: Types.MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, genres?: Array<string | null> | null, isAdult?: boolean | null, averageScore?: number | null, popularity?: number | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, color?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: Types.MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number } | null, studios?: { __typename?: 'StudioConnection', edges?: Array<{ __typename?: 'StudioEdge', isMain: boolean, node?: { __typename?: 'Studio', id: number, name: string } | null } | null> | null } | null } | null> | null } | null, nextSeason?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, bannerImage?: string | null, season?: Types.MediaSeason | null, seasonYear?: number | null, description?: string | null, type?: Types.MediaType | null, format?: Types.MediaFormat | null, status?: Types.MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, genres?: Array<string | null> | null, isAdult?: boolean | null, averageScore?: number | null, popularity?: number | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, color?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: Types.MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number } | null, studios?: { __typename?: 'StudioConnection', edges?: Array<{ __typename?: 'StudioEdge', isMain: boolean, node?: { __typename?: 'Studio', id: number, name: string } | null } | null> | null } | null } | null> | null } | null, popular?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, bannerImage?: string | null, season?: Types.MediaSeason | null, seasonYear?: number | null, description?: string | null, type?: Types.MediaType | null, format?: Types.MediaFormat | null, status?: Types.MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, genres?: Array<string | null> | null, isAdult?: boolean | null, averageScore?: number | null, popularity?: number | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, color?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: Types.MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number } | null, studios?: { __typename?: 'StudioConnection', edges?: Array<{ __typename?: 'StudioEdge', isMain: boolean, node?: { __typename?: 'Studio', id: number, name: string } | null } | null> | null } | null } | null> | null } | null, top?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, bannerImage?: string | null, season?: Types.MediaSeason | null, seasonYear?: number | null, description?: string | null, type?: Types.MediaType | null, format?: Types.MediaFormat | null, status?: Types.MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, genres?: Array<string | null> | null, isAdult?: boolean | null, averageScore?: number | null, popularity?: number | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, color?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: Types.MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number } | null, studios?: { __typename?: 'StudioConnection', edges?: Array<{ __typename?: 'StudioEdge', isMain: boolean, node?: { __typename?: 'Studio', id: number, name: string } | null } | null> | null } | null } | null> | null } | null };

export type MediaFragment = { __typename?: 'Media', id: number, bannerImage?: string | null, season?: Types.MediaSeason | null, seasonYear?: number | null, description?: string | null, type?: Types.MediaType | null, format?: Types.MediaFormat | null, status?: Types.MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, genres?: Array<string | null> | null, isAdult?: boolean | null, averageScore?: number | null, popularity?: number | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, color?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: Types.MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number } | null, studios?: { __typename?: 'StudioConnection', edges?: Array<{ __typename?: 'StudioEdge', isMain: boolean, node?: { __typename?: 'Studio', id: number, name: string } | null } | null> | null } | null };

export const MediaFragmentDoc = gql`
    fragment media on Media {
  id
  title {
    userPreferred
  }
  coverImage {
    extraLarge
    large
    color
  }
  startDate {
    year
    month
    day
  }
  endDate {
    year
    month
    day
  }
  bannerImage
  season
  seasonYear
  description
  type
  format
  status(version: 2)
  episodes
  duration
  chapters
  volumes
  genres
  isAdult
  averageScore
  popularity
  mediaListEntry {
    id
    status
  }
  nextAiringEpisode {
    airingAt
    timeUntilAiring
    episode
  }
  studios(isMain: true) {
    edges {
      isMain
      node {
        id
        name
      }
    }
  }
}
    `;
export const SearchAnimeInitialAnimesQueryDocument = gql`
    query SearchAnimeInitialAnimesQuery($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int) {
  trending: Page(page: 1, perPage: 6) {
    media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
  season: Page(page: 1, perPage: 6) {
    media(
      season: $season
      seasonYear: $seasonYear
      sort: POPULARITY_DESC
      type: ANIME
      isAdult: false
    ) {
      ...media
    }
  }
  nextSeason: Page(page: 1, perPage: 6) {
    media(
      season: $nextSeason
      seasonYear: $nextYear
      sort: POPULARITY_DESC
      type: ANIME
      isAdult: false
    ) {
      ...media
    }
  }
  popular: Page(page: 1, perPage: 6) {
    media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
  top: Page(page: 1, perPage: 10) {
    media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
}
    ${MediaFragmentDoc}`;

/**
 * __useSearchAnimeInitialAnimesQueryQuery__
 *
 * To run a query within a React component, call `useSearchAnimeInitialAnimesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAnimeInitialAnimesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAnimeInitialAnimesQueryQuery({
 *   variables: {
 *      season: // value for 'season'
 *      seasonYear: // value for 'seasonYear'
 *      nextSeason: // value for 'nextSeason'
 *      nextYear: // value for 'nextYear'
 *   },
 * });
 */
export function useSearchAnimeInitialAnimesQueryQuery(baseOptions?: Apollo.QueryHookOptions<SearchAnimeInitialAnimesQueryQuery, SearchAnimeInitialAnimesQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchAnimeInitialAnimesQueryQuery, SearchAnimeInitialAnimesQueryQueryVariables>(SearchAnimeInitialAnimesQueryDocument, options);
      }
export function useSearchAnimeInitialAnimesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchAnimeInitialAnimesQueryQuery, SearchAnimeInitialAnimesQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchAnimeInitialAnimesQueryQuery, SearchAnimeInitialAnimesQueryQueryVariables>(SearchAnimeInitialAnimesQueryDocument, options);
        }
export function useSearchAnimeInitialAnimesQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchAnimeInitialAnimesQueryQuery, SearchAnimeInitialAnimesQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchAnimeInitialAnimesQueryQuery, SearchAnimeInitialAnimesQueryQueryVariables>(SearchAnimeInitialAnimesQueryDocument, options);
        }
export type SearchAnimeInitialAnimesQueryQueryHookResult = ReturnType<typeof useSearchAnimeInitialAnimesQueryQuery>;
export type SearchAnimeInitialAnimesQueryLazyQueryHookResult = ReturnType<typeof useSearchAnimeInitialAnimesQueryLazyQuery>;
export type SearchAnimeInitialAnimesQuerySuspenseQueryHookResult = ReturnType<typeof useSearchAnimeInitialAnimesQuerySuspenseQuery>;
export type SearchAnimeInitialAnimesQueryQueryResult = Apollo.QueryResult<SearchAnimeInitialAnimesQueryQuery, SearchAnimeInitialAnimesQueryQueryVariables>;