import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { iWindow } from '@/interfaces/Interfaces';


export interface DesignPayload {
    windowW: number;
    windowH: number;
    partition: number;
}

const postDesignRoute = '/api/designs/';
const fetchDesignRoute = '/api/designs/';




export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
    }),
    tagTypes: ['Design'],
    endpoints(builder) {
        return {
            postDesign: builder.mutation<iWindow, DesignPayload | void>({
                query: (body) => ({
                    url: postDesignRoute,
                    method: 'POST',
                    body: {
                        ...body
                    }
                }),
                invalidatesTags: ['Design'],
            }),
            getDesigns: builder.query<iWindow[], void>({
                query() {
                    return fetchDesignRoute
                },
                // force cache to hold for 20 seconds, seems not working as intended
                keepUnusedDataFor: 20,
                providesTags: ['Design'],
            }),
            getSingleDesign: builder.query<iWindow, string | void>({
                query(id) {
                    return fetchDesignRoute + id
                },
                providesTags: ['Design'],
            })

        }
    }
});

export const { usePostDesignMutation, useGetDesignsQuery, useGetSingleDesignQuery } = apiSlice;