import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { ICMSBanner } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * CMSBanner Store
		 **/
		CMSBannerStore: builder.mutation<
			ResponseType<ICMSBanner>,
			Partial<ICMSBanner>
		>({
			query: (data) => {
				const formData = new FormData();
				Object.entries(data).forEach(([key, value]) => {
					if (value) {
						formData.append(key, value as string | Blob);
					}
				});
				return {
					url: '/cms/banner',
					method: 'POST',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['CMS_BANNER'],
		}),

		/**
		 * CMSBanner Update
		 **/
		CMSBannerUpdate: builder.mutation<
			ResponseType<ICMSBanner>,
			Partial<ICMSBanner>
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
					url: `/cms/banner/${id}`,
					method: 'PATCH',
					body: formData,
					formData: true,
				};
			},
			invalidatesTags: ['CMS_BANNER'],
		}),

		/**
		 * CMSBanner Delete
		 **/
		CMSBannerDelete: builder.mutation<ResponseType<ICMSBanner>, { id: number }>(
			{
				query: ({ id }) => {
					return {
						url: `/cms/banner/${id}`,
						method: 'DELETE',
					};
				},
				invalidatesTags: ['CMS_BANNER'],
			}
		),

		/**
		 * CMSBanner Status Update
		 **/
		CMSBannerStatus: builder.mutation<
			ResponseType<ICMSBanner>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/cms/banner/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['CMS_BANNER'],
		}),

		/**
		 * CMSBanner
		 **/
		CMSBanner: builder.query<
			IPaginatedResponse<ICMSBanner>,
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
					url: `/cms/banner?status=${status}&page=${page}&limit=${limit}&search=${search}`,
				};
			},
			providesTags: () => ['CMS_BANNER'],
		}),
	}),
});

export const {
	useCMSBannerStoreMutation,
	useCMSBannerUpdateMutation,
	useCMSBannerDeleteMutation,
	useCMSBannerStatusMutation,
	useCMSBannerQuery,
} = api;
