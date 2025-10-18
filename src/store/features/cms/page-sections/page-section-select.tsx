'use client';

import { Loader5 } from '@/components/loader';
import { Badge } from '@/components/ui/badge';
import { badgeFormat, env } from '@/lib';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import { useFormContext } from 'react-hook-form';
import { useCMSSectionsQuery } from '../sections';

const PageSectionsSelect = () => {
	const { data: sections, isLoading } = useCMSSectionsQuery({
		status: 'active',
		page: 1,
		limit: 'all',
	});

	const { setValue, watch } = useFormContext();
	const selectedSectionId = watch('sectionId');

	const handleSectionChange = (value: string) => {
		setValue('sectionId', parseInt(value));
	};

	if (isLoading) {
		return <Loader5 />;
	}

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between gap-4">
				<div>
					<h3 className="text-lg font-medium">Select Section (optional)</h3>
					<p className="text-sm text-muted-foreground">
						Choose a section for this page section
					</p>
				</div>
			</div>
			<RadioGroupPrimitive.Root
				value={selectedSectionId?.toString() || ''}
				onValueChange={handleSectionChange}
				className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
			>
				{sections?.data?.map((section) => (
					<RadioGroupPrimitive.Item
						key={section.id}
						value={section.id.toString()}
						className={cn(
							'group relative ring-[1px] ring-border rounded-lg px-4 py-3 text-start text-muted-foreground data-[state=checked]:ring-2 data-[state=checked]:ring-primary data-[state=checked]:text-primary cursor-pointer hover:ring-primary/50 transition-all'
						)}
					>
						<CircleCheck className="absolute top-2 right-2 h-6 w-6 text-primary fill-primary stroke-white group-data-[state=unchecked]:hidden" />

						<span className="font-semibold tracking-tight me-2">
							{section.title}
						</span>
						<Badge variant={badgeFormat(section.status)}>
							{section.sectionsKey}
						</Badge>
						<p className="text-xs text-muted-foreground">{section.subtitle}</p>
						{section.description && (
							<p className="text-xs mt-1 line-clamp-2">{section.description}</p>
						)}
						{section.image && (
							<div className="flex items-center gap-2">
								<Image
									src={`${env.baseAPI}/${section.image}`}
									alt={section.title}
									width={100}
									height={100}
								/>
							</div>
						)}
						{section.link && (
							<p className="text-xs text-muted-foreground">{section.link}</p>
						)}
						{section.linkText && (
							<p className="text-xs text-muted-foreground">
								{section.linkText}
							</p>
						)}
						{section.color && (
							<p className="text-xs text-muted-foreground">
								Color: {section.color}
							</p>
						)}
					</RadioGroupPrimitive.Item>
				))}
			</RadioGroupPrimitive.Root>
		</div>
	);
};

export default PageSectionsSelect;
