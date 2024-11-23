import * as React from "react";
import { Mdx } from "@/components/mdx";
import { customDemoComponents } from "@/lib/custom-demo-components";
import { allDocs } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import { CustomComponentPreview } from "@/components/custom-component-preview";
import { Code } from "./custome-code";

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
	const demo = await getDemo(doc?.demo);

	if (!doc) {
		notFound();
	}

	return (
		<div className="lg:max-w-[70%] pb-12">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
				<p className="text-muted-foreground">{doc.description}</p>
			</div>
			{!!demo && (
				<>
					<CustomComponentPreview
						rawSource={demo.source}
						source={
							<React.Suspense
								fallback={
									<div className="flex w-full items-center justify-center text-sm text-muted-foreground">Loading...</div>
								}>
								<div className="rehype">
									<Code code={demo.source} />
								</div>
							</React.Suspense>
						}>
						<React.Suspense
							fallback={<div className="flex w-full items-center justify-center text-sm text-muted-foreground">Loading...</div>}>
							<demo.Component />
						</React.Suspense>
					</CustomComponentPreview>
				</>
			)}
			<Mdx code={doc.body.code} />
		</div>
	);
}

type TDemo = {
	component: React.LazyExoticComponent<() => JSX.Element>;
	path: string;
};

async function getDemo(key: string | undefined) {
	"use server";
	if (!key) return null;
	const demo = customDemoComponents[key] as TDemo | undefined;
	if (!!demo) {
		const demoCode = await fs.readFile(demo.path, "utf8");
		return {
			Component: demo.component,
			path: demo.path,
			source: demoCode,
		};
	}
	return demo;
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
