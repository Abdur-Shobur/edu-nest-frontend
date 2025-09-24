import { IRole } from '../role/role';

export interface IManager {
	id: number;
	name: string;
	email: string;
	phone: string | null;
	roleId: number;
	role: IRole;
	status: IManagerStatus;
	createdAt: string;
	updatedAt: string;
}

export enum IManagerStatus {
	Active = 'active',
	Inactive = 'inactive',
	Pending = 'pending',
	Blocked = 'blocked',
	Trashed = 'trashed',
}
