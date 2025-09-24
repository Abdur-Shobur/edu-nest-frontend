'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle, Pen } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	DropdownMenuItem,
	DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';
import { alertConfirm, handleValidationError, toaster } from '@/lib';
import { useRoleQuery } from '../role/role/api-slice';
import { useUserUpdateMutation } from './api-slice';
import { IUser, IUserStatus } from './type';

// --- Zod Schema ---
const schema = z.object({
	name: z
		.string({ error: 'Name is required' })
		.trim()
		.min(1, 'Name is required'),
	username: z
		.string({ error: 'Username is required' })
		.trim()
		.min(1, 'Username is required'),
	email: z.email({ error: 'Invalid email format' }),
	phone: z.string().trim().optional(),
	roleId: z.string({ error: 'Role is required' }).min(1, 'Role is required'),
	status: z.enum([
		IUserStatus.Active,
		IUserStatus.Inactive,
		IUserStatus.Pending,
		IUserStatus.Blocked,
		IUserStatus.Trashed,
	]),
	password: z
		.string({ error: 'Password is required' })
		.min(8, 'Password is 8 characters required')
		.max(20, 'Password is max 20 characters required')
		.trim()
		.optional(),
});

type ZodType = z.infer<typeof schema>;

//  Component
export function UpdateModal({ data }: { data: IUser }) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
				<DialogTrigger className="flex items-center gap-2 w-full">
					<DropdownMenuShortcut className="ml-0">
						<Pen className="size-4" />
					</DropdownMenuShortcut>
					Edit User
				</DialogTrigger>
			</DropdownMenuItem>

			<DialogContent
				className={cn('sm:max-w-[500px] w-full overflow-y-scroll max-h-[90vh]')}
			>
				<DialogHeader>
					<DialogTitle>Update User</DialogTitle>
				</DialogHeader>

				{open && <FORM setOpen={setOpen} editData={data} />}
			</DialogContent>
		</Dialog>
	);
}

const FORM = ({
	setOpen,
	editData,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	editData: IUser;
}) => {
	const [mutation, { isLoading }] = useUserUpdateMutation();
	const { data: roles, isLoading: isLoadingRoles } = useRoleQuery({
		status: 'active',
		page: 1,
		limit: 'all',
	});

	const form = useForm<ZodType>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: editData.name,
			username: editData.username,
			email: editData.email,
			phone: editData.phone || '',
			roleId: editData.roleId.toString(),
			status: editData.status,
			password: undefined,
		},
	});

	useEffect(() => {
		form.reset({
			name: editData.name,
			username: editData.username,
			email: editData.email,
			phone: editData.phone || '',
			roleId: editData.roleId.toString(),
			status: editData.status,
			password: undefined,
		});
	}, [editData]);

	const password = form.watch('password');

	useEffect(() => {
		if (password === '' || password === undefined) {
			form.setValue('password', undefined);
			form.clearErrors('password');
		}
	}, [password]);

	const onSubmit = async (data: ZodType) => {
		alertConfirm({
			onOk: async () => {
				try {
					const response = await mutation({
						...(data as any),
						id: editData.id,
						password: data.password ? data.password : undefined,
					}).unwrap();
					if (response.status) {
						toaster({ message: response.message || 'Updated successfully' });
						form.reset();
						setOpen(false);
					} else {
						handleValidationError(response, form.setError);
					}
				} catch (error: any) {
					handleValidationError(error, form.setError);
				}
			},
		});
	};

	if (isLoadingRoles) {
		return (
			<div className="flex items-center justify-center py-8">
				<LoaderCircle className="h-6 w-6 animate-spin" />
			</div>
		);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Name */}
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type user full name..." />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Username */}
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Auto-generated from name..."
										readOnly
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Email */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Type user email..."
										type="email"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Phone */}
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type user phone number..." />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Role */}
					<FormField
						control={form.control}
						name="roleId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Role</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select role" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{roles?.data.map((role) => (
											<SelectItem key={role.id} value={role.id.toString()}>
												{role.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Status */}
					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Status</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select status" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value={IUserStatus.Active}>Active</SelectItem>
										<SelectItem value={IUserStatus.Inactive}>
											Inactive
										</SelectItem>
										<SelectItem value={IUserStatus.Pending}>Pending</SelectItem>
										<SelectItem value={IUserStatus.Blocked}>Blocked</SelectItem>
										<SelectItem value={IUserStatus.Trashed}>Trashed</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Password */}
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Type user password..."
										type="password"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<DialogFooter>
					<Button type="submit" disabled={isLoading}>
						{isLoading && (
							<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
						)}
						{isLoading ? 'Updating...' : 'Update User'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
