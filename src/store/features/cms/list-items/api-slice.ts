import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { ICMSListItems } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * CMSListItems Store
		 **/
		CMSListItemsStore: builder.mutation<
			ResponseType<ICMSListItems>,
			Partial<ICMSListItems>
		>({
			query: (data) => {
				const formData = new FormData();
				Object.entries(data).forEach(([key, value]) => {
					if (value) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: '/cms/list-items',
					method: 'POST',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['CMS_LIST_ITEMS'],
		}),

		/**
		 * CMSListItems Update
		 **/
		CMSListItemsUpdate: builder.mutation<
			ResponseType<ICMSListItems>,
			Partial<ICMSListItems>
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
					url: `/cms/list-items/${id}`,
					method: 'PATCH',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['CMS_LIST_ITEMS'],
		}),

		/**
		 * CMSListItems Delete
		 **/
		CMSListItemsDelete: builder.mutation<
			ResponseType<ICMSListItems>,
			{ id: number }
		>({
			query: ({ id }) => {
				return {
					url: `/cms/list-items/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['CMS_LIST_ITEMS'],
		}),

		/**
		 * CMSListItems Status Update
		 **/
		CMSListItemsStatus: builder.mutation<
			ResponseType<ICMSListItems>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/cms/list-items/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['CMS_LIST_ITEMS'],
		}),

		/**
		 * CMSListItems
		 **/
		CMSListItems: builder.query<
			IPaginatedResponse<ICMSListItems>,
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
					url: `/cms/list-items?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['CMS_LIST_ITEMS'],
		}),
	}),
});

export const {
	useCMSListItemsStoreMutation,
	useCMSListItemsUpdateMutation,
	useCMSListItemsDeleteMutation,
	useCMSListItemsStatusMutation,
	useCMSListItemsQuery,
} = api;
