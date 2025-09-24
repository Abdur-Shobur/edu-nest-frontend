import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Protect dashboard and related private routes; manage auth page redirects
export async function middleware(request: NextRequest) {
	const { pathname, origin } = request.nextUrl;

	// Read NextAuth JWT from cookies
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
	});
	const isAuthenticated = Boolean(token?.accessToken);

	const isAuthPage =
		pathname.startsWith('/(front-end)/auth') ||
		pathname === '/login' ||
		pathname === '/auth' ||
		pathname.startsWith('/auth');
	const isDashboard = pathname.startsWith('/dashboard');

	// If visiting auth pages while already authenticated, redirect to dashboard
	if (isAuthPage && isAuthenticated) {
		return NextResponse.redirect(new URL('/dashboard', origin));
	}

	// If visiting dashboard without auth, redirect to auth page
	if (isDashboard && !isAuthenticated) {
		// Send them to the public auth page
		return NextResponse.redirect(new URL('/(front-end)/auth', origin));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/auth/:path*', '/(front-end)/auth', '/login'],
};
