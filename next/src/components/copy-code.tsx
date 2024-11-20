"use client";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "./ui/buttons";
import { Check, Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------

interface CopyCodeProps {
	text: string;
	className?: string;
}

export default function CopyCode({ text, className }: CopyCodeProps) {
	const { isCopied, copyToClipboard } = useCopyToClipboard();

	if (isCopied) {
		return (
			<Button
				variant="outline"
				className={cn(
					"size-7 text-input p-0 hover:bg-current hover:outline-0 dark:hover:bg-transparent dark:hover:outline-0 border-input",
					className,
				)}>
				<Check />
			</Button>
		);
	}
	return (
		<Button
			variant="outline"
			className={cn(
				"size-7 text-input p-0 hover:bg-current hover:outline-0 dark:hover:bg-transparent dark:hover:outline-0 border-input",
				className,
			)}
			onClick={() => copyToClipboard(text)}>
			<Clipboard />
		</Button>
	);
}
