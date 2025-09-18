import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ReduxProviders } from './redux-provider';
import { ThemeProvider } from './theme-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider defaultTheme="system">
			<NuqsAdapter>
				<ReduxProviders>{children}</ReduxProviders>
			</NuqsAdapter>
		</ThemeProvider>
	);
}
