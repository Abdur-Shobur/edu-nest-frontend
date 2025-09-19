export interface IDevCategory {
	id: number;
	name: string;
	permissionKey: string;
	description: string;
	status: IDevCategoryStatus;
}

export enum IDevCategoryStatus {
	Active = 'active',
	Inactive = 'inactive',
	Deleted = 'deleted',
}
