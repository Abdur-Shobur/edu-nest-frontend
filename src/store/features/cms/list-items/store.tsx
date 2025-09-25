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
import { ImageUpload } from '@/components/ui/image-upload';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { alertConfirm, handleValidationError, toaster } from '@/lib';
import { useCMSListItemsStoreMutation } from './api-slice';
import { ICMSListItemsStatus } from './type';

// --- Zod Schema ---
const schema = z.object({
	image: z
		.instanceof(File)
		.refine((file) => file.size > 0, { message: 'Image is required' })
		.optional(),
	listKey: z
		.string({ error: 'ListItems Key is required' })
		.trim()
		.min(1, 'ListItems Key is required'),
	title: z
		.string({ error: 'Title is required' })
		.trim()
		.min(1, 'Title is required'),
	subtitle: z.string().trim().optional(),
	description: z.string().trim().optional(),
	order: z.number().min(0, 'Order must be a positive number').optional(),
	status: z.enum([ICMSListItemsStatus.Active, ICMSListItemsStatus.Inactive]),
});

type ZodType = z.infer<typeof schema>;

export function CMSListItemsStore() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="lg" variant="brand">
					<Plus className="h-4 w-4" />
					<span className="hidden md:inline">Create CMSListItems</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[800px] overflow-y-scroll max-h-[90vh]">
				<DialogHeader>
					<DialogTitle>Create CMSListItems</DialogTitle>
					<DialogDescription>Create a new category.</DialogDescription>
				</DialogHeader>

				{open && <FORM setOpen={setOpen} />}
			</DialogContent>
		</Dialog>
	);
}

const FORM = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
	const [store, { isLoading }] = useCMSListItemsStoreMutation();

	const form = useForm<ZodType>({
		resolver: zodResolver(schema),
		defaultValues: {
			image: undefined,
			listKey: '',
			title: '',
			subtitle: '',
			description: '',
			order: 0,
			status: ICMSListItemsStatus.Active,
		},
	});

	const onSubmit = async (data: ZodType) => {
		alertConfirm({
			onOk: async () => {
				try {
					const response = await store(data as any).unwrap();
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

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<ImageUpload
								label="Section Image"
								value={field.value}
								onChange={field.onChange}
								defaultImage={'/placeholder.svg'}
							/>
						</FormItem>
					)}
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{/* ListItems Key */}
					<FormField
						control={form.control}
						name="listKey"
						render={({ field }) => (
							<FormItem>
								<FormLabel>ListItems Key</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type list items key..." />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Title */}
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type list items title..." />
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
									<Input {...field} placeholder="Type list items subtitle..." />
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
										<SelectItem value={ICMSListItemsStatus.Active}>
											Active
										</SelectItem>
										<SelectItem value={ICMSListItemsStatus.Inactive}>
											Inactive
										</SelectItem>
									</SelectContent>
								</Select>
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
						{isLoading ? 'Creating...' : 'Create CMSListItems'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
