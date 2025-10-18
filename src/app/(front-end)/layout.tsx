import LoadJsProvider from '@/providers/load-js-provider';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LoadJsProvider>{children}</LoadJsProvider>;
}
