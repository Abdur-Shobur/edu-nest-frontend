import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { IBlog, IBlogCreatePayload, IBlogUpdatePayload } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Blog Store
		 **/
		CMSBlogStore: builder.mutation<ResponseType<IBlog>, IBlogCreatePayload>({
			query: (data) => {
				console.log(data);
				const formData = new FormData();
				Object.entries(data).forEach(([key, value]) => {
					if (value) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: '/cms/blog',
					method: 'POST',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['CMS_BLOG'],
		}),

		/**
		 * Blog Update
		 **/
		CMSBlogUpdate: builder.mutation<ResponseType<IBlog>, IBlogUpdatePayload>({
			query: (data) => {
				const { id, ...rest } = data as IBlogUpdatePayload;
				const formData = new FormData();
				Object.entries(rest).forEach(([key, value]) => {
					if (value) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: `/cms/blog/${id}`,
					method: 'PATCH',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['CMS_BLOG'],
		}),

		/**
		 * Blog Delete
		 **/
		CMSBlogDelete: builder.mutation<ResponseType<IBlog>, { id: number }>({
			query: ({ id }) => {
				return {
					url: `/cms/blog/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['CMS_BLOG'],
		}),

		/**
		 * Blog Status Update
		 **/
		CMSBlogStatus: builder.mutation<
			ResponseType<IBlog>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/cms/blog/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['CMS_BLOG'],
		}),

		/**
		 * Blog
		 **/
		CMSBlog: builder.query<
			IPaginatedResponse<IBlog>,
			{
				status?: string;
				page?: number;
				limit?: number | 'all';
				search?: string;
			}
		>({
			query: ({ page = 1, limit = 10, status = '', search = '' }) => {
				if (
					status === 'published' ||
					status === 'unpublished' ||
					status === 'draft' ||
					status === 'trashed'
				) {
					status = status;
				} else {
					status = '';
				}
				return {
					url: `/cms/blog?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['CMS_BLOG'],
		}),
	}),
});

export const {
	useCMSBlogStoreMutation,
	useCMSBlogUpdateMutation,
	useCMSBlogDeleteMutation,
	useCMSBlogStatusMutation,
	useCMSBlogQuery,
} = api;
