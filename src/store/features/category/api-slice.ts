import { apiSlice } from '../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../api/response-type';
import { ICategory } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Category Store
		 **/
		CategoryStore: builder.mutation<
			ResponseType<ICategory>,
			Partial<ICategory>
		>({
			query: (data) => {
				const formData = new FormData();
				Object.entries(data).forEach(([key, value]) => {
					if (value) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: '/category',
					method: 'POST',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Category Update
		 **/
		CategoryUpdate: builder.mutation<
			ResponseType<ICategory>,
			Partial<ICategory>
		>({
			query: (data) => {
				const { id, ...rest } = data;
				const formData = new FormData();
				Object.entries(rest).forEach(([key, value]) => {
					if (value) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: `/category/${id}`,
					method: 'PATCH',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Category Delete
		 **/
		CategoryDelete: builder.mutation<ResponseType<ICategory>, { id: number }>({
			query: ({ id }) => {
				return {
					url: `/category/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Category Status Update
		 **/
		CategoryStatus: builder.mutation<
			ResponseType<ICategory>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/category/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Category
		 **/
		Category: builder.query<
			IPaginatedResponse<ICategory>,
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
					url: `/category?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['ROLE_DEV_CATEGORY'],
		}),
	}),
});

export const {
	useCategoryStoreMutation,
	useCategoryUpdateMutation,
	useCategoryDeleteMutation,
	useCategoryStatusMutation,
	useCategoryQuery,
} = api;
