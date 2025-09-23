import { apiSlice } from '../api/apiSlice';
import { IPaginatedResponse, ResponseType } from '../api/response-type';
import { ISettings } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Settings Store
		 **/
		SettingsStore: builder.mutation<
			ResponseType<ISettings>,
			{ key: string } & { [K in keyof ISettings]?: ISettings[K] }
		>({
			query: (data) => {
				return {
					url: '/settings',
					method: 'POST',
					body: data,
				};
			},

			invalidatesTags: ['SETTINGS'],
		}),

		/**
		 * Settings Update
		 **/
		SettingsUpdate: builder.mutation<
			ResponseType<ISettings>,
			{ id: number } & {
				[K in keyof ISettings]?: ISettings[K];
			}
		>({
			query: (data) => {
				const { id, ...rest } = data;
				return {
					url: `/settings/${id}`,
					method: 'PATCH',
					body: rest,
				};
			},
			invalidatesTags: ['SETTINGS'],
		}),

		/**
		 * Settings Delete
		 **/
		SettingsDelete: builder.mutation<ResponseType<ISettings>, { id: number }>({
			query: ({ id }) => {
				return {
					url: `/settings/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['SETTINGS'],
		}),

		/**
		 * Settings Status Update
		 **/
		SettingsStatus: builder.mutation<
			ResponseType<ISettings>,
			{ id: number; status: string }
		>({
			query: ({ id, status }) => ({
				url: `/settings/status/${id}`,
				method: 'PATCH',
				body: { status },
			}),
			invalidatesTags: ['SETTINGS'],
		}),

		/**
		 * Settings list
		 **/
		Settings: builder.query<
			IPaginatedResponse<ISettings>,
			{
				status?: string;
				search?: string;
			}
		>({
			query: ({ status = '', search = '' }) => {
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
					url: `/settings`,
				};
			},
			providesTags: () => ['SETTINGS'],
		}),
	}),
});

export const {
	useSettingsStoreMutation,
	useSettingsUpdateMutation,
	useSettingsDeleteMutation,
	useSettingsStatusMutation,
	useSettingsQuery,
} = api;
