import { IDevSubCategory } from '../dev-sub-category';

export interface IRole {
	id: number;
	name: string;
	roleKey: string;
	description: string;
	status: IRoleStatus;
	createdAt: string;
	updatedAt: string;
	permissions: IDevSubCategory[];
}
export enum IRoleStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
