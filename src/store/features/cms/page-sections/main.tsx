'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Badge } from '@/components/ui/badge';
import { badgeFormat } from '@/lib';

import { Button } from '@/components/ui/button';

import { Ellipsis, Layout, LoaderCircle } from 'lucide-react';
import { ApiDeleteDropdownHandler } from '../../api/api-delete-dropdown-handler';
import { ApiStatusDropdownHandler } from '../../api/api-status-dropdown-handler';
import {
	useCMSPageSectionsDeleteMutation,
	useCMSPageSectionsStatusMutation,
} from './api-slice';
import { ICMSPageSections, ICMSPageSectionsStatus } from './type';
import { UpdateModal } from './update-modal';

export const CMSPageSectionsPage = ({
	data,
}: {
	data?: ICMSPageSections[];
}) => {
	return (
		<div className="space-y-4">
			{data?.length === 0 ? (
				<div className="text-center py-12 text-muted-foreground">
					<Layout className="mx-auto h-12 w-12 mb-4 opacity-50" />
					<h3 className="text-lg font-medium mb-2">No page sections found</h3>
					<p>No items found matching your criteria</p>
				</div>
			) : (
				<div className="grid   gap-4">
					{data?.map((item, i) => (
						<Card
							key={item.id}
							className="relative group hover:shadow-md transition-shadow gap-2"
						>
							<CardHeader className="pb-3">
								<div className="flex items-start justify-between">
									<div className="space-y-1">
										<h3 className="font-semibold text-lg leading-tight">
											{item.pageSectionsName}
										</h3>
										<code className="bg-muted px-2 py-1 rounded text-xs font-mono">
											key: {item.pageSectionsKey}
										</code>
									</div>
									<DropDownAction item={item} />
								</div>
							</CardHeader>
							<CardContent className="space-y-3">
								{/* Page For */}
								<div className="flex items-center gap-2">
									Page For:
									<Badge variant="outline" className="capitalize">
										{item.pageIsFor}
									</Badge>
								</div>

								{/* Section */}
								<div className="flex items-center gap-2">
									Section:
									<span className="text-sm text-muted-foreground">
										{item.section?.title || 'No section'}
									</span>
								</div>

								{/* Order */}
								<div className="flex items-center gap-2">
									Order:
									<span className="text-sm text-muted-foreground">
										Order: {item.order}
									</span>
								</div>

								{/* List Items Count */}
								{item.listItems && item.listItems.length > 0 && (
									<div className="flex items-center gap-2">
										List Items:
										<span className="text-sm text-muted-foreground">
											{item.listItems.length} list item
											{item.listItems.length !== 1 ? 's' : ''}
										</span>
									</div>
								)}

								{/* Status */}
								<div className="flex items-center justify-between pt-2 border-t">
									<Badge
										className="capitalize"
										variant={badgeFormat(item.status)}
									>
										{item.status}
									</Badge>
									<span className="text-xs text-muted-foreground">
										#{item.id}
									</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			)}
		</div>
	);
};

const DropDownAction = ({ item }: { item: ICMSPageSections }) => {
	const [mutation, { isLoading }] = useCMSPageSectionsDeleteMutation();
	const [mutationStatus, { isLoading: isLoadingStatus }] =
		useCMSPageSectionsStatusMutation();

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
				{item.status !== ICMSPageSectionsStatus.Active && (
					<ApiStatusDropdownHandler
						data={{ id: item.id, status: ICMSPageSectionsStatus.Active }}
						mutation={mutationStatus}
						isLoading={isLoadingStatus}
						text="Set Active"
						icon="Check"
					/>
				)}

				{/* STATUS INACTIVE   */}
				{item.status !== ICMSPageSectionsStatus.Inactive && (
					<ApiStatusDropdownHandler
						data={{ id: item.id, status: ICMSPageSectionsStatus.Inactive }}
						mutation={mutationStatus}
						isLoading={isLoadingStatus}
						text="Set Inactive"
						icon="CircleOff"
					/>
				)}

				<DropdownMenuSeparator />

				{/* STATUS DELETED   */}
				{item.status !== ICMSPageSectionsStatus.Trashed && (
					<ApiStatusDropdownHandler
						data={{ id: item.id, status: ICMSPageSectionsStatus.Trashed }}
						mutation={mutationStatus}
						isLoading={isLoadingStatus}
						text="Move to Trash"
						icon="Trash"
						variant="destructive"
					/>
				)}

				{/* Delete   */}
				{item.status === ICMSPageSectionsStatus.Trashed && (
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
