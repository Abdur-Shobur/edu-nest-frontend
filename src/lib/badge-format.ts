import { badgeVariants } from '@/components/ui/badge';
import { VariantProps } from 'class-variance-authority';

type BadgeVariant = VariantProps<typeof badgeVariants>;
type Badge = BadgeVariant['variant'];

export const badgeFormat = (status: string | number): Badge => {
	switch (status) {
		case '234':
			return 'secondary';

		case 'public':
		case 'draft':
			return 'outline';

		case 'active':
		case 'privet':
		case 'published':
			return 'success';

		case 'inactive':
		case 'pending':
		case 'unpublished':
			return 'warning';

		case 'sd':
			return 'info';

		case 'trashed':
		case 'blocked':
			return 'destructive';

		default:
			return 'default';
	}
};
