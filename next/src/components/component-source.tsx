import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useBoolean } from "@/hooks/use-boolean";
import { Button } from "@/components/ui/buttons/button";

// ----------------------------------------------------------------------

interface ComponentSourceProps {
	children?: React.ReactNode;
	className?: string;
	filePath?: string;
}

export function ComponentSource({ children, className, filePath }: ComponentSourceProps) {
	const open = useBoolean();
	return (
		<Collapsible open={open.value} onOpenChange={open.setValue}>
			<div className={cn("relative overflow-hidden", className)}>
				<CollapsibleContent forceMount className={cn("overflow-hidden", !open.value && "max-h-32")}>
					{!!filePath && <span className="absolute right-0 top-0 text-xs p-1.5 italic text-gray-400">{filePath}</span>}
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
	);
}
