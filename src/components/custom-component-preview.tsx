"use client";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyCode from "@/components/copy-code";

interface CustomComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	source: React.JSX.Element;
	rawSource: string;
}

export function CustomComponentPreview({ source, children, rawSource }: CustomComponentPreviewProps) {
	return (
		<div>
			<div className="mt-12 mb-8 max-w-screen-lg">
				<Tabs defaultValue="preview">
					<TabsList>
						<TabsTrigger value="preview">Preview</TabsTrigger>
						<TabsTrigger value="code">Code</TabsTrigger>
					</TabsList>
					<TabsContent value="preview" className="border border-input rounded-md p-3 max-h-[600px] overflow-auto">
						<div className="w-full flex justify-end">
							<CopyCode text={rawSource} />
						</div>
						<div className="min-h-80 flex items-center justify-center flex-wrap gap-y-3 w-full mx-auto lg:px-10 pb-7">
							<React.Suspense
								fallback={
									<div className="flex w-full items-center justify-center text-sm text-muted-foreground">Loading...</div>
								}>
								{children}
							</React.Suspense>
						</div>
					</TabsContent>
					<TabsContent
						value="code"
						className="border border-input rounded-md relative [&_code]:relative [&_code]:rounded [&_code]:font-mono [&_code]:text-sm [&_pre]:max-h-[650px] [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:pl-3 [&_pre]:py-4 [&_pre]:bg-[#24292e]">
						<CopyCode text={rawSource} className="absolute right-5 top-3 z-40" />
						{source}
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
