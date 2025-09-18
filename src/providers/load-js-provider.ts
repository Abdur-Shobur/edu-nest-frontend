'use client';

import { useEffect } from 'react';

export default function LoadJsProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const scripts = [
			'assets/js/jquery-3.7.1.min.js',
			'assets/js/modernizr.min.js',
			'assets/js/bootstrap.bundle.min.js',
			'assets/js/imagesloaded.pkgd.min.js',
			'assets/js/jquery.magnific-popup.min.js',
			'assets/js/isotope.pkgd.min.js',
			'assets/js/jquery.appear.min.js',
			'assets/js/jquery.easing.min.js',
			'assets/js/owl.carousel.min.js',
			'assets/js/counter-up.js',
			'assets/js/wow.min.js',
			'assets/js/main.js',
		];

		// Load scripts sequentially to ensure dependencies are met
		const loadScript = (src: string): Promise<void> => {
			return new Promise((resolve, reject) => {
				const script = document.createElement('script');
				script.src = src;
				script.onload = () => resolve();
				script.onerror = () =>
					reject(new Error(`Failed to load script: ${src}`));
				document.body.appendChild(script);
			});
		};

		// Load all scripts
		const loadAllScripts = async () => {
			try {
				for (const scriptSrc of scripts) {
					await loadScript(scriptSrc);
				}
			} catch (error) {
				console.error('Error loading scripts:', error);
			}
		};

		loadAllScripts();
	}, []);

	return children;
}
