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
		url: '/admin/merchant-product',
		icon: Package,
		isActive: false,
	},
	{
		title: 'Dropshipper Requests',
		url: '/admin/dropshipper-request',
		icon: PackageOpen,
		isActive: false,
	},
	{
		title: 'Products Orders',
		url: '/admin/product-order',
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
				url: '/admin/service-category',
			},
			{
				title: 'Sub Category',
				url: '/admin/service-sub-category',
			},
		],
	},

	{
		title: 'Manage Services',
		url: '/admin/service',
		icon: Package2,
		isActive: false,
	},
	{
		title: 'Service Orders',
		url: '/admin/service-order',
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
				title: 'Update Home',
				url: '/admin/cms/home-content',
			},
			{
				title: 'Service',
				url: '/admin/cms/service',
			},
			{
				title: 'Organization',
				url: '/admin/cms/organization',
			},
			{
				title: 'Organization Two',
				url: '/admin/cms/organization-two',
			},
			{
				title: 'IT Service',
				url: '/admin/cms/it-service',
			},
			{
				title: 'Partner',
				url: '/admin/cms/partner',
			},
			{
				title: 'Social',
				url: '/admin/cms/social',
			},
			{
				title: 'Contact',
				url: '/admin/cms/contact',
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
				url: '/admin/cms/about',
			},
			{
				title: 'Companions',
				url: '/admin/cms/companions',
			},
			{
				title: 'Missions',
				url: '/admin/cms/missions',
			},
			{
				title: 'Testimonial',
				url: '/admin/cms/testimonial',
			},
			{
				title: 'Members',
				url: '/admin/cms/members',
			},
		],
	},
	{
		title: 'Others Content',
		icon: FileText,
		isActive: false,
		items: [
			{
				title: 'General',
				url: '/admin/cms/general',
			},
			{
				title: 'Advertise',
				url: '/admin/cms/advertise',
			},
			{
				title: 'Advertise Faq',
				url: '/admin/cms/advertise-faq',
			},
			{
				title: 'Service',
				url: '/admin/cms/service-content',
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
		url: '/admin/withdrawal',
		icon: BanknoteArrowDown,
		isActive: false,
	},
	{
		title: 'User Responses',
		url: '/admin/user-responses',
		icon: MailCheck,
		isActive: false,
	},
];
const users: sidebarItem[] = [
	{
		title: 'Manage Users',
		url: '/admin/users',
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
				url: '/admin/support',
			},
			{
				title: 'Support Categories',
				url: '/admin/support-category',
			},
			{
				title: 'Problem Topics',
				url: '/admin/support-sub-category',
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
				url: '/admin/advertise',
			},
			{
				title: 'Advertise Utilities',
				url: '/admin/advertise-utilities',
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
				url: '/admin/coupon/active',
			},
			{
				title: 'Request Coupons',
				url: '/admin/coupon/request',
			},
			{
				title: 'Rejected Coupons',
				url: '/admin/coupon/rejected',
			},
		],
	},
	{
		title: 'Membership',
		url: '/admin/membership',
		icon: Star,
		isActive: false,
	},
	{
		title: 'Subscription',
		url: '/admin/subscription',
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
