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
			<Button variant="outline" className={cn("size-7 text-input p-0 bg-transparent", className)}>
				<Check />
			</Button>
		);
	}
	return (
		<Button
			variant="outline"
			className={cn("size-7 text-input p-0 hover:outline-0 bg-transparent", className)}
			onClick={() => copyToClipboard(text)}>
			<Clipboard />
		</Button>
	);
}
