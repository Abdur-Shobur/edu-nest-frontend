import { apiSlice } from '../../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../../api/response-type';
import { ICMSPageSections } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Store
		 **/
		CMSPageSectionsStore: builder.mutation<
			ResponseType<ICMSPageSections>,
			Partial<ICMSPageSections>
		>({
			query: (data) => {
				return {
					url: '/cms/page-sections',
					method: 'POST',
					body: data,
				};
			},
			invalidatesTags: ['CMS_PAGE_SECTIONS'],
		}),

		/**
		 * Update
		 **/
		CMSPageSectionsUpdate: builder.mutation<
			ResponseType<ICMSPageSections>,
			Partial<ICMSPageSections>
		>({
			query: (data) => {
				const { id, ...rest } = data;
				return {
					url: `/cms/page-sections/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['CMS_PAGE_SECTIONS'],
		}),

		/**
		 * Delete
		 **/
		CMSPageSectionsDelete: builder.mutation<
			ResponseType<ICMSPageSections>,
			{ id: number }
		>({
			query: ({ id }) => {
				return {
					url: `/cms/page-sections/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['CMS_PAGE_SECTIONS'],
		}),

		/**
		 * Status Update
		 **/
		CMSPageSectionsStatus: builder.mutation<
			ResponseType<ICMSPageSections>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/cms/page-sections/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['CMS_PAGE_SECTIONS'],
		}),

		/**
		 *  CMSPageSections
		 **/
		CMSPageSections: builder.query<
			IPaginatedResponse<ICMSPageSections>,
			{
				pageIsFor?: string;
			}
		>({
			query: ({ pageIsFor = '' }) => {
				return {
					url: `/cms/page-sections?pageIsFor=${pageIsFor}`,
				};
			},
			providesTags: () => ['CMS_PAGE_SECTIONS'],
		}),
	}),
});

export const {
	useCMSPageSectionsStoreMutation,
	useCMSPageSectionsUpdateMutation,
	useCMSPageSectionsDeleteMutation,
	useCMSPageSectionsStatusMutation,
	useCMSPageSectionsQuery,
} = api;
