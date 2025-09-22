import { cn, env } from '@/lib';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function TAvatar({
	image,
	name,
	href,
	className,
}: {
	image: string;
	name: string;
	href?: string;
	className?: string;
}) {
	console.log(env.baseAPI + '/' + image);
	if (href) {
		return (
			<Link href={href}>
				<Avatar className={cn('h-12 w-12 rounded-xl', className)}>
					<AvatarImage
						className="object-cover"
						src={env.baseAPI + '/' + image}
						alt={name}
					/>
					<AvatarFallback className="rounded-xl bg-sky-100">
						{name.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</Link>
		);
	}
	return (
		<Avatar className={cn('h-12 w-12 rounded-xl', className)}>
			<AvatarImage
				className="object-cover"
				src={env.baseAPI + '/' + image}
				alt={name}
			/>
			<AvatarFallback className="rounded-xl bg-sky-100">
				{name.charAt(0).toUpperCase()}
			</AvatarFallback>
		</Avatar>
	);
}
