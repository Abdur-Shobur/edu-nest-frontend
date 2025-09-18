import { Layout1 } from '@/front-component';
import { Metadata } from 'next';
import PageClient from './page.client';

// page
export default function Page() {
	return (
		<Layout1>
			<PageClient />
		</Layout1>
	);
}

// metadata
export const metadata: Metadata = {
	title: 'Auth',
	description: 'Auth',
};
