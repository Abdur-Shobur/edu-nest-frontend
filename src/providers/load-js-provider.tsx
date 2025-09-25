export default function LoadJsProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{/* CSS Stylesheets */}
			<link rel="stylesheet" href="/assets/css/all-fontawesome.min.css" />
			<link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
			<link rel="stylesheet" href="/assets/css/style.css" />

			{children}
		</>
	);
}
