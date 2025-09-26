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
import { useCMSSectionsStoreMutation } from './api-slice';
import { ICMSSectionsStatus } from './type';

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
	link: z.string().trim().optional(),
	linkText: z.string().trim().optional(),
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

export function CMSSectionsStore({ text }: { text?: string }) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="lg" variant="brand">
					<Plus className="h-4 w-4" />
					{!text && <span className="hidden md:inline">Create Sections</span>}
					{text && <span>{text}</span>}
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[800px] overflow-y-scroll max-h-[90vh]">
				<DialogHeader>
					<DialogTitle>Create Sections</DialogTitle>
					<DialogDescription>Create a new category.</DialogDescription>
				</DialogHeader>

				{open && <FORM setOpen={setOpen} />}
			</DialogContent>
		</Dialog>
	);
}

const FORM = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
	const [store, { isLoading }] = useCMSSectionsStoreMutation();

	const form = useForm<ZodType>({
		resolver: zodResolver(schema),
		defaultValues: {
			image: undefined,
			sectionsKey: '',
			color: '',
			title: '',
			link: '',
			linkText: '',
			subtitle: '',
			description: '',
			order: 0,
			status: ICMSSectionsStatus.Active,
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
					{/* Sections Key */}
					<FormField
						control={form.control}
						name="sectionsKey"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Sections Key</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type sections key..." />
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
					{/* Link */}
					<FormField
						control={form.control}
						name="link"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Link</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type section link..." />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Link Text */}
					<FormField
						control={form.control}
						name="linkText"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Link Text</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type section link text..." />
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
				</div>

				<DialogFooter>
					<Button type="submit" disabled={isLoading}>
						{isLoading && (
							<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
						)}
						{isLoading ? 'Creating...' : 'Create Sections'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
