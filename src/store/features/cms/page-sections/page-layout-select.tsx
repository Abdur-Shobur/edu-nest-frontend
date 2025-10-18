'use client';

import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import { useFormContext } from 'react-hook-form';
import { ICMSPageDesignLayout } from './type';

const PageLayoutSelect = () => {
	const pageLayouts = [
		{
			id: 1,
			name: 'Layout 1',
			value: ICMSPageDesignLayout.Layout1,
			description: 'Layout 1 description',
			image: '/assets/img/layout/1.webp',
		},
		{
			id: 2,
			name: 'Layout 2',
			value: ICMSPageDesignLayout.Layout2,
			description: 'Layout 2 description',
			image: '/assets/img/layout/2.webp',
		},
		{
			id: 3,
			name: 'Layout 3',
			value: ICMSPageDesignLayout.Layout3,
			description: 'Layout 3 description',
			image: '/assets/img/layout/3.webp',
		},
		{
			id: 4,
			name: 'Layout 4',
			value: ICMSPageDesignLayout.Layout4,
			description: 'Layout 4 description',
			image: '/assets/img/layout/4.webp',
		},
		{
			id: 5,
			name: 'Layout 5',
			value: ICMSPageDesignLayout.Layout5,
			description: 'Layout 5 description',
			image: '/assets/img/layout/5.webp',
		},
		{
			id: 6,
			name: 'Layout 6',
			value: ICMSPageDesignLayout.Layout6,
			description: 'Layout 6 description',
			image: '/assets/img/layout/6.webp',
		},
	];

	const { setValue, watch } = useFormContext();
	const pageDesignLayout = watch('pageDesignLayout');

	const handleSectionChange = (value: string) => {
		setValue('pageDesignLayout', value);
	};

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between gap-4">
				<div>
					<h3 className="text-lg font-medium">Select Page Layout</h3>
					<p className="text-sm text-muted-foreground">
						Choose a page layout for this page section
					</p>
				</div>
			</div>
			<RadioGroupPrimitive.Root
				value={pageDesignLayout?.toString() || ''}
				onValueChange={handleSectionChange}
				className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
			>
				{pageLayouts?.map((section) => (
					<RadioGroupPrimitive.Item
						key={section.id}
						value={section.value.toString()}
						className={cn(
							'group relative ring-[1px] ring-border rounded-lg px-4 py-3 text-start text-muted-foreground data-[state=checked]:ring-2 data-[state=checked]:ring-primary data-[state=checked]:text-primary cursor-pointer hover:ring-primary/50 transition-all'
						)}
					>
						<CircleCheck className="absolute top-2 right-2 h-6 w-6 text-primary fill-primary stroke-white group-data-[state=unchecked]:hidden" />

						<span className="font-semibold tracking-tight">{section.name}</span>
						<div>
							{section.image && (
								<div className="flex items-center gap-2">
									<Image
										src={section.image}
										alt={section.name}
										width={1000}
										className="object-contain w-full"
										height={20}
									/>
								</div>
							)}
						</div>
					</RadioGroupPrimitive.Item>
				))}
			</RadioGroupPrimitive.Root>
		</div>
	);
};

export default PageLayoutSelect;
