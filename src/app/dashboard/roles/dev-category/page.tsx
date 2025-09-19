import { Crumb } from '@/components/common/dynamic-breadcrumb';
import { Header } from '@/components/common/header';
import { PageWrap } from '@/components/common/page-wrap';
import { Button } from '@/components/ui/button';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DevCategoryPage } from '@/store/features/role';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';

// breadcrumb items
const breadcrumbItems: Crumb[] = [
	{
		name: 'Dashboard',
		path: '/dashboard',
	},
	{
		name: 'Roles',
		path: '/dashboard/roles',
	},
	{
		name: 'Dev Category',
		path: '/dashboard/roles/dev-category',
	},
];

// page
export default function Page() {
	return (
		<>
			{/* header of the page */}
			<Header breadcrumbItems={breadcrumbItems} />

			{/* page wrap */}
			<PageWrap
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
						<Button size="lg" variant="brand">
							<Plus className="h-4 w-4" />
							<span className="hidden md:inline">Create Dev Category</span>
						</Button>
					</CardHeader>
				}
			>
				{/* page content */}
				<DevCategoryPage />
			</PageWrap>
		</>
	);
}

// metadata
export const metadata: Metadata = {
	title: 'Dev Category',
	description: 'Dev Category',
};
