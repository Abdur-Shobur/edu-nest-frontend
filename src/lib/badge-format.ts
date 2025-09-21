import { badgeVariants } from '@/components/ui/badge';
import { VariantProps } from 'class-variance-authority';

type BadgeVariant = VariantProps<typeof badgeVariants>;
type Badge = BadgeVariant['variant'];

export const badgeFormat = (status: string | number): Badge => {
	switch (status) {
		case '234':
			return 'secondary';

		case 'public':
			return 'outline';

		case 'active':
		case 'privet':
			return 'success';

		case 'inactive':
			return 'warning';

		case 'sd':
			return 'info';

		case 'trashed':
			return 'destructive';

		default:
			return 'default';
	}
};
