import { apiSlice } from '../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../api/response-type';
import { IUser } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * User Store
		 **/
		UserStore: builder.mutation<ResponseType<IUser>, Partial<IUser>>({
			query: (data) => {
				return {
					url: '/users',
					method: 'POST',
					body: data,
				};
			},
			invalidatesTags: ['USER'],
		}),

		/**
		 * User Update
		 **/
		UserUpdate: builder.mutation<ResponseType<IUser>, Partial<IUser>>({
			query: (data) => {
				const { id, ...rest } = data;

				return {
					url: `/users/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['USER'],
		}),

		/**
		 * User Delete
		 **/
		UserDelete: builder.mutation<ResponseType<IUser>, { id: number }>({
			query: ({ id }) => {
				return {
					url: `/users/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['USER'],
		}),

		/**
		 * User Status Update
		 **/
		UserStatus: builder.mutation<
			ResponseType<IUser>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/users/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['USER'],
		}),

		/**
		 * User
		 **/
		User: builder.query<
			IPaginatedResponse<IUser>,
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
					url: `/users?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['USER'],
		}),
	}),
});

export const {
	useUserStoreMutation,
	useUserUpdateMutation,
	useUserDeleteMutation,
	useUserStatusMutation,
	useUserQuery,
} = api;
