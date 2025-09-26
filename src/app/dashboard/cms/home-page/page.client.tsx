'use client';

import { Container1 } from '@/components/container';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	CMSPageSectionsPage,
	CMSPageSectionsStore,
	ICMSPageIsFor,
	useCMSPageSectionsQuery,
} from '@/store/features/cms';

const PageClient = () => {
	const { data, isLoading, isError, error } = useCMSPageSectionsQuery({
		pageIsFor: ICMSPageIsFor.Home,
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
							Home Page
						</CardTitle>
						<CardDescription className="text-tertiary font-normal text-base hidden lg:block">
							Recently created Home Page from this organization.
						</CardDescription>
					</div>
					<CMSPageSectionsStore />
				</CardHeader>
			}
		>
			{/* page content */}

			{data?.data && <CMSPageSectionsPage data={data?.data} />}
		</Container1>
	);
};

export default PageClient;
