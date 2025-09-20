import { Crumb } from '@/components/common/dynamic-breadcrumb';
import { Header } from '@/components/common/header';
import { Metadata } from 'next';
import PageClient from './page.client';

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

			{/* page client */}
			<PageClient />
		</>
	);
}

// metadata
export const metadata: Metadata = {
	title: 'Dev Category',
	description: 'Dev Category',
};
