import { HeroSlider, Layout1 } from '@/front-component';

import {
	DesignLayout1,
	DesignLayout2,
	DesignLayout3,
	DesignLayout4,
	DesignLayout5,
	DesignLayout6,
} from '@/front-component/design-layout';
import { getApiData } from '@/lib';
import { ResponseType } from '@/store/features/api/response-type';
import { ICMSPageDesignLayout } from '@/store/features/cms';
import { notFound } from 'next/navigation';
import { IFrontendData } from './type';

export default async function Page() {
	try {
		const [frontendData] = await Promise.all([
			getApiData<ResponseType<IFrontendData>>(
				'/frontend/data?type=banner,page-sections&keys=home'
			),
		]);

		if (frontendData?.statusCode !== 200) {
			return notFound();
		}

		return (
			<Layout1>
				{frontendData?.data?.banners?.home && (
					<HeroSlider banners={frontendData?.data?.banners?.home} />
				)}

				{frontendData?.data?.pageSections?.home &&
					frontendData?.data?.pageSections?.home?.map((section) => {
						switch (section.pageDesignLayout) {
							case ICMSPageDesignLayout.Layout1:
								return (
									<DesignLayout1 key={section.id} section={section.listItems} />
								);
							case ICMSPageDesignLayout.Layout2:
								return <DesignLayout2 key={section.id} section={section} />;

							case ICMSPageDesignLayout.Layout3:
								return <DesignLayout3 key={section.id} section={section} />;

							case ICMSPageDesignLayout.Layout4:
								return <DesignLayout4 key={section.id} section={section} />;

							case ICMSPageDesignLayout.Layout5:
								return <DesignLayout5 key={section.id} section={section} />;

							case ICMSPageDesignLayout.Layout6:
								return <DesignLayout6 key={section.id} section={section} />;

							default:
								return null;
						}
					})}

				{/* <Course1 /> */}
				{/* <Team1 /> */}
				{/* <Gallery1 /> */}
				{/* <Events1 /> */}
				{/* <Enroll1 /> */}
				{/* <Department1 /> */}
				{/* <Testimonial1 /> */}
				{/* <Blog1 /> */}
				{/* <Partner1 /> */}
			</Layout1>
		);
	} catch (error) {
		// If it's an API error, throw it to be caught by the error page
		if (error instanceof Error) {
			throw error;
		}

		// For unknown errors, throw a generic error
		throw new Error('Failed to load page data');
	}
}
