import { badgeVariants } from '@/components/ui/badge';
import { VariantProps } from 'class-variance-authority';

type BadgeVariant = VariantProps<typeof badgeVariants>;
type Badge = BadgeVariant['variant'];

export const badgeFormat = (status: string | number): Badge => {
	switch (status) {
		case '1':
			return 'secondary';

		case '2':
			return 'outline';

		case 'active':
			return 'success';

		case '3':
			return 'warning';

		case '4':
			return 'info';

		case '5':
			return 'destructive';

		default:
			return 'default';
	}
};
