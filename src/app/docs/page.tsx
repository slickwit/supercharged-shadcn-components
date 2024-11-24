import AppHeader from "@/layout/app-header";

export default function Home() {
	const links = [
		{
			name: "Docs",
			url: "/docs/getting-started",
		},
		{
			name: "Getting Started",
		},
	];

	return (
		<>
			<AppHeader links={links} />
			<div className="container mx-auto p-4 mt-16"></div>
		</>
	);
}
