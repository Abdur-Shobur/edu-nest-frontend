import { ICategory } from '../category';

export interface iSubCategory {
	readonly id: number;
	readonly name: string;
	readonly description: string;
	readonly slug: string;
	readonly status: iSubCategoryStatus;
	readonly category: ICategory;
	readonly createdAt: Date;
	readonly updatedAt: Date;
}

export enum iSubCategoryStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
