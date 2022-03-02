import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

export interface User {
  email: string;
  id: string;
}

export interface UserResponse {
  email: string;
  id: string;
}

export interface PassLoginRequest {
  email: string
  password: string
}

export const api = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE,
    baseUrl: '/',
    // prepareHeaders: (headers, { getState }) => {
    //   // By default, if we have a token in the store, let's use that for authenticated requests
    //   const token = (getState() as RootState).auth.token
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, PassLoginRequest>({
      query: (credentials) => ({
        url: '/api/users/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation } = api
