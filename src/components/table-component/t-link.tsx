import { cn, textCount } from '@/lib';
import Link from 'next/link';

export function TLink({
	name,
	href,
	className,
}: {
	name: string;
	href: string;
	className?: string;
}) {
	return (
		<Link
			className={cn(
				'hover:underline hover:text-blue-500 transition',
				className
			)}
			href={href}
		>
			{textCount(name, 15)}
		</Link>
	);
}
