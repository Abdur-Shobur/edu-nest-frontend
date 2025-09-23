export interface ISettings {
	id: number;
	key: string | keyof ISettings;
	value: string | null;
	boolValue: null | boolean;
	intValue: null | number;
	defaultRoleId: null | number;
	defaultCategoryId: null | number;
	createdAt: string;
	updatedAt: string;
	status: ISettingsStatus;
}

// for status
export enum ISettingsStatus {
	Active = 'active',
	Inactive = 'inactive',
	Trashed = 'trashed',
}
