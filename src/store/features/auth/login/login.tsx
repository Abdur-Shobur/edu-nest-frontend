'use client';

import { toaster } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLoginMutation } from './api-slice';

// login schema
const loginSchema = z.object({
	email: z
		.email({ message: 'Enter a valid email address' })
		.trim()
		.min(1, { message: 'Email is required' }),
	password: z
		.string()
		.trim()
		.min(6, { message: 'Password must be at least 6 characters' }),
	remember: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const Login = () => {
	const router = useRouter();
	//  form hook
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: '', password: '', remember: false },
	});

	// login mutation
	const [login, { isLoading }] = useLoginMutation();

	// on submit
	const onSubmit = async (values: LoginFormValues): Promise<void> => {
		try {
			// login
			const response = await login({
				email: values.email,
				password: values.password,
			}).unwrap();

			// if (response.statusCode === 200) {
			// 	// sign in with credentials
			// 	const signInResult = await signIn('credentials', {
			// 		token: JSON.stringify(response.data),
			// 		redirect: false,
			// 	});

			// 	if (signInResult?.ok) {
			// 		//  if success
			// 		toaster({
			// 			message: response.message || 'Thank you for your message!',
			// 		});
			// 		reset({ email: '', password: '', remember: false });
			// 		router.push('/');
			// 	} else {
			// 		//  if failed
			// 		toaster({
			// 			message: 'Authentication failed. Please try again.',
			// 			type: 'error',
			// 		});
			// 	}
			// } else {
			// 	//  if failed
			// 	toaster({
			// 		message:
			// 			response.message || 'Login failed. Please check your credentials.',
			// 		type: 'error',
			// 	});
			// }
		} catch (err: any) {
			//  if failed with error
			const message =
				(typeof err === 'object' &&
					err !== null &&
					'data' in err &&
					err?.data?.message) ||
				'Login failed. Please check your credentials.';
			toaster({
				message: message || 'Login failed. Please check your credentials.',
				type: 'error',
			});
		}
	};

	return (
		<div className="login-area pd-50">
			<div className="container">
				<div className="col-md-5 mx-auto">
					<div className="login-form">
						<div className="login-header">
							<img src="assets/img/logo/logo.png" alt="Logo" />
							<p>Login with your eduka account</p>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-group">
								<label>Email Address</label>
								<input
									type="email"
									className="form-control"
									placeholder="Your Email"
									{...register('email')}
								/>
								{errors.email ? (
									<small className="text-danger">{errors.email.message}</small>
								) : null}
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="password"
									className="form-control"
									placeholder="Your Password"
									{...register('password')}
								/>
								{errors.password ? (
									<small className="text-danger">
										{errors.password.message}
									</small>
								) : null}
							</div>
							<div className="d-flex justify-content-between mb-4">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="remember"
										{...register('remember')}
									/>
									<label className="form-check-label" htmlFor="remember">
										Remember Me
									</label>
								</div>
								<Link href="/forgot-password" className="forgot-pass">
									Forgot Password?
								</Link>
							</div>
							<div className="d-flex align-items-center">
								<button
									type="submit"
									className="theme-btn"
									disabled={isLoading}
								>
									<i className="far fa-sign-in"></i>{' '}
									{isLoading ? 'Logging in...' : 'Login'}
								</button>
							</div>
						</form>
						<div className="login-footer">
							<p>
								Don&apos;t have an account? <Link href="/register">Register.</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
