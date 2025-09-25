export interface ICMSBanner {
	readonly id: number;
	readonly bannerKey: iCMSBannerKey;
	readonly status: ICMSBannerStatus;
	readonly image: string;
	readonly link_1: string;
	readonly buttonText_1: string;
	readonly link_2: string;
	readonly buttonText_2: string;
	readonly title: string;
	readonly subtitle: string;
	readonly description: string;
	readonly order: number;
	readonly createdAt: string;
	readonly updatedAt: string;
}

// for status
export enum ICMSBannerStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}

export enum iCMSBannerKey {
	Home = 'home',
	Others = 'others',
	About = 'about',
}
