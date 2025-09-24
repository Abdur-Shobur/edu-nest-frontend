import { IRole } from '../role/role';

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string | null;
	roleId: number;
	role: IRole;
	status: IUserStatus;
	createdAt: string;
	updatedAt: string;
}

export enum IUserStatus {
	Active = 'active',
	Inactive = 'inactive',
	Pending = 'pending',
	Blocked = 'blocked',
	Trashed = 'trashed',
}
