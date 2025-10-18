'use client';

import {
	Dialog,
	DialogContent,
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
import { alertConfirm, handleValidationError } from '@/lib';
import { toast } from 'sonner';
import { CMSListItemsStore } from '../list-items';
import { CMSSectionsStore } from '../sections';
import { useCMSPageSectionsStoreMutation } from './api-slice';
import PageItemsSelect from './list-items-select';
import PageLayoutSelect from './page-layout-select';
import PageSectionsSelect from './page-section-select';
import {
	ICMSPageDesignLayout,
	ICMSPageIsFor,
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
	pageIsFor: z.enum(ICMSPageIsFor),
	pageDesignLayout: z.enum(ICMSPageDesignLayout),
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

export function CMSPageSectionsStore() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="lg" variant="brand">
					<Plus className="h-4 w-4" />
					<span className="hidden lg:inline">Create Section</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[1200px] overflow-y-scroll max-h-[90vh] ">
				<DialogHeader>
					<DialogTitle>Create Home Page Section</DialogTitle>
					<div className="flex items-center gap-4 justify-end">
						<CMSSectionsStore text="Section" />
						<CMSListItemsStore text="List Items" />
					</div>
				</DialogHeader>

				<FORM setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
}

const FORM = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
	const [store, { isLoading }] = useCMSPageSectionsStoreMutation();

	const form = useForm<ZodType>({
		resolver: zodResolver(schema),
		defaultValues: {
			pageSectionsName: '',
			pageSectionsKey: '',
			pageIsFor: ICMSPageIsFor.Home,
			pageDesignLayout: ICMSPageDesignLayout.Layout1,
			status: ICMSPageSectionsStatus.Active,
			sectionId: undefined,
			listItemIds: [],
			order: 0,
		},
	});

	const onSubmit = async (data: ZodType) => {
		alertConfirm({
			onOk: async () => {
				try {
					const response = await store({
						...data,
					}).unwrap();
					if (response.status) {
						toast.success(response.message || 'Updated successfully');
						form.reset();
						setOpen(false);
					} else {
						if (!response?.status) {
							handleValidationError(response, form.setError);
						} else {
							toast.error(response.message || 'Something went wrong');
						}
					}
				} catch (error: any) {
					if (error?.status === 400) {
						handleValidationError(error, form.setError);
					} else {
						toast.error('Something went wrong');
					}
				}
			},
		});
	};

	console.log(form.formState.errors);
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
					<div></div>
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
						{isLoading ? 'Creating...' : 'Create Page Section'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
