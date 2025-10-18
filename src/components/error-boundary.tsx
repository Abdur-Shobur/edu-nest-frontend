'use client';

import React from 'react';

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

interface ErrorBoundaryProps {
	children: React.ReactNode;
	fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo);
	}

	reset = () => {
		this.setState({ hasError: false, error: undefined });
	};

	render() {
		if (this.state.hasError && this.state.error) {
			if (this.props.fallback) {
				const FallbackComponent = this.props.fallback;
				return (
					<FallbackComponent error={this.state.error} reset={this.reset} />
				);
			}

			// Default fallback UI
			return (
				<div className="error-area">
					<div className="container">
						<div className="col-md-6 mx-auto">
							<div className="error-wrapper">
								<h2>Something went wrong!</h2>
								<p>{this.state.error.message}</p>
								<button
									onClick={this.reset}
									className="theme-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
								>
									Try Again
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
