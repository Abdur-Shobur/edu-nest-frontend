import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { IBlogCategory } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * BlogCategory Store
		 **/
		BlogCategoryStore: builder.mutation<
			ResponseType<IBlogCategory>,
			Partial<IBlogCategory>
		>({
			query: (data) => {
				return {
					url: '/cms/blog-category',
					method: 'POST',
					body: data,
				};
			},
			invalidatesTags: ['CMS_BLOG_CATEGORY'],
		}),

		/**
		 * BlogCategory Update
		 **/
		BlogCategoryUpdate: builder.mutation<
			ResponseType<IBlogCategory>,
			Partial<IBlogCategory>
		>({
			query: (data) => {
				const { id, ...rest } = data;
				return {
					url: `/cms/blog-category/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['CMS_BLOG_CATEGORY'],
		}),

		/**
		 * BlogCategory Delete
		 **/
		BlogCategoryDelete: builder.mutation<
			ResponseType<IBlogCategory>,
			{ id: number }
		>({
			query: ({ id }) => {
				return {
					url: `/cms/blog-category/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['CMS_BLOG_CATEGORY'],
		}),

		/**
		 * BlogCategory Status Update
		 **/
		BlogCategoryStatus: builder.mutation<
			ResponseType<IBlogCategory>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/cms/blog-category/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['CMS_BLOG_CATEGORY'],
		}),

		/**
		 * BlogCategory
		 **/
		BlogCategory: builder.query<
			IPaginatedResponse<IBlogCategory>,
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
					url: `/cms/blog-category?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['CMS_BLOG_CATEGORY'],
		}),
	}),
});

export const {
	useBlogCategoryStoreMutation,
	useBlogCategoryUpdateMutation,
	useBlogCategoryDeleteMutation,
	useBlogCategoryStatusMutation,
	useBlogCategoryQuery,
} = api;
