import type { Metadata } from 'next';

import LoadJsProvider from '@/providers/load-js-provider';

export const metadata: Metadata = {
	title: 'Edu ',
	description: 'Edu  Area',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LoadJsProvider>{children}</LoadJsProvider>;
}
