import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { ITag } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Tag Store
		 **/
		TagStore: builder.mutation<ResponseType<ITag>, Partial<ITag>>({
			query: (data) => {
				return {
					url: '/cms/tag',
					method: 'POST',
					body: data,
				};
			},
			invalidatesTags: ['CMS_TAG'],
		}),

		/**
		 * Tag Update
		 **/
		TagUpdate: builder.mutation<ResponseType<ITag>, Partial<ITag>>({
			query: (data) => {
				const { id, ...rest } = data;
				return {
					url: `/cms/tag/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['CMS_TAG'],
		}),

		/**
		 * Tag Delete
		 **/
		TagDelete: builder.mutation<ResponseType<ITag>, { id: number }>({
			query: ({ id }) => {
				return {
					url: `/cms/tag/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['CMS_TAG'],
		}),

		/**
		 * Tag Status Update
		 **/
		TagStatus: builder.mutation<
			ResponseType<ITag>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/cms/tag/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['CMS_TAG'],
		}),

		/**
		 * Tag
		 **/
		Tag: builder.query<
			IPaginatedResponse<ITag>,
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
					url: `/cms/tag?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['CMS_TAG'],
		}),
	}),
});

export const {
	useTagStoreMutation,
	useTagUpdateMutation,
	useTagDeleteMutation,
	useTagStatusMutation,
	useTagQuery,
} = api;
