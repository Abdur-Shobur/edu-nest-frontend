import { IDevCategory } from '../dev-category';

export interface IDevSubCategory {
	id: number;
	name: string;
	permissionKey: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	status: IDevSubCategoryStatus;
	category: IDevCategory;
}

export enum IDevSubCategoryStatus {
	Private = 'private',
	Public = 'public',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
