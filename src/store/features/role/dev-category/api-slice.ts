import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { IDevCategory } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Dev Category Store
		 **/
		DevCategoryStore: builder.mutation<
			ResponseType<IDevCategory>,
			Partial<IDevCategory>
		>({
			query: (data) => {
				return {
					url: '/role-dev-category',
					method: 'POST',
					body: data,
				};
			},
			invalidatesTags: ['ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Dev Category Update
		 **/
		DevCategoryUpdate: builder.mutation<
			ResponseType<IDevCategory>,
			IDevCategory
		>({
			query: (data) => {
				return {
					url: '/role-dev-category',
					method: 'PATCH',
					body: data,
				};
			},
			invalidatesTags: ['ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Dev Category Delete
		 **/
		DevCategoryDelete: builder.mutation<
			ResponseType<IDevCategory>,
			{ id: number }
		>({
			query: ({ id }) => ({
				url: `/role-dev-category/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Dev Category
		 **/
		DevCategory: builder.query<
			IPaginatedResponse<IDevCategory>,
			{ status?: string; page?: number; limit?: number }
		>({
			query: ({ page = 1, limit = 10, status = '' }) => ({
				url: `/role-dev-category?status=${status}&page=${page}&limit=${limit}`,
			}),
			providesTags: () => ['ROLE_DEV_CATEGORY'],
		}),
	}),
});

export const {
	useDevCategoryStoreMutation,
	useDevCategoryUpdateMutation,
	useDevCategoryDeleteMutation,
	useDevCategoryQuery,
} = api;
