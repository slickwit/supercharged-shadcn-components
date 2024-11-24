import { allDocs } from "contentlayer/generated";
import AppHeader from "@/layout/app-header";
import { Mdx } from "@/components/mdx";

export default function Home() {
	const doc = allDocs.find((d) => d._id === "docs/getting-started.mdx");

	if (!doc) {
		return null;
	}

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
			<div className="max-w-6xl">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
					<p className="text-muted-foreground">{doc.description}</p>
				</div>
				<Mdx code={doc.body.code} />
			</div>
		</>
	);
}
