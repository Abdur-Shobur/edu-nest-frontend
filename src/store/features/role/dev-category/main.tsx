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

import { DBPagination1 } from '@/components/pagination';
import { Ellipsis, LoaderCircle } from 'lucide-react';
import { ApiDeleteDropdownHandler } from '../../api/api-delete-dropdown-handler';
import { IMeta } from '../../api/response-type';
import { DescriptionModal } from './description-modal';
import { StatusHandler } from './status-handler';
import { IDevCategory } from './type';

export const DevCategoryPage = ({
	data,
	meta,
	setPage,
	setLimit,
}: {
	data?: IDevCategory[];
	meta?: IMeta;
	setPage: (page: number) => void;
	setLimit: (limit: number) => void;
}) => {
	console.log('DevCategory data:', data, meta);

	return (
		<>
			<div className="border rounded-lg relative">
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
										{tableSrCount(meta?.currentPage ?? 1, i)}
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
										{item.description || 'No description'}
									</TableCell>
									<TableCell className="py-2">
										<Badge
											className="capitalize"
											variant={badgeFormat(item.status || '')}
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
				<DBPagination1
					pagination={meta}
					setPage={setPage}
					setLimit={setLimit}
				/>
			)}
		</>
	);
};

const DropDownAction = ({ item }: { item: IDevCategory }) => {
	const isLoading = false;
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
					size="icon"
				>
					{isLoading ? (
						<LoaderCircle className="size-4 animate-spin text-destructive" />
					) : (
						<Ellipsis />
					)}
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DescriptionModal data={item} />
				<StatusHandler
					data={item}
					status={item.status}
					text={item.status === 'active' ? 'Inactive' : 'Active'}
					icon={item.status === 'active' ? 'X' : 'Check'}
				/>
				<DropdownMenuSeparator />

				{/* Delete   */}
				<ApiDeleteDropdownHandler
					data={item}
					mutation={() => {}}
					isLoading={isLoading}
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
