'use client';

import { SettingsPage } from '@/store/features/settings';
import { useSearchParams } from 'next/navigation';

export default function PageClient() {
	const searchParams = useSearchParams().get('tab');
	console.log(searchParams);
	switch (searchParams) {
		case 'home':
			return 'home';

		case 'profile':
			return 'profile';

		case 'messages':
			return 'messages';

		default:
			return <SettingsPage />;
	}
}
