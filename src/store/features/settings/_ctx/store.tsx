'use client';

import { Loader5 } from '@/components/loader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { alertConfirm, toaster } from '@/lib';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRoleQuery } from '../../role/role/api-slice';
import { useSettingsStoreMutation } from '../api-slice';
import { ISettings } from '../type';

export function Store({ data }: { data: ISettings }) {
	const { data: roles, isLoading } = useRoleQuery({
		status: 'active',
		page: 1,
		limit: 'all',
	});
	const [selectedRole, setSelectedRole] = useState<string | undefined>(
		undefined
	);

	const [store, { isLoading: isLoadingStore }] = useSettingsStoreMutation();
	const onSubmit = async () => {
		alertConfirm({
			onOk: async () => {
				try {
					const response = await store({
						key: 'defaultRoleId',
						defaultRoleId: Number(selectedRole),
					}).unwrap();
					if (response.status) {
						toaster({ message: response?.message || 'Created successfully' });
					} else {
						toaster({
							message: response?.message || 'Something went wrong',
							type: 'error',
						});
					}
				} catch (error: any) {
					console.log(error);
					if (error?.status === 400) {
						toaster({
							message: error?.data?.message || 'Something went wrong',
							type: 'error',
						});
					} else {
						toaster({
							message: error?.message || 'Something went wrong',
							type: 'error',
						});
					}
				}
			},
		});
	};
	useEffect(() => {
		setSelectedRole(data.defaultRoleId?.toString());
	}, [data]);
	if (isLoading) {
		return <Loader5 />;
	}
	return (
		<Card className={cn('gap-2')}>
			<CardHeader>
				<CardTitle className="text-md">Default User Role</CardTitle>
			</CardHeader>
			<CardContent>
				<Select onValueChange={setSelectedRole} value={selectedRole}>
					<SelectTrigger className="w-full lg:max-w-60">
						<SelectValue placeholder="Select role" />
					</SelectTrigger>
					<SelectContent>
						{roles?.data?.map((item) => (
							<SelectItem key={item.id} value={item.id.toString()}>
								{item.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Button onClick={onSubmit} disabled={isLoadingStore} className="mt-2">
					{isLoadingStore && (
						<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
					)}
					{isLoadingStore ? 'Updating...' : 'Save'}
				</Button>
			</CardContent>
		</Card>
	);
}
