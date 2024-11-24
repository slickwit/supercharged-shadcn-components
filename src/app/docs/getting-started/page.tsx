import { Mdx } from "@/components/mdx";
import { allDocs } from "contentlayer/generated";

// ----------------------------------------------------------------------

export default function GettingStartedPage() {
	const doc = allDocs.find((d) => d._id === "docs/getting-started.mdx");

	if (!doc) {
		return null;
	}

	return (
		<div className="max-w-6xl">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
				<p className="text-muted-foreground">{doc.description}</p>
			</div>
			<Mdx code={doc.body.code} />
		</div>
	);
}
