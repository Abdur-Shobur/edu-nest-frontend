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

import { Loader5 } from '@/components/loader';
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
import { MultiSelect } from '@/components/ui/multi-select';
import { Editor } from '@/components/ui/quill-editor';
import { SearchableSelectFormItem } from '@/components/ui/searchable-select-form-item';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { alertConfirm, handleValidationError, toaster } from '@/lib';
import { useBlogCategoryQuery } from '../blog-category';
import { useTagQuery } from '../tag';
import { useCMSBlogStoreMutation } from './api-slice';
import { IBlogStatus } from './type';

// --- Zod Schema ---
const schema = z.object({
	banner: z
		.instanceof(File)
		.refine((file) => file.size > 0, { message: 'Banner is required' })
		.optional(),
	image1: z
		.instanceof(File)
		.refine((file) => file.size > 0, { message: 'Image 1 is required' })
		.optional(),
	image2: z
		.instanceof(File)
		.refine((file) => file.size > 0, { message: 'Image 2 is required' })
		.optional(),
	title: z
		.string({ error: 'Title is required' })
		.trim()
		.min(1, 'Title is required')
		.max(255, 'Title must be less than 200 characters'),
	subtitle: z
		.string()
		.trim()
		.max(200, 'Subtitle must be less than 200 characters')
		.optional(),
	content: z
		.string()
		.trim()
		.max(10000, 'Content must be less than 10000 characters')
		.optional(),
	categoryId: z.string().min(1, 'Category is required'),
	// tag is label and value pair
	tagIds: z
		.array(z.object({ label: z.string(), value: z.string() }).optional())
		.optional(),
	quotation: z
		.string()
		.trim()
		.max(300, 'Quotation must be less than 300 characters')
		.optional(),
	quotationAuthor: z
		.string()
		.trim()
		.max(150, 'Quotation author must be less than 255 characters')
		.optional(),
	readTime: z.number().min(0).optional(),
	order: z.number().min(0, 'Order must be a positive number').optional(),
	status: z.enum([
		IBlogStatus.Published,
		IBlogStatus.Unpublished,
		IBlogStatus.Draft,
	]),
});

type ZodType = z.infer<typeof schema>;

export function CMSBlogStore() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="lg" variant="brand">
					<Plus className="h-4 w-4" />
					<span className="hidden md:inline">Create Blog</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[800px] overflow-y-scroll max-h-[90vh]">
				<DialogHeader>
					<DialogTitle>Create Blog</DialogTitle>
					<DialogDescription>Create a new category.</DialogDescription>
				</DialogHeader>

				{open && <FORM setOpen={setOpen} />}
			</DialogContent>
		</Dialog>
	);
}

const FORM = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
	const [store, { isLoading }] = useCMSBlogStoreMutation();
	const { data: categoryData, isLoading: isLoadingCategory } =
		useBlogCategoryQuery({
			status: 'active',
			page: 1,
			limit: 'all',
			search: '',
		});

	const { data: tagData, isLoading: isLoadingTag } = useTagQuery({
		status: 'active',
		page: 1,
		limit: 'all',
		search: '',
	});

	const form = useForm<ZodType>({
		resolver: zodResolver(schema),
		defaultValues: {
			banner: undefined,
			image1: undefined,
			image2: undefined,
			title: '',
			subtitle: '',
			content: '',
			categoryId: '',
			tagIds: [],
			quotation: '',
			quotationAuthor: '',
			readTime: 5,
			order: 0,
			status: IBlogStatus.Draft,
		},
	});

	const onSubmit = async (data: ZodType) => {
		alertConfirm({
			onOk: async () => {
				try {
					const payload: any = {
						...data,
						tagIds: data.tagIds?.map((tag) => tag?.value),
						slug: data.title.toLowerCase().replace(/\s+/g, '-').trim(),
					};

					const response = await store(payload).unwrap();
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

	if (isLoadingCategory || isLoadingTag) {
		return (
			<>
				<Loader5 />
				<Loader5 />
			</>
		);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="banner"
					render={({ field }) => (
						<FormItem>
							<ImageUpload
								label="Banner"
								value={field.value}
								onChange={field.onChange}
								defaultImage={'/placeholder.svg'}
							/>
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
								<Textarea {...field} placeholder="Type blog title..." />
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
								<Input {...field} placeholder="Type subtitle..." />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{/* Category Id */}
					<FormField
						control={form.control}
						name="categoryId"
						render={({ field }) => (
							<SearchableSelectFormItem
								field={field}
								label="Select Category"
								options={
									categoryData?.data?.map((cat) => ({
										label: cat.name,
										value: cat.id.toString(),
									})) ?? []
								}
								placeholder="Select category"
							/>
						)}
					/>

					<FormField
						name="tagIds"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Select Tags</FormLabel>
								<FormControl>
									<MultiSelect
										options={
											tagData?.data?.map((tag) => ({
												label: tag.name,
												value: tag.id.toString(),
											})) ?? []
										}
										value={field.value || []}
										onChange={(e) => {
											console.log(e);
											field.onChange(e);
										}}
										placeholder="Select tags..."
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				{/* Content */}
				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<Editor
									value={field.value ?? ''}
									onChange={(val) => field.onChange(val)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Quotation Author */}
				<FormField
					control={form.control}
					name="quotationAuthor"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Quotation Author Name</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Type quotation author name..." />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Quotation */}
				<FormField
					control={form.control}
					name="quotation"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Quotation</FormLabel>
							<FormControl>
								<Textarea {...field} placeholder="Type quotation..." />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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

					{/* Read Time */}
					<FormField
						control={form.control}
						name="readTime"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Read Time (minutes)</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="number"
										placeholder="e.g. 5"
										onChange={(e) =>
											field.onChange(parseInt(e.target.value) || 0)
										}
									/>
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
										<SelectItem value={IBlogStatus.Published}>
											Published
										</SelectItem>
										<SelectItem value={IBlogStatus.Unpublished}>
											Unpublished
										</SelectItem>
										<SelectItem value={IBlogStatus.Draft}>Draft</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					<FormField
						control={form.control}
						name="image1"
						render={({ field }) => (
							<FormItem>
								<ImageUpload
									label="Image 1 (optional)"
									value={field.value}
									onChange={field.onChange}
									defaultImage={'/placeholder.svg'}
								/>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="image2"
						render={({ field }) => (
							<FormItem>
								<ImageUpload
									label="Image 2 (optional)"
									value={field.value}
									onChange={field.onChange}
									defaultImage={'/placeholder.svg'}
								/>
							</FormItem>
						)}
					/>
				</div>

				<DialogFooter>
					<Button type="submit" disabled={isLoading}>
						{isLoading && (
							<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
						)}
						{isLoading ? 'Creating...' : 'Create Blog'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
