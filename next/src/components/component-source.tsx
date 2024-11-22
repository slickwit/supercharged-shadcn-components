import * as React from "react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useBoolean } from "@/hooks/use-boolean";
import { Button } from "@/components/ui/buttons/button";
import CopyCode from "./copy-code";

// ----------------------------------------------------------------------

interface ComponentSourceProps {
	children?: React.ReactNode;
	className?: string;
	filePath?: string;
}

export function ComponentSource({ children, className, filePath }: ComponentSourceProps) {
	const Code = (React.Children.toArray(children) as React.ReactElement[])[0];
	const open = useBoolean();

	return (
		<div className="relative">
			<div className="absolute right-2.5 top-1.5 flex items-center gap-x-2 z-[60]">
				{!!filePath && <span className="text-xs italic text-gray-400">{filePath}</span>}
				{!!Code?.props?.__rawString__ && <CopyCode className="size-6" text={Code?.props?.__rawString__} />}
			</div>
			<Collapsible open={open.value} onOpenChange={open.setValue}>
				<div className={cn("relative overflow-hidden", className)}>
					<CollapsibleContent forceMount className={cn("overflow-hidden", !open.value && "max-h-32")}>
						<div className={cn(!open.value ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]")}>{children}</div>
					</CollapsibleContent>
					<div
						className={cn(
							"absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2",
							open.value ? "inset-x-0 bottom-0 h-12" : "inset-0",
						)}>
						<CollapsibleTrigger asChild>
							<Button variant="contained" color="default" className="h-8 text-xs">
								{open.value ? "Collapse" : "View Code"}
							</Button>
						</CollapsibleTrigger>
					</div>
				</div>
			</Collapsible>
		</div>
	);
}
