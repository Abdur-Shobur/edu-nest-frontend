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
import { ImageUpload } from '@/components/ui/image-upload';
import { Textarea } from '@/components/ui/textarea';
import { alertConfirm, env, handleValidationError, toaster } from '@/lib';
import { useCMSSectionsUpdateMutation } from './api-slice';
import { ICMSSections, ICMSSectionsStatus } from './type';

// --- Zod Schema ---
const schema = z.object({
	image: z
		.instanceof(File)
		.refine((file) => file.size > 0, { message: 'Image is required' })
		.optional(),
	sectionsKey: z
		.string({ error: 'Sections Key is required' })
		.trim()
		.min(1, 'Sections Key is required'),
	color: z.string().trim().optional(),
	title: z
		.string({ error: 'Title is required' })
		.trim()
		.min(1, 'Title is required'),
	subtitle: z.string().trim().optional(),
	description: z.string().trim().optional(),
	order: z.number().min(0, 'Order must be a positive number').optional(),
	status: z.enum([ICMSSectionsStatus.Active, ICMSSectionsStatus.Inactive]),
});

type ZodType = z.infer<typeof schema>;

//  Component
export function UpdateModal({ data }: { data: ICMSSections }) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
				<DialogTrigger className="flex items-center gap-2 w-full">
					<DropdownMenuShortcut className="ml-0">
						<Pen className="size-4" />
					</DropdownMenuShortcut>
					Edit CMSSections
				</DialogTrigger>
			</DropdownMenuItem>

			<DialogContent
				className={cn('sm:max-w-[800px] w-full overflow-y-scroll max-h-[90vh]')}
			>
				<DialogHeader>
					<DialogTitle>Update CMSSections</DialogTitle>
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
	editData: ICMSSections;
}) => {
	const [mutation, { isLoading }] = useCMSSectionsUpdateMutation();

	const form = useForm<ZodType>({
		resolver: zodResolver(schema),
		defaultValues: {
			image: undefined,
			sectionsKey: editData.sectionsKey,
			color: editData.color,
			title: editData.title,
			subtitle: editData.subtitle,
			description: editData.description,
			order: editData.order,
			status:
				editData.status === ICMSSectionsStatus.Trashed
					? ICMSSectionsStatus.Inactive
					: editData.status,
		},
	});

	useEffect(() => {
		form.reset({
			image: undefined,
			sectionsKey: editData.sectionsKey,
			color: editData.color,
			title: editData.title,
			subtitle: editData.subtitle,
			description: editData.description,
			order: editData.order,
			status:
				editData.status === ICMSSectionsStatus.Trashed
					? ICMSSectionsStatus.Inactive
					: editData.status,
		});
	}, [editData]);

	const onSubmit = async (data: ZodType) => {
		alertConfirm({
			onOk: async () => {
				try {
					const response = await mutation({
						...(data as any),
						id: editData.id,
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
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				{/* Image */}
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<ImageUpload
								label="Section Image"
								value={field.value}
								onChange={field.onChange}
								defaultImage={
									editData.image
										? `${env.baseAPI}/${editData.image}`
										: '/placeholder.svg'
								}
							/>
						</FormItem>
					)}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{/* Title */}
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type section title..." />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Subtitle */}
					<FormField
						control={form.control}
						name="subtitle"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subtitle</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type section subtitle..." />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Description */}
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Textarea {...field} placeholder="Type description..." />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Order */}
					<FormField
						control={form.control}
						name="order"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Order</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="number"
										placeholder="Type order number..."
										onChange={(e) =>
											field.onChange(parseInt(e.target.value) || 0)
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Color */}
					<FormField
						control={form.control}
						name="color"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Color</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type color value..." />
								</FormControl>
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
										<SelectItem value={ICMSSectionsStatus.Active}>
											Active
										</SelectItem>
										<SelectItem value={ICMSSectionsStatus.Inactive}>
											Inactive
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Sections Key */}
					<FormField
						control={form.control}
						name="sectionsKey"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Sections Key</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Type sections key..."
										readOnly={env.production}
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
						{isLoading ? 'Updating...' : 'Update CMSSections'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
