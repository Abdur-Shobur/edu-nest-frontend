import type { Metadata } from 'next';

import LoadJsProvider from '@/providers/load-js-provider';
import '../../../public/assets/css/all-fontawesome.min.css';
import '../../../public/assets/css/animate.min.css';
import '../../../public/assets/css/bootstrap.min.css';
import '../../../public/assets/css/magnific-popup.min.css';
import '../../../public/assets/css/owl.carousel.min.css';
import '../../../public/assets/css/style.css';

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
