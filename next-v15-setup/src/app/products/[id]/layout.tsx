export default function ProductLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<h2>Featured Product Details</h2>
			{children}
		</>
	);
}
