import { AppProvider } from '@/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Edu ',
	description: 'Edu  Area',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
