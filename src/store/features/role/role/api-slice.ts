import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { IRole, IRoleStatus } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Dev Sub Category Store
		 **/
		RoleStore: builder.mutation<
			ResponseType<IRole>,
			Partial<IRole>
		>({
			query: (data) => {
				return {
					url: '/role',
					method: 'POST',
					body: data,
				};
			},
			invalidatesTags: ['ROLE'],
		}),

		/**
		 * Dev Sub Category Update
		 **/
		RoleUpdate: builder.mutation<
			ResponseType<IRole>,
			Partial<IRole>
		>({
			query: (data) => {
				const { id, ...rest } = data;
				return {
					url: `/role/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['ROLE'],
		}),

		/**
		 * Dev Sub Category Delete
		 **/
		RoleDelete: builder.mutation<
			ResponseType<IRole>,
			{ id: number }
		>({
			query: ({ id }) => {
				return {
					url: `/role/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['ROLE'],
		}),

		/**
		 * Dev Sub Category Status Update
		 **/
		RoleStatus: builder.mutation<
			ResponseType<IRole>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/role/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['ROLE'],
		}),

		/**
		 * Dev Sub Category
		 **/
		Role: builder.query<
			IPaginatedResponse<IRole>,
			{ status?: string; page?: number; limit?: number; search?: string }
		>({
			query: ({ page = 1, limit = 10, status = '', search = '' }) => {
				const allowedStatuses = Object.values(IRoleStatus);

				if (!allowedStatuses.includes(status as IRoleStatus)) {
					status = '';
				}
				return {
					url: `/role?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['ROLE'],
		}),
	}),
});

export const {
	useRoleStoreMutation,
	useRoleUpdateMutation,
	useRoleDeleteMutation,
	useRoleStatusMutation,
	useRoleQuery,
} = api;
