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
	DropdownMenuItem,
	DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { alertConfirm, handleValidationError, toaster } from '@/lib';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle, Pen } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useCMSPageSectionsUpdateMutation } from './api-slice';
import PageItemsSelect from './list-items-select';
import PageLayoutSelect from './page-layout-select';
import PageSectionsSelect from './page-section-select';
import {
	ICMSPageDesignLayout,
	ICMSPageIsFor,
	ICMSPageSections,
	ICMSPageSectionsStatus,
} from './type';

// --- Zod Schema ---
const schema = z.object({
	pageSectionsName: z
		.string({ error: 'Page Section Name is required' })
		.trim()
		.min(1, 'Page Section Name is required'),
	pageSectionsKey: z
		.string({ error: 'Page Section Key is required' })
		.trim()
		.min(1, 'Page Section Key is required'),
	pageIsFor: z.nativeEnum(ICMSPageIsFor),
	pageDesignLayout: z.nativeEnum(ICMSPageDesignLayout),
	status: z.enum([
		ICMSPageSectionsStatus.Active,
		ICMSPageSectionsStatus.Inactive,
		ICMSPageSectionsStatus.Trashed,
	]),
	sectionId: z.number().optional(),
	listItemIds: z.array(z.number()).optional(),
	order: z.number().min(0, 'Order must be a positive number').optional(),
});
type ZodType = z.infer<typeof schema>;

//  Component
export function UpdateModal({ data }: { data: ICMSPageSections }) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
				<DialogTrigger className="flex items-center gap-2 w-full">
					<DropdownMenuShortcut className="ml-0">
						<Pen className="size-4" />
					</DropdownMenuShortcut>
					Edit CMSPageSections
				</DialogTrigger>
			</DropdownMenuItem>

			<DialogContent
				className={cn(
					'sm:max-w-[1200px] w-full overflow-y-scroll max-h-[90vh]'
				)}
			>
				<DialogHeader>
					<DialogTitle>Update CMSPageSections</DialogTitle>
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
	editData: ICMSPageSections;
}) => {
	const [mutation, { isLoading }] = useCMSPageSectionsUpdateMutation();

	const form = useForm<ZodType>({
		resolver: zodResolver(schema),
		defaultValues: {
			pageSectionsName: editData.pageSectionsName || '',
			pageSectionsKey: editData.pageSectionsKey || '',
			pageIsFor: editData.pageIsFor || ICMSPageIsFor.Home,
			pageDesignLayout:
				(editData.pageDesignLayout as ICMSPageDesignLayout) ||
				ICMSPageDesignLayout.Layout1,
			status: editData.status || ICMSPageSectionsStatus.Active,
			sectionId: editData.section?.id || undefined,
			listItemIds: editData.listItems?.map((item) => item.id) || [],
			order: editData.order || 0,
		},
	});

	useEffect(() => {
		form.reset({
			pageSectionsName: editData.pageSectionsName || '',
			pageSectionsKey: editData.pageSectionsKey || '',
			pageIsFor: editData.pageIsFor || ICMSPageIsFor.Home,
			pageDesignLayout:
				(editData.pageDesignLayout as ICMSPageDesignLayout) ||
				ICMSPageDesignLayout.Layout1,
			status: editData.status || ICMSPageSectionsStatus.Active,
			sectionId: editData.section?.id || undefined,
			listItemIds: editData.listItems?.map((item) => item.id) || [],
			order: editData.order || 0,
		});
	}, [editData, form]);

	const onSubmit = async (data: ZodType) => {
		console.log('Form data being submitted:', data);
		alertConfirm({
			onOk: async () => {
				try {
					const response = await mutation({
						...data,
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
					console.error('Update error:', error);
					handleValidationError(error, form.setError);
				}
			},
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{/* Page Section Name */}
					<FormField
						control={form.control}
						name="pageSectionsName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Page Section Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type page section name..." />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Page Section Key */}
					<FormField
						control={form.control}
						name="pageSectionsKey"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Page Section Key</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Type page section key..." />
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
										placeholder="Enter order number..."
										onChange={(e) =>
											field.onChange(parseInt(e.target.value) || 0)
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{/* Page Sections */}
				<PageSectionsSelect />

				{/* Page Items */}
				<PageItemsSelect />

				{/* Page Layout */}
				<PageLayoutSelect />

				<DialogFooter>
					<Button type="submit" disabled={isLoading}>
						{isLoading && (
							<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
						)}
						{isLoading ? 'Updating...' : 'Update Page Section'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
