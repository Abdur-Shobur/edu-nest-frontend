'use client';

import { Loader5 } from '@/components/loader';
import { env } from '@/lib';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { useFormContext } from 'react-hook-form';
import { useCMSListItemsQuery } from '../list-items';

const PageItemsSelect = () => {
	const { data: listItems, isLoading } = useCMSListItemsQuery({
		status: 'active',
		page: 1,
		limit: 'all',
	});

	const { setValue, watch } = useFormContext();
	const selectedListItemIds = watch('listItemIds') || [];

	const handleListItemChange = (itemId: number, checked: boolean) => {
		const currentIds: number[] = selectedListItemIds || [];
		if (checked) {
			setValue('listItemIds', [...currentIds, itemId]);
		} else {
			setValue(
				'listItemIds',
				currentIds.filter((id: number) => id !== itemId)
			);
		}
	};

	if (isLoading) {
		return <Loader5 />;
	}

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between gap-4">
				<div>
					<h3 className="text-lg font-medium">Select List Items</h3>
					<p className="text-sm text-muted-foreground">
						Choose one or more list items for this page section
					</p>
				</div>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
				{listItems?.data?.map((item) => {
					const isChecked = selectedListItemIds.includes(item.id);
					return (
						<CheckboxPrimitive.Root
							key={item.id}
							checked={isChecked}
							onCheckedChange={(checked) =>
								handleListItemChange(item.id, checked as boolean)
							}
							className={cn(
								'relative ring-[1px] ring-border rounded-lg px-4 py-3 text-start text-muted-foreground data-[state=checked]:ring-2 data-[state=checked]:ring-primary data-[state=checked]:text-primary cursor-pointer hover:ring-primary/50 transition-all'
							)}
						>
							{item.image && (
								<div className="flex items-center gap-2">
									<Image
										src={`${env.baseAPI}/${item.image}`}
										alt={item.title}
										width={50}
										height={50}
									/>
								</div>
							)}
							<span className="font-medium tracking-tight">{item.title}</span>
							{item.subtitle && (
								<p className="text-xs text-muted-foreground mt-1">
									{item.subtitle}
								</p>
							)}
							{item.description && (
								<p className="text-xs mt-1 line-clamp-2">{item.description}</p>
							)}

							<CheckboxPrimitive.Indicator className="absolute top-2 right-2">
								<CircleCheck className="h-6 w-6 fill-primary text-primary-foreground" />
							</CheckboxPrimitive.Indicator>
						</CheckboxPrimitive.Root>
					);
				})}
			</div>
		</div>
	);
};

export default PageItemsSelect;
