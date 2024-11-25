"use client";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Check, Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

// ----------------------------------------------------------------------

interface CopyCodeProps {
	text: string;
	className?: string;
}

export default function CopyCode({ text, className }: CopyCodeProps) {
	const { isCopied, copyToClipboard } = useCopyToClipboard();

	if (isCopied) {
		return (
			<Button variant="outline" className={cn("lg:size-7 lg:p-0 size-4 text-input bg-transparent", className)}>
				<Check />
			</Button>
		);
	}
	return (
		<Button
			variant="outline"
			className={cn("lg:size-7 p-0 size-6 [&>svg]:size-4 [&>svg]:stroke-foreground text-input hover:outline-0 bg-transparent", className)}
			onClick={() => copyToClipboard(text)}>
			<Clipboard />
		</Button>
	);
}
