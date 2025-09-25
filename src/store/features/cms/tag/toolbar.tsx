'use client';

import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';

export default function Toolbar({
	params,
	setParams,
}: {
	params: Record<string, any>;
	setParams: (updater: any) => void;
}) {
	const debounced = useDebouncedCallback((v: string) => {
		setParams((p: any) => ({ ...p, page: 1, search: v }));
	}, 400);

	const onStatus = (v: string) =>
		setParams((p: any) => ({ ...p, page: 1, status: v }));

	return (
		<div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start lg:items-center mb-4">
			{/* Search Bar */}
			<div className="relative flex-1 lg:max-w-xs w-full">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
				<Input
					defaultValue={params?.search ?? ''}
					placeholder="Search by name..."
					onChange={(e) => debounced(e.target.value)}
					aria-label="Search"
					className="pl-10 bg-white border-gray-200 focus:border-gray-300 focus:ring-gray-300"
				/>
			</div>

			{/* Filter Buttons */}
			<Select onValueChange={onStatus} defaultValue={params?.status || 'all'}>
				<SelectTrigger className="w-full lg:max-w-40">
					<SelectValue placeholder="Select status" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All Status</SelectItem>
					<SelectItem value="active">Active</SelectItem>
					<SelectItem value="inactive">Inactive</SelectItem>
					<SelectItem value="trashed">Trashed</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
