import { apiSlice } from '../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../api/response-type';
import { IManager } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Manager Store
		 **/
		ManagerStore: builder.mutation<ResponseType<IManager>, Partial<IManager>>({
			query: (data) => {
				return {
					url: '/manager',
					method: 'POST',
					body: data,
				};
			},
			invalidatesTags: ['USER'],
		}),

		/**
		 * Manager Update
		 **/
		ManagerUpdate: builder.mutation<ResponseType<IManager>, Partial<IManager>>({
			query: (data) => {
				const { id, ...rest } = data;

				return {
					url: `/manager/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['USER'],
		}),

		/**
		 * Manager Delete
		 **/
		ManagerDelete: builder.mutation<ResponseType<IManager>, { id: number }>({
			query: ({ id }) => {
				return {
					url: `/manager/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['USER'],
		}),

		/**
		 * Manager Status Update
		 **/
		ManagerStatus: builder.mutation<
			ResponseType<IManager>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/manager/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['USER'],
		}),

		/**
		 * Manager
		 **/
		Manager: builder.query<
			IPaginatedResponse<IManager>,
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
					status === 'pending' ||
					status === 'blocked' ||
					status === 'trashed'
				) {
					status = status;
				} else {
					status = '';
				}
				return {
					url: `/manager?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['USER'],
		}),
	}),
});

export const {
	useManagerStoreMutation,
	useManagerUpdateMutation,
	useManagerDeleteMutation,
	useManagerStatusMutation,
	useManagerQuery,
} = api;
