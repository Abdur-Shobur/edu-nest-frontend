'use client';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { LoaderCircle, Plus } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
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
import { alertConfirm, handleValidationError, toaster } from '@/lib';
import { useRoleQuery } from '../role/role/api-slice';
import { useUserStoreMutation } from './api-slice';
import { IUserStatus } from './type';

// --- Zod Schema ---
const schema = z
	.object({
		name: z
			.string({ error: 'Name is required' })
			.trim()
			.min(1, 'Name is required')
			.max(50, 'Name is max 50 characters required'),
		username: z
			.string({ error: 'Username is required' })
			.trim()
			.min(1, 'Username is required')
			.toLowerCase()
			.trim(),
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
			.trim(),
		confirmPassword: z
			.string({ error: 'Confirm Password is required' })
			.min(8, 'Confirm Password is 8 characters required')
			.max(20, 'Confirm Password is max 20 characters required')
			.trim(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

type ZodType = z.infer<typeof schema>;

export function UserStore() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="lg" variant="brand">
					<Plus className="h-4 w-4" />
					<span className="hidden md:inline">Create User</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[500px] overflow-y-scroll max-h-[90vh]">
				<DialogHeader>
					<DialogTitle>Create User</DialogTitle>
					<DialogDescription>Create a new category.</DialogDescription>
				</DialogHeader>

				{open && <FORM setOpen={setOpen} />}
			</DialogContent>
		</Dialog>
	);
}

const FORM = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
	const [store, { isLoading }] = useUserStoreMutation();
	const { data: roles, isLoading: isLoadingRoles } = useRoleQuery({
		status: 'active',
		page: 1,
		limit: 'all',
	});

	const form = useForm<ZodType>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			username: '',
			email: '',
			phone: '',
			roleId: '',
			status: IUserStatus.Active,
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (data: ZodType) => {
		alertConfirm({
			onOk: async () => {
				try {
					const { confirmPassword, ...submitData } = data;
					const response = await store(submitData as any).unwrap();
					if (response.status) {
						toaster({ message: response.message || 'Updated successfully' });
						form.reset();
						setOpen(false);
					} else {
						if (!response?.status) {
							handleValidationError(response, form.setError);
						} else {
							toaster({
								message: response.message || 'Something went wrong',
								type: 'error',
							});
						}
					}
				} catch (error: any) {
					if (error?.status === 400) {
						handleValidationError(error, form.setError);
					} else {
						toaster({ message: 'Something went wrong', type: 'error' });
					}
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
									<Input {...field} placeholder="User Name" />
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
								<Select onValueChange={field.onChange}>
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

					{/* Confirm Password */}
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Type user confirm password..."
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
						{isLoading ? 'Creating...' : 'Create User'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
