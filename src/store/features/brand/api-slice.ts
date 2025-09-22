import { apiSlice } from '../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../api/response-type';
import { IBrand } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Brand Store
		 **/
		BrandStore: builder.mutation<ResponseType<IBrand>, Partial<IBrand>>({
			query: (data) => {
				const formData = new FormData();
				Object.entries(data).forEach(([key, value]) => {
					if (value) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: '/brand',
					method: 'POST',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['BRAND'],
		}),

		/**
		 * Brand Update
		 **/
		BrandUpdate: builder.mutation<ResponseType<IBrand>, Partial<IBrand>>({
			query: (data) => {
				const { id, ...rest } = data;
				const formData = new FormData();
				Object.entries(rest).forEach(([key, value]) => {
					if (value !== undefined && value !== null) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: `/brand/${id}`,
					method: 'PATCH',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['BRAND'],
		}),

		/**
		 * Brand Delete
		 **/
		BrandDelete: builder.mutation<ResponseType<IBrand>, { id: number }>({
			query: ({ id }) => {
				return {
					url: `/brand/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['BRAND'],
		}),

		/**
		 * Brand Status Update
		 **/
		BrandStatus: builder.mutation<
			ResponseType<IBrand>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/brand/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['BRAND'],
		}),

		/**
		 * Brand list
		 **/
		Brand: builder.query<
			IPaginatedResponse<IBrand>,
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
					url: `/brand?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['BRAND'],
		}),
	}),
});

export const {
	useBrandStoreMutation,
	useBrandUpdateMutation,
	useBrandDeleteMutation,
	useBrandStatusMutation,
	useBrandQuery,
} = api;
