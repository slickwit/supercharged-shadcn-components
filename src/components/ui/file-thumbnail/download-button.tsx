import type { MouseEventHandler } from "react";
import { IconButton } from "@/components/ui/buttons/icon-button";
import { CircleArrowDown } from "lucide-react";

// ----------------------------------------------------------------------

export default function DownloadButton({ onDownload }: { onDownload?: MouseEventHandler<HTMLButtonElement> }) {
	return (
		<IconButton
			onClick={onDownload}
			className="inline-flex p-0 inset-0 w-full h-full absolute rounded-[unset] justify-center bg-gray-600 text-white transition-opacity hover:opacity-100 hover:blur-sm">
			<CircleArrowDown width={24} />
		</IconButton>
	);
}
