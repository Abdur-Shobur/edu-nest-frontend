import { env } from '@/lib';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';

const baseQuery = fetchBaseQuery({
	baseUrl: `${env.baseAPI}/api`,
	prepareHeaders: async (headers) => {
		const session = await getSession(); // Get session from NextAuth
		console.log('session', session);

		if (session) {
			headers.set('Authorization', `Bearer ${session.accessToken}`);
		}

		return headers;
	},
});

export const TAG_TYPES = [
	'USER',
	'ROLE_DEV_CATEGORY',
	'ROLE_DEV_SUB_CATEGORY',
] as const;

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery,
	endpoints: () => ({}),
	refetchOnReconnect: true,
	refetchOnFocus: true,
	tagTypes: TAG_TYPES as unknown as string[],
	keepUnusedDataFor: 50000,
});
