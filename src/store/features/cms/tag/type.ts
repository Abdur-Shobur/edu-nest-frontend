export interface ITag {
	readonly id: number;
	readonly name: string;
	readonly status: ITagStatus;
	readonly order: number;
	readonly createdAt: string;
	readonly updatedAt: string;
}

// for status
export enum ITagStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
