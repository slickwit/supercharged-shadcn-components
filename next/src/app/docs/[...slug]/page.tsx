import { Mdx } from "@/components/mdx";
import { allDocs } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// ----------------------------------------------------------------------

interface DocsPageProps {
	params: {
		slug: string[];
	};
}

async function getDocFromParams({ params }: DocsPageProps) {
	const slug = params.slug?.join("/") || "";
	const doc = allDocs.find((doc) => doc.slugAsParams === slug);

	if (!doc) {
		return null;
	}

	return doc;
}

export default async function DocsPage({ params }: DocsPageProps) {
	const doc = await getDocFromParams({ params });

	if (!doc) {
		notFound();
	}

	return (
		<div className="lg:max-w-[70%] pb-12">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
				<p className="text-muted-foreground">{doc.description}</p>
			</div>
			<Mdx code={doc.body.code} />
		</div>
	);
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
	const doc = await getDocFromParams({ params });

	if (!doc) {
		return {};
	}

	return {
		title: doc.title,
		description: doc.description,
	};
}
