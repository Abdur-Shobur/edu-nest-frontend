'use client';

import { Container1 } from '@/components/container';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useDevSubCategoryQuery } from '@/store/features/role';

const PageClient = () => {
	const { data, isLoading, isError, error } = useDevSubCategoryQuery({
		page: 1,
		limit: 'all',
		status: 'all',
		search: '',
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
							Roles Keys
						</CardTitle>
					</div>
				</CardHeader>
			}
		>
			<Textarea
				defaultValue={`export enum Role {\n${[...(data?.data || [])]
					.sort((a, b) => a.permissionKey.localeCompare(b.permissionKey))
					.map(
						(item) =>
							`  ${item.permissionKey.toUpperCase()} = '${item.permissionKey}'`
					)
					.join(',\n')}\n}`}
			/>
		</Container1>
	);
};

export default PageClient;
