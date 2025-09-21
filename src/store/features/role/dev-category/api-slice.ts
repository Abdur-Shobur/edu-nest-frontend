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
			invalidatesTags: ['ROLE_DEV_CATEGORY', 'ROLE'],
		}),

		/**
		 * Dev Category Update
		 **/
		DevCategoryUpdate: builder.mutation<
			ResponseType<IDevCategory>,
			Partial<IDevCategory>
		>({
			query: (data) => {
				const { id, ...rest } = data;
				return {
					url: `/role-dev-category/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['ROLE_DEV_CATEGORY', 'ROLE'],
		}),

		/**
		 * Dev Category Delete
		 **/
		DevCategoryDelete: builder.mutation<
			ResponseType<IDevCategory>,
			{ id: number }
		>({
			query: ({ id }) => {
				return {
					url: `/role-dev-category/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['ROLE_DEV_CATEGORY', 'ROLE'],
		}),

		/**
		 * Dev Category Status Update
		 **/
		DevCategoryStatus: builder.mutation<
			ResponseType<IDevCategory>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/role-dev-category/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['ROLE_DEV_CATEGORY', 'ROLE'],
		}),

		/**
		 * Dev Category
		 **/
		DevCategory: builder.query<
			IPaginatedResponse<IDevCategory>,
			{
				status?: string;
				page?: number;
				limit?: number | 'all';
				search?: string;
			}
		>({
			query: ({ page = 1, limit = 10, status = '', search = '' }) => {
				if (
					status === 'active' ||
					status === 'inactive' ||
					status === 'trashed'
				) {
					status = status;
				} else {
					status = '';
				}
				return {
					url: `/role-dev-category?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['ROLE_DEV_CATEGORY'],
		}),
	}),
});

export const {
	useDevCategoryStoreMutation,
	useDevCategoryUpdateMutation,
	useDevCategoryDeleteMutation,
	useDevCategoryStatusMutation,
	useDevCategoryQuery,
} = api;
