import {
	ICMSBanner,
	iCMSBannerKey,
	ICMSPageIsFor,
	ICMSPageSections,
} from '@/store/features/cms';

export interface IFrontendData {
	banners: {
		[key in iCMSBannerKey]: ICMSBanner[];
	};
	pageSections: {
		[key in ICMSPageIsFor]: ICMSPageSections[];
	};
}
