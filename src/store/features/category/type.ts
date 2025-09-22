export interface ICategory {
	id: number;
	name: string;
	description: string;
	image: string;
	slug: string;
	status: ICategoryStatus;
	createdAt: string;
	updatedAt: string;
}

export enum ICategoryStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
