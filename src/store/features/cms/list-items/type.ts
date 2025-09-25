export interface ICMSListItems {
	readonly id: number;
	readonly listKey: string;
	readonly status: ICMSListItemsStatus;
	readonly image: string;
	readonly title: string;
	readonly subtitle: string;
	readonly description: string;
	readonly order: number;
	readonly createdAt: string;
	readonly updatedAt: string;
}

// for status
export enum ICMSListItemsStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
