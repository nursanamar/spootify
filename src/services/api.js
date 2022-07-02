import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from "../config";

export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: config.api.baseUrl,
        prepareHeaders: (headers,{getState}) => {
            let token = getState().auth.token

            if(token){
                headers.set("Authorization", "Bearer " + token)
            }

            return headers
        }
    }),
    endpoints: (builder) => ({
        getNewReleases: builder.query({
            query: () => `browse/new-releases`
        }),
        getFeaturedPlaylists: builder.query({
            query: () => `browse/featured-playlists`
        }),
        getCategories: builder.query({
            query: () => `browse/categories`
        })
    }),
})