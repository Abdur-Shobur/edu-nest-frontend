import { Header } from '@/components/common/header';
import { Metadata } from 'next';
import PageClient from './page.client';

// breadcrumb items
const breadcrumbItems = [
	{
		name: 'Dashboard',
		path: '/dashboard',
	},
	{
		name: 'CMS',
	},
];

export default function Page() {
	return (
		<>
			<Header breadcrumbItems={breadcrumbItems} />
			<PageClient />
		</>
	);
}

// metadata
export const metadata: Metadata = {
	title: 'CMS',
	description: 'CMS',
};
