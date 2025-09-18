'use client';

import { Tent } from 'lucide-react';
import * as React from 'react';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { adminSidebarData } from './admin-layout-data';
import AppRoot from './app-root';
import { NavMain } from './nav-main';
import { SearchForm } from './search-form';
import { filterItems } from './sidebar-actions';

export function AppSidebarForAdmin({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const [searchQuery, setSearchQuery] = React.useState('');

	const filteredProducts = filterItems(adminSidebarData.products, searchQuery);
	const filterUser = filterItems(adminSidebarData.users, searchQuery);
	const filteredServices = filterItems(adminSidebarData.services, searchQuery);
	const filteredCMS = filterItems(adminSidebarData.cms, searchQuery);
	const filteredHRM = filterItems(adminSidebarData.hrm, searchQuery);
	const filteredSupport = filterItems(adminSidebarData.support, searchQuery);
	const filteredAdvertise = filterItems(
		adminSidebarData.advertise,
		searchQuery
	);
	const filteredSaas = filterItems(adminSidebarData.sass, searchQuery);

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="mb-4">
				<Link href="/" className="flex items-center gap-2">
					<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
						<Tent className="size-4" />
					</div>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-medium text-lg">Dashboard</span>
						<span className="truncate text-xs">All in one place</span>
					</div>
				</Link>
			</SidebarHeader>

			{/*   Search Input */}
			<SearchForm value={searchQuery} onChange={setSearchQuery as any} />

			{/*   Filtered Navigation */}
			<SidebarContent className="gap-0 pb-8">
				<AppRoot />
				<NavMain items={filterUser} groupLabel="Users" />
				<NavMain items={filteredProducts} groupLabel="Products" />
				<NavMain items={filteredServices} groupLabel="Services" />
				<NavMain items={filteredAdvertise} groupLabel="Advertise" />
				<NavMain items={filteredSaas} groupLabel="Saas" />
				<NavMain items={filteredSupport} groupLabel="Support" />
				<NavMain items={filteredCMS} groupLabel="CMS" />
				<NavMain items={filteredHRM} groupLabel="HRM" />
			</SidebarContent>
			<SidebarFooter className="border-t">
				<div className="flex items-center justify-center p-2">
					<ThemeToggle />
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
