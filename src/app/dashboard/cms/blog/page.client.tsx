'use client';

import { Container1 } from '@/components/container';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	CMSBlogPage,
	CMSBlogStore,
	useCMSBlogQuery,
} from '@/store/features/cms';

import { useQueryStates } from 'nuqs';

const PageClient = () => {
	// Define params configuration
	const paramsConfig = {
		page: {
			defaultValue: 1,
			parse: (value: string) => parseInt(value) || 1,
			serialize: (value: number) => value.toString(),
		},
		limit: {
			defaultValue: 10,
			parse: (value: string) => parseInt(value) || 10,
			serialize: (value: number) => value.toString(),
		},
		status: {
			defaultValue: 'all',
			parse: (value: string) => value || 'all',
			serialize: (value: string) => value || 'all',
		},
		search: {
			defaultValue: '',
			parse: (value: string) => value || '',
			serialize: (value: string) => value || '',
		},
	};

	// Query states hook
	const [params, setParams] = useQueryStates(paramsConfig, { shallow: false });
	const { page, limit, status, search } = params;

	const { data, isLoading, isError, error } = useCMSBlogQuery({
		page,
		limit,
		status,
		search,
	});

	return (
		<Container1
			isLoading={isLoading}
			isError={isError}
			error={error}
			header={
				<CardHeader className="pb-2 px-5 flex-1 flex items-center justify-between">
					<div>
						<CardTitle className="text-primary font-semibold text-xl">
							Blog
						</CardTitle>
						<CardDescription className="text-tertiary font-normal text-base hidden lg:block">
							Recently created Blog from this organization.
						</CardDescription>
					</div>
					<CMSBlogStore />
				</CardHeader>
			}
		>
			{/* page content */}

			{data?.data && (
				<CMSBlogPage
					data={data?.data}
					meta={data?.meta}
					params={params}
					setParams={setParams}
				/>
			)}
		</Container1>
	);
};

export default PageClient;
