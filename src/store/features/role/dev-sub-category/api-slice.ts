import { apiSlice } from '../../api/apiSlice';
import { ResponseType } from '../../api/response-type';
import { ILogin, ILoginResponse } from './type';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Dev Sub Category
		 **/
		DevSubCategory: builder.mutation<ResponseType<ILoginResponse>, ILogin>({
			query: (data) => {
				return {
					url: '/role-dev-sub-category',
					method: 'POST',
					body: data,
				};
			},
		}),
	}),
});

export const { useDevSubCategoryMutation } = api;
