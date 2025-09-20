'use client';

import { Container1 } from '@/components/container';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	DevCategoryPage,
	DevCategoryStore,
	useDevCategoryQuery,
} from '@/store/features/role';
import { useQueryState } from 'nuqs';

const PageClient = () => {
	const [page, setPage] = useQueryState('page', {
		defaultValue: 1,
		parse: (value) => parseInt(value) || 1,
		serialize: (value) => value.toString(),
	});

	const [limit, setLimit] = useQueryState('limit', {
		defaultValue: 10,
		parse: (value) => parseInt(value) || 10,
		serialize: (value) => value.toString(),
	});

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	const handleLimitChange = (newLimit: number) => {
		setLimit(newLimit);
		setPage(1); // Reset to first page when limit changes
	};

	const { data, isLoading, isError, error } = useDevCategoryQuery({
		page,
		limit,
		status: 'active',
	});

	console.log({ error });

	return (
		<Container1
			isLoading={isLoading}
			isError={isError}
			error={error}
			header={
				<CardHeader className="pb-2 px-5 flex-1 flex items-center justify-between">
					<div>
						<CardTitle className="text-primary font-semibold text-xl">
							Dev Category
						</CardTitle>
						<CardDescription className="text-tertiary font-normal text-base">
							Recently created Dev Category from this organization.
						</CardDescription>
					</div>
					<DevCategoryStore />
				</CardHeader>
			}
		>
			{/* page content */}

			{data?.data && (
				<DevCategoryPage
					data={data?.data}
					meta={data?.meta}
					setPage={handlePageChange}
					setLimit={handleLimitChange}
				/>
			)}
		</Container1>
	);
};

export default PageClient;
