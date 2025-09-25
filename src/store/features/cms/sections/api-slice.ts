import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { ICMSSections } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * CMSSections Store
		 **/
		CMSSectionsStore: builder.mutation<
			ResponseType<ICMSSections>,
			Partial<ICMSSections>
		>({
			query: (data) => {
				const formData = new FormData();
				Object.entries(data).forEach(([key, value]) => {
					if (value) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: '/cms/sections',
					method: 'POST',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['CMS_SECTIONS'],
		}),

		/**
		 * CMSSections Update
		 **/
		CMSSectionsUpdate: builder.mutation<
			ResponseType<ICMSSections>,
			Partial<ICMSSections>
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
					url: `/cms/sections/${id}`,
					method: 'PATCH',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['CMS_SECTIONS'],
		}),

		/**
		 * CMSSections Delete
		 **/
		CMSSectionsDelete: builder.mutation<
			ResponseType<ICMSSections>,
			{ id: number }
		>({
			query: ({ id }) => {
				return {
					url: `/cms/sections/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['CMS_SECTIONS'],
		}),

		/**
		 * CMSSections Status Update
		 **/
		CMSSectionsStatus: builder.mutation<
			ResponseType<ICMSSections>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/cms/sections/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['CMS_SECTIONS'],
		}),

		/**
		 * CMSSections
		 **/
		CMSSections: builder.query<
			IPaginatedResponse<ICMSSections>,
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
					url: `/cms/sections?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['CMS_SECTIONS'],
		}),
	}),
});

export const {
	useCMSSectionsStoreMutation,
	useCMSSectionsUpdateMutation,
	useCMSSectionsDeleteMutation,
	useCMSSectionsStatusMutation,
	useCMSSectionsQuery,
} = api;
