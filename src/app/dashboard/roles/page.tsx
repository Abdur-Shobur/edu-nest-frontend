import { Crumb } from '@/components/common/dynamic-breadcrumb';
import { Header } from '@/components/common/header';
import { PageWrap } from '@/components/common/page-wrap';
import { Button } from '@/components/ui/button';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import DistributionsPage from './page.client';

// breadcrumb items
const breadcrumbItems: Crumb[] = [
	{
		name: 'Roles',
		path: '/products',
	},
	{
		name: 'Roles',
		path: '/roles',
	},
	{
		name: 'Roles',
		path: '/roles',
	},
];

// page
export default function Page() {
	return (
		<>
			{/* header of the page */}
			<Header breadcrumbItems={breadcrumbItems}>
				<Button size="lg" variant="brand">
					<Plus className="h-4 w-4" />
					<span className="hidden md:inline">Create Distribution</span>
				</Button>
			</Header>

			{/* page wrap */}
			<PageWrap
				header={
					// page header
					<CardHeader className="pb-2 px-5">
						<CardTitle className="text-primary text-[27px] font-semibold">
							Distributions
						</CardTitle>
						<CardDescription className="text-tertiary font-normal text-base">
							Recently created CDN distribution from this organization.
						</CardDescription>
					</CardHeader>
				}
			>
				{/* page content */}
				<DistributionsPage />
			</PageWrap>
		</>
	);
}

// metadata
export const metadata: Metadata = {
	title: 'Roles',
	description: 'Roles',
};
