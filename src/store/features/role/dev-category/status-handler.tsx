'use client';

import {
	DropdownMenuItem,
	DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';

import { alertConfirm } from '@/lib';
import { DynamicIcon } from '@/lib/icon/dynamic-icon';

export function StatusHandler({
	data,
	status,
	text,
	icon,
	type,
}: {
	data: any;
	status: any;
	text: string;
	icon: string;
	type?: 'default' | 'destructive';
}) {
	// const [mutation, { isLoading }] = useAdminProductOrderUpdateMutation();
	const isLoading = false;
	const [clicked, setClicked] = useState(false);

	const handleClick = async () => {
		if (clicked || isLoading) return;

		setClicked(true);

		alertConfirm({
			onOk: async () => {
				// try {
				// 	const res = await mutation({
				// 		id: data.id,
				// 		status,
				// 	}).unwrap();
				// 	if (res.status === 200) {
				// 		toast.success(res.message || 'Status updated');
				// 	}
				// } catch (err) {
				// 	toast.error('Failed to update status');
				// } finally {
				// 	setClicked(false);
				// }
			},

			onCancel: () => {
				setClicked(false);
			},
		});
	};

	return (
		<DropdownMenuItem
			onSelect={(e) => {
				e.preventDefault();
				handleClick();
			}}
			variant={type || 'default'}
			disabled={isLoading || clicked}
			className="flex items-center gap-2"
		>
			<DropdownMenuShortcut className="ml-0">
				{isLoading ? (
					<LoaderCircle className="size-4 animate-spin" />
				) : (
					<DynamicIcon icon={icon} className="size-4" />
				)}
			</DropdownMenuShortcut>
			{text}
		</DropdownMenuItem>
	);
}
