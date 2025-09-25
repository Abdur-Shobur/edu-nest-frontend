export interface IBlogCategory {
	readonly id: number;
	readonly name: string;
	readonly description: string;
	readonly slug: string;
	readonly status: IBlogCategoryStatus;
	readonly createdAt: Date;
	readonly updatedAt: Date;
}

// for status
export enum IBlogCategoryStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
