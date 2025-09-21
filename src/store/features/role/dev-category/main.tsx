'use client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';
import { badgeFormat, tableSrCount } from '@/lib';

import { Button } from '@/components/ui/button';

import { Pagination } from '@/components/ui/pagination';
import { Ellipsis, LoaderCircle } from 'lucide-react';
import { ApiDeleteDropdownHandler } from '../../api/api-delete-dropdown-handler';
import { ApiStatusDropdownHandler } from '../../api/api-status-dropdown-handler';
import { IMeta } from '../../api/response-type';
import {
	useDevCategoryDeleteMutation,
	useDevCategoryStatusMutation,
} from './api-slice';
import Toolbar from './toolbar';
import { IDevCategory } from './type';
import { UpdateModal } from './update-modal';

export const DevCategoryPage = ({
	data,
	meta,
	params,
	setParams,
}: {
	data?: IDevCategory[];
	meta?: IMeta;
	params: Record<string, any>;
	setParams: (params: Record<string, any>) => void;
}) => {
	return (
		<>
			<Toolbar params={params} setParams={setParams} />
			<div className="border rounded-lg relative mb-4">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="bg-stone-100 dark:bg-transparent">
								Sr.
							</TableHead>
							<TableHead className="bg-stone-100 dark:bg-transparent">
								Name
							</TableHead>
							<TableHead className="bg-stone-100 dark:bg-transparent">
								Permission Key
							</TableHead>
							<TableHead className="bg-stone-100 dark:bg-transparent">
								Description
							</TableHead>
							<TableHead className="bg-stone-100 dark:bg-transparent">
								Sub Categories
							</TableHead>
							<TableHead className="bg-stone-100 dark:bg-transparent">
								Status
							</TableHead>
							<TableHead className="bg-stone-100 dark:bg-transparent">
								Action
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.length === 0 ? (
							<TableRow>
								<TableCell
									colSpan={6}
									className="text-center py-8 text-muted-foreground"
								>
									No items found matching your criteria
								</TableCell>
							</TableRow>
						) : (
							data?.map((item, i) => (
								<TableRow key={item.id}>
									<TableCell className="py-2 pl-4">
										{tableSrCount(meta?.page ?? 1, i)}
									</TableCell>
									<TableCell className="py-2 font-medium">
										{item.name}
									</TableCell>
									<TableCell className="py-2">
										<code className="bg-muted px-2 py-1 rounded text-sm">
											{item.permissionKey}
										</code>
									</TableCell>
									<TableCell className="py-2 max-w-xs truncate">
										{item.description || '----'}
									</TableCell>
									<TableCell className="py-2">
										<Badge
											className="capitalize"
											variant={badgeFormat(
												item.subCategories.length > 0 ? 'active' : 'inactive'
											)}
										>
											{item.subCategories.length}
										</Badge>
									</TableCell>
									<TableCell className="py-2">
										<Badge
											className="capitalize"
											variant={badgeFormat(item.status)}
										>
											{item.status}
										</Badge>
									</TableCell>
									<TableCell className="py-2">
										<DropDownAction item={item} />
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</div>
			{meta && (
				<Pagination
					currentPage={meta?.page}
					totalItems={meta?.total}
					pageSize={meta?.limit}
					onPageChange={(newPage) => setParams({ page: newPage })}
					onPageSizeChange={(newLimit) =>
						setParams({ limit: newLimit, page: 1 })
					}
					pageSizeOptions={[5, 10, 20, 50, 100]}
				/>
			)}
		</>
	);
};

const DropDownAction = ({ item }: { item: IDevCategory }) => {
	const [mutation, { isLoading }] = useDevCategoryDeleteMutation();
	const [mutationStatus, { isLoading: isLoadingStatus }] =
		useDevCategoryStatusMutation();

	const loading = isLoading || isLoadingStatus;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
					size="icon"
					disabled={loading}
				>
					{loading ? (
						<LoaderCircle className="size-4 animate-spin" />
					) : (
						<Ellipsis />
					)}
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				{/* Update */}
				<UpdateModal data={item} />

				{/* STATUS ACTIVE   */}
				{item.status !== 'active' && (
					<ApiStatusDropdownHandler
						data={{ id: item.id, status: 'active' }}
						mutation={mutationStatus}
						isLoading={isLoadingStatus}
						text="Set Active"
						icon="Check"
					/>
				)}
				{/* STATUS INACTIVE   */}
				{item.status !== 'inactive' && (
					<ApiStatusDropdownHandler
						data={{ id: item.id, status: 'inactive' }}
						mutation={mutationStatus}
						isLoading={isLoadingStatus}
						text="Set Inactive"
						icon="CircleOff"
					/>
				)}

				<DropdownMenuSeparator />

				{/* STATUS DELETED   */}
				{item.status !== 'trashed' && (
					<ApiStatusDropdownHandler
						data={{ id: item.id, status: 'trashed' }}
						mutation={mutationStatus}
						isLoading={isLoadingStatus}
						text="Move to Trash"
						icon="Trash"
						variant="destructive"
					/>
				)}

				{/* Delete   */}
				{item.status === 'trashed' && (
					<ApiDeleteDropdownHandler
						data={{ id: item.id }}
						mutation={mutation}
						isLoading={isLoading}
						text="Delete Permanently"
					/>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
