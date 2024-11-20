import AppHeader from "@/layout/app-header";

// ----------------------------------------------------------------------

interface DocsLayoutProps {
	children?: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<>
			<AppHeader />
			<div className="container mx-auto p-4 mt-20">{children}</div>
		</>
	);
}
