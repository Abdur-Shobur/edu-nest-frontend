import { Crumb } from '@/components/common/dynamic-breadcrumb';
import { Header } from '@/components/common/header';
import { PageWrap } from '@/components/common/page-wrap';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';
import DistributionsPage from './page.client';

// breadcrumb items
const breadcrumbItems: Crumb[] = [
	{
		name: 'Dashboard',
	},
];

// page
export default function Page() {
	return (
		<>
			{/* header of the page */}
			<Header breadcrumbItems={breadcrumbItems}></Header>

			{/* page wrap */}
			<PageWrap
				header={
					// page header
					<CardHeader className="pb-2 px-5">
						<CardTitle className="text-primary text-[27px] font-semibold">
							Dashboard
						</CardTitle>
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
	title: 'CDN Distributions',
	description: 'CDN Distributions',
};
