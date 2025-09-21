import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { IDevSubCategory, IDevSubCategoryStatus } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Dev Sub Category Store
		 **/
		DevSubCategoryStore: builder.mutation<
			ResponseType<IDevSubCategory>,
			Partial<IDevSubCategory>
		>({
			query: (data) => {
				return {
					url: '/role-dev-sub-category',
					method: 'POST',
					body: data,
				};
			},
			invalidatesTags: ['ROLE_DEV_SUB_CATEGORY', 'ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Dev Sub Category Update
		 **/
		DevSubCategoryUpdate: builder.mutation<
			ResponseType<IDevSubCategory>,
			Partial<IDevSubCategory>
		>({
			query: (data) => {
				const { id, ...rest } = data;
				return {
					url: `/role-dev-sub-category/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['ROLE_DEV_SUB_CATEGORY', 'ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Dev Sub Category Delete
		 **/
		DevSubCategoryDelete: builder.mutation<
			ResponseType<IDevSubCategory>,
			{ id: number }
		>({
			query: ({ id }) => {
				return {
					url: `/role-dev-sub-category/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['ROLE_DEV_SUB_CATEGORY', 'ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Dev Sub Category Status Update
		 **/
		DevSubCategoryStatus: builder.mutation<
			ResponseType<IDevSubCategory>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/role-dev-sub-category/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['ROLE_DEV_SUB_CATEGORY', 'ROLE_DEV_CATEGORY'],
		}),

		/**
		 * Dev Sub Category
		 **/
		DevSubCategory: builder.query<
			IPaginatedResponse<IDevSubCategory>,
			{
				status?: string;
				page?: number;
				limit?: number | 'all';
				search?: string;
			}
		>({
			query: ({ page = 1, limit = 10, status = '', search = '' }) => {
				const allowedStatuses = Object.values(IDevSubCategoryStatus);

				if (!allowedStatuses.includes(status as IDevSubCategoryStatus)) {
					status = '';
				}
				return {
					url: `/role-dev-sub-category?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['ROLE_DEV_SUB_CATEGORY'],
		}),
	}),
});

export const {
	useDevSubCategoryStoreMutation,
	useDevSubCategoryUpdateMutation,
	useDevSubCategoryDeleteMutation,
	useDevSubCategoryStatusMutation,
	useDevSubCategoryQuery,
} = api;
