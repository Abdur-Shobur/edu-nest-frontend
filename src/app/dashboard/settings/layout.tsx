'use client';

import { Header } from '@/components/common/header';
import { PageWrap } from '@/components/common/page-wrap';
import { CardHeader, CardTitle } from '@/components/ui/card';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
	Home,
	MessageSquare,
	Settings as SettingsIcon,
	User,
} from 'lucide-react';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import React, { useEffect, useMemo } from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const [activeTab] = useQueryState('tab', {
		defaultValue: 'home',
	});

	// Tab config for Settings
	const items = useMemo(
		() => [
			{
				title: 'Home',
				url: `/dashboard/settings?tab=home`,
				icon: Home,
			},
			{
				title: 'Profile',
				url: `/dashboard/settings?tab=profile`,
				icon: User,
			},
			{
				title: 'Messages',
				url: `/dashboard/settings?tab=messages`,
				icon: MessageSquare,
			},
			{
				title: 'Settings',
				url: `/dashboard/settings?tab=settings`,
				icon: SettingsIcon,
			},
		],
		[]
	);

	// Find current tab item
	const currentItem =
		items.find((item) => item.url.includes(`tab=${activeTab}`)) || items[0];

	// Dynamic breadcrumb
	const breadcrumbItems = [
		{ name: 'Dashboard', path: '/dashboard' },
		{ name: 'Settings', path: `/dashboard/settings` },
		{ name: currentItem.title },
	];

	// Update document title dynamically
	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.title = `${currentItem.title} | Settings`;
		}
	}, [currentItem]);

	return (
		<>
			{/* header of the page */}
			<Header breadcrumbItems={breadcrumbItems}></Header>

			{/* page wrap */}
			<PageWrap
				header={
					// page header
					<CardHeader className="pb-2 px-5">
						<CardTitle className="text-primary text-[27px] font-semibold">
							Settings
						</CardTitle>
					</CardHeader>
				}
			>
				{/* page content */}
				<div className="flex gap-4 flex-col lg:flex-row">
					<SidebarMenu className=" flex flex-row lg:flex-col w-full lg:max-w-3xs flex-wrap">
						{items.map((item) => {
							const isActive = item.url.includes(`tab=${activeTab}`);
							return (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link
											href={item.url}
											className={`flex items-center gap-2 ${
												isActive
													? 'text-primary font-semibold'
													: 'text-muted-foreground'
											}`}
										>
											<item.icon size={18} />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							);
						})}
					</SidebarMenu>
					<div className="w-full">{children}</div>
				</div>
			</PageWrap>
		</>
	);
}
