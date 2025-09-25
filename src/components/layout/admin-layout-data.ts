'use client';

import {
	BanknoteArrowDown,
	FileText,
	Headset,
	LandPlot,
	MailCheck,
	Megaphone,
	Package,
	Package2,
	PackageCheck,
	PackageOpen,
	Puzzle,
	Settings,
	ShieldCheck,
	Sparkles,
	Star,
	UserCog,
} from 'lucide-react';

import { sidebarItem } from './layout-type';

const products: sidebarItem[] = [
	{
		title: 'Product Categories',
		icon: LandPlot,
		isActive: false,
		items: [
			{
				title: 'Category',
				url: '/dashboard/category',
			},
			{
				title: 'Sub Category',
				url: '/dashboard/sub-category',
			},
		],
	},

	{
		title: 'Product Brands',
		url: '/dashboard/brand',
		icon: LandPlot,
		isActive: false,
	},
	{
		title: 'Merchant Products',
		url: '/dashboard/merchant-product',
		icon: Package,
		isActive: false,
	},
	{
		title: 'Dropshipper Requests',
		url: '/dashboard/dropshipper-request',
		icon: PackageOpen,
		isActive: false,
	},
	{
		title: 'Products Orders',
		url: '/dashboard/product-order',
		icon: PackageCheck,
		isActive: false,
	},
];
const services: sidebarItem[] = [
	{
		title: 'Service Categories',
		icon: LandPlot,
		isActive: false,
		items: [
			{
				title: 'Category',
				url: '/dashboard/service-category',
			},
			{
				title: 'Sub Category',
				url: '/dashboard/service-sub-category',
			},
		],
	},

	{
		title: 'Manage Services',
		url: '/dashboard/service',
		icon: Package2,
		isActive: false,
	},
	{
		title: 'Service Orders',
		url: '/dashboard/service-order',
		icon: PackageCheck,
		isActive: false,
	},
];
const cms: sidebarItem[] = [
	{
		title: 'Home Content',
		icon: FileText,
		isActive: false,
		items: [
			{
				title: 'Banner',
				url: '/dashboard/cms/banner',
			},
		],
	},
	{
		title: 'About Content',
		icon: FileText,
		isActive: false,
		items: [
			{
				title: 'Update About',
				url: '/dashboard/cms/about',
			},
		],
	},
	{
		title: 'Others Content',
		icon: FileText,
		isActive: false,
		items: [
			{
				title: 'All Sections',
				url: '/dashboard/cms/sections',
			},
			{
				title: 'All List Items',
				url: '/dashboard/cms/list-items',
			},
		],
	},
];
const hrm: sidebarItem[] = [
	{
		title: 'Settings',
		url: '/dashboard/settings',
		icon: Settings,
		isActive: false,
	},
	{
		title: 'Role Permissions',
		icon: ShieldCheck,
		isActive: false,
		items: [
			{
				title: 'Roles',
				url: '/dashboard/roles',
			},
			{
				title: 'Dev Category',
				url: '/dashboard/roles/dev-category',
			},
			{
				title: 'Dev Sub Category',
				url: '/dashboard/roles/dev-sub-category',
			},
			{
				title: 'Managers',
				url: '/dashboard/roles/managers',
			},
		],
	},
	{
		title: 'Withdrawals',
		url: '/dashboard/withdrawal',
		icon: BanknoteArrowDown,
		isActive: false,
	},
	{
		title: 'User Responses',
		url: '/dashboard/user-responses',
		icon: MailCheck,
		isActive: false,
	},
];
const users: sidebarItem[] = [
	{
		title: 'Manage Users',
		url: '/dashboard/user',
		icon: UserCog,
		isActive: false,
	},
];
const support: sidebarItem[] = [
	{
		title: 'Manage Supports',
		icon: Headset,
		isActive: false,
		items: [
			{
				title: 'All Supports',
				url: '/dashboard/support',
			},
			{
				title: 'Support Categories',
				url: '/dashboard/support-category',
			},
			{
				title: 'Problem Topics',
				url: '/dashboard/support-sub-category',
			},
		],
	},
];
const advertise: sidebarItem[] = [
	{
		title: 'Manage Advertise',
		icon: Megaphone,
		isActive: false,
		items: [
			{
				title: 'All Advertise',
				url: '/dashboard/advertise',
			},
			{
				title: 'Advertise Utilities',
				url: '/dashboard/advertise-utilities',
			},
		],
	},
];
const sass: sidebarItem[] = [
	{
		title: 'Manage Coupon',
		icon: Puzzle,
		isActive: false,
		items: [
			{
				title: 'Active Coupons',
				url: '/dashboard/coupon/active',
			},
			{
				title: 'Request Coupons',
				url: '/dashboard/coupon/request',
			},
			{
				title: 'Rejected Coupons',
				url: '/dashboard/coupon/rejected',
			},
		],
	},
	{
		title: 'Membership',
		url: '/dashboard/membership',
		icon: Star,
		isActive: false,
	},
	{
		title: 'Subscription',
		url: '/dashboard/subscription',
		icon: Sparkles,
		isActive: false,
	},
];

export const adminSidebarData = {
	products,
	services,
	cms,
	hrm,
	users,
	support,
	advertise,
	sass,
};
