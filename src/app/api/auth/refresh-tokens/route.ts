import { env } from '@/lib';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { refreshToken } = body ?? {};
		if (!refreshToken || typeof refreshToken !== 'string') {
			return NextResponse.json(
				{ status: false, message: 'refreshToken is required', statusCode: 400 },
				{ status: 400 }
			);
		}

		const res = await fetch(`${env.baseAPI}/api/auth/refresh-tokens`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ refreshToken }),
		});

		const data = await res.json();
		return NextResponse.json(data, { status: res.status });
	} catch (error) {
		return NextResponse.json(
			{ status: false, message: 'Failed to refresh token', statusCode: 500 },
			{ status: 500 }
		);
	}
}
