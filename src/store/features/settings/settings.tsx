'use client';

import { Loader5 } from '@/components/loader';
import { DefaultUserRole } from './_ctx/default-user-role';
import { useSettingsQuery } from './api-slice';

export const SettingsPage = () => {
	const { data, isLoading } = useSettingsQuery({
		status: 'active',
		search: '',
	});
	const defaultRole = data?.data?.find((item) => item.key === 'defaultRoleId');

	if (isLoading) {
		return (
			<>
				<Loader5 />
				<Loader5 />
			</>
		);
	}
	return (
		<div className={'space-y-4'}>
			{defaultRole && <DefaultUserRole data={defaultRole} />}
		</div>
	);
};
