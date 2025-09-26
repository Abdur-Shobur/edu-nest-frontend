export interface ICMSSections {
	readonly id: number;
	readonly sectionsKey: string;
	readonly status: ICMSSectionsStatus;
	readonly image: string;
	readonly color: string;
	readonly title: string;
	readonly subtitle: string;
	readonly description: string;
	readonly order: number;
	readonly link: string;
	readonly linkText: string;
	readonly createdAt: string;
	readonly updatedAt: string;
}

// for status
export enum ICMSSectionsStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
