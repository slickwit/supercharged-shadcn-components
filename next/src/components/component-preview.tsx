"use client";
import * as React from "react";
import { demoComponents } from "@/lib/demo-components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyCode from "@/components/copy-code";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
}

export function ComponentPreview({ name, children }: ComponentPreviewProps) {
	const Code = (React.Children.toArray(children) as React.ReactElement[])[0];

	const Preview = React.useMemo(() => {
		const Component = demoComponents[name]?.component;

		if (!Component) {
			return (
				<p className="text-sm text-muted-foreground">
					Component <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{name}</code> not found.
				</p>
			);
		}

		return <Component />;
	}, [name]);

	const codeString = React.useMemo(() => {
		if (typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined") {
			const [RawCode] = React.Children.toArray(Code.props.children) as React.ReactElement[];

			return RawCode?.props?.value || RawCode?.props?.__rawString__ || null;
		}
	}, [Code]);

	return (
		<div>
			<div className="mt-12 mb-8 max-w-screen-lg">
				<Tabs defaultValue="preview">
					<TabsList>
						<TabsTrigger value="preview">Preview</TabsTrigger>
						<TabsTrigger value="code">Code</TabsTrigger>
					</TabsList>
					<TabsContent value="preview" className="border border-input rounded-md p-3">
						<div className="w-full flex justify-end">
							<CopyCode text={codeString} />
						</div>
						<div className="min-h-80 flex items-center justify-center flex-wrap gap-y-3 max-w-[680px] w-full mx-auto pb-7">
							<React.Suspense
								fallback={
									<div className="flex w-full items-center justify-center text-sm text-muted-foreground">Loading...</div>
								}>
								{Preview}
							</React.Suspense>
						</div>
					</TabsContent>
					<TabsContent value="code" className="border border-input rounded-md relative">
						<CopyCode text={codeString} className="absolute right-5 top-3" />
						{Code}
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
