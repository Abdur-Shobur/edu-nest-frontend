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
import { badgeFormat, dateFormat, env, tableSrCount } from '@/lib';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import { Ellipsis, LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import { ApiDeleteDropdownHandler } from '../../api/api-delete-dropdown-handler';

export function DevCategoryTable({ data }: { data: any }) {
	const coupons = [
		{
			id: 1,
			name: 'John Doe',
			email: 'john.doe@example.com',
			number: '1234567890',
			created_at: '2021-01-01',
			status: 'active',
			user: {
				image: 'https://via.placeholder.com/150',
				name: 'John Doe',
				email: 'john.doe@example.com',
				number: '1234567890',
			},
		},
	];
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="bg-stone-100 dark:bg-transparent">
						Sr.
					</TableHead>
					<TableHead className="bg-stone-100 dark:bg-transparent">
						Profile{' '}
					</TableHead>
					<TableHead className="bg-stone-100 dark:bg-transparent">
						Name{' '}
					</TableHead>
					<TableHead className="bg-stone-100 dark:bg-transparent">
						Email{' '}
					</TableHead>
					<TableHead className="bg-stone-100 dark:bg-transparent">
						Number{' '}
					</TableHead>
					<TableHead className="bg-stone-100 dark:bg-transparent">
						Date{' '}
					</TableHead>
					<TableHead className="bg-stone-100 dark:bg-transparent">
						Status{' '}
					</TableHead>
					<TableHead className="bg-stone-100 dark:bg-transparent">
						Action{' '}
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{coupons?.length === 0 ? (
					<TableRow>
						<TableCell
							colSpan={8}
							className="text-center py-8 text-muted-foreground"
						>
							No items found matching your criteria
						</TableCell>
					</TableRow>
				) : (
					coupons?.map((item, i) => (
						<TableRow key={item.id}>
							<TableCell className="py-2 pl-4">
								{tableSrCount(data.current_page, i)}
							</TableCell>
							<TableCell className="py-2">
								<Link href={`/admin/users/${item.id}`}>
									<Avatar className="h-12 w-12 rounded-xl">
										<AvatarImage
											src={env.baseAPI + '/' + item?.user?.image}
											alt={'Image'}
										/>
										<AvatarFallback className="rounded-xl bg-sky-100 dark:bg-sky-900">
											{item?.user?.name?.slice(0, 1) || 'I'}
										</AvatarFallback>
									</Avatar>
								</Link>
							</TableCell>
							<TableCell className="py-2">{item?.user?.name}</TableCell>
							<TableCell className="py-2">{item?.user?.email}</TableCell>
							<TableCell className="py-2">{item?.user?.number}</TableCell>
							<TableCell className="py-2">
								{dateFormat(item.created_at.toString())}
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
	);
}

const DropDownAction = ({ item }: { item: any }) => {
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
