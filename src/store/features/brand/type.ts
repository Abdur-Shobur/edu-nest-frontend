export interface IBrand {
	id: number;
	name: string;
	description: string;
	image: string;
	slug: string;
	status: IBrandStatus;
	createdAt: string;
	updatedAt: string;
}

export enum IBrandStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
