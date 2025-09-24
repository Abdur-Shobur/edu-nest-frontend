import { env } from '@/lib';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';

const baseQuery = fetchBaseQuery({
	baseUrl: `${env.baseAPI}/api`,
	prepareHeaders: async (headers) => {
		const session = await getSession(); // Get session from NextAuth

		if (session) {
			headers.set('Authorization', `Bearer ${session.accessToken}`);
		}

		return headers;
	},
});

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery,
	endpoints: () => ({}),
	refetchOnReconnect: true,
	refetchOnFocus: true,
	tagTypes: [
		'USER',
		'ROLE_DEV_CATEGORY',
		'ROLE_DEV_SUB_CATEGORY',
		'ROLE',
		'CATEGORY',
		'SUB_CATEGORY',
		'BRAND',
		'SETTINGS',
		'MANAGER',
	],
	keepUnusedDataFor: 50000,
});
