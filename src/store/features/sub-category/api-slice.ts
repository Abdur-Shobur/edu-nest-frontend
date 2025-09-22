import { apiSlice } from '../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../api/response-type';
import { iSubCategory } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * SubCategory Store
		 **/
		SubCategoryStore: builder.mutation<
			ResponseType<iSubCategory>,
			Partial<iSubCategory> & { categoryId: number }
		>({
			query: (data) => {
				const { id, ...body } = data as any;
				return {
					url: '/sub-category',
					method: 'POST',
					body,
				};
			},
			invalidatesTags: ['ROLE_DEV_SUB_CATEGORY'],
		}),

		/**
		 * SubCategory Update
		 **/
		SubCategoryUpdate: builder.mutation<
			ResponseType<iSubCategory>,
			Partial<iSubCategory> & { id: number; categoryId?: number }
		>({
			query: (data) => {
				const { id, ...rest } = data as any;
				return {
					url: `/sub-category/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['ROLE_DEV_SUB_CATEGORY'],
		}),

		/**
		 * SubCategory Delete
		 **/
		SubCategoryDelete: builder.mutation<
			ResponseType<iSubCategory>,
			{ id: number }
		>({
			query: ({ id }) => {
				return {
					url: `/sub-category/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['ROLE_DEV_SUB_CATEGORY'],
		}),

		/**
		 * SubCategory Status Update
		 **/
		SubCategoryStatus: builder.mutation<
			ResponseType<iSubCategory>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/sub-category/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['ROLE_DEV_SUB_CATEGORY'],
		}),

		/**
		 * SubCategory list
		 **/
		SubCategory: builder.query<
			IPaginatedResponse<iSubCategory>,
			{
				status?: string;
				page?: number;
				limit?: number | 'all';
				search?: string;
				categoryId?: number | 'all';
			}
		>({
			query: ({
				page = 1,
				limit = 10,
				status = '',
				search = '',
				categoryId = 'all',
			}) => {
				if (
					status === 'active' ||
					status === 'inactive' ||
					status === 'trashed'
				) {
					status = status;
				} else {
					status = '';
				}
				const cat = categoryId === 'all' ? '' : categoryId;
				return {
					url: `/sub-category?status=${status}&page=${page}&limit=${limit}&search=${search}&categoryId=${cat}`,
				};
			},
			providesTags: () => ['ROLE_DEV_SUB_CATEGORY'],
		}),
	}),
});

export const {
	useSubCategoryStoreMutation,
	useSubCategoryUpdateMutation,
	useSubCategoryDeleteMutation,
	useSubCategoryStatusMutation,
	useSubCategoryQuery,
} = api;
