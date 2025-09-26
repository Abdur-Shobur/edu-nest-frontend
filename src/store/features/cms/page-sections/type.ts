import { ICMSListItems } from '../list-items';
import { ICMSSections } from '../sections';

export interface ICMSPageSections {
	readonly id: number;
	readonly pageSectionsName: string;
	readonly pageSectionsKey: string;
	readonly pageIsFor: ICMSPageIsFor;
	readonly pageDesignLayout: string;
	readonly status: ICMSPageSectionsStatus;
	readonly section: ICMSSections;
	readonly listItems: ICMSListItems[];
	readonly order: number;
	readonly createdAt: Date;
	readonly updatedAt: Date;
}

// for pageIsFor
export enum ICMSPageIsFor {
	Home = 'home',
	About = 'about',
	Contact = 'contact',
	Services = 'services',
}

// for status
export enum ICMSPageSectionsStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}

// for pageDesignLayout
export enum ICMSPageDesignLayout {
	Layout1 = 'layout1',
	Layout2 = 'layout2',
	Layout3 = 'layout3',
}
