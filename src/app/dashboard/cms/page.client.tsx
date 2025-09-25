'use client';

import { Container1 } from '@/components/container';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PageClient = () => {
	return (
		<Container1
			header={
				<CardHeader className="pb-2 px-5 flex-1 flex items-center justify-between">
					<div>
						<CardTitle className="text-primary font-semibold text-xl">
							Cms
						</CardTitle>
						<CardDescription className="text-tertiary font-normal text-base hidden lg:block">
							Recently created Cms from this organization.
						</CardDescription>
					</div>
				</CardHeader>
			}
		>
			Cms Page
		</Container1>
	);
};

export default PageClient;
