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
		name: 'CMS',
		path: '/dashboard/cms',
	},
	{
		name: 'Home Page',
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
	title: 'Home Page',
	description: 'Home Page',
};
