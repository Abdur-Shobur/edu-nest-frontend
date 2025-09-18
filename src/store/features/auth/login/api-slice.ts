import { signIn } from 'next-auth/react';
import { apiSlice } from '../../api/apiSlice';
import { ResponseType } from '../../api/response-type';
import { ILogin, ILoginResponse } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Login
		 **/
		Login: builder.mutation<ResponseType<ILoginResponse>, ILogin>({
			query: (data) => {
				return {
					url: '/auth/login',
					method: 'POST',
					body: data,
				};
			},
			async onQueryStarted(arg, { queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					// persist tokens into NextAuth session
					await signIn('credentials', {
						redirect: false,
						token: JSON.stringify(data),
					});
				} catch (e) {
					// ignore, handled by the component
				}
			},
		}),
	}),
});

export const { useLoginMutation } = api;
