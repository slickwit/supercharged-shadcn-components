import type { MouseEventHandler } from "react";
import type { FileWithPathAndPreview } from "@/components/ui/upload/utils";
import { cn } from "@/lib/utils";
import { fileData, fileThumb, fileFormat } from "./utils";
import DownloadButton from "./download-button";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// ----------------------------------------------------------------------

interface FileThumbnailProps {
	file: string | FileWithPathAndPreview;
	tooltip?: boolean;
	imageView?: boolean;
	onDownload?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

export default function FileThumbnail({ file, tooltip, imageView, onDownload, className }: FileThumbnailProps) {
	const { name = "", path = "", preview = "" } = fileData(file);

	const format = fileFormat(path || preview);

	const renderContent =
		format === "image" && imageView ? (
			<Image alt="image preview" src={preview} fill className={cn("w-full h-full flex-shrink-0 object-cover", className)} />
		) : (
			<Image alt="image preview" src={fileThumb(format)} width={32} height={32} className={cn("flex-shrink-0", className)} />
		);

	if (tooltip) {
		return (
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<span className="flex items-center justify-center w-fit h-[inherit]">
							{renderContent}
							{onDownload && <DownloadButton onDownload={onDownload} />}
						</span>
					</TooltipTrigger>
					<TooltipContent>
						<span>{name}</span>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);
	}

	return (
		<>
			{renderContent}
			{onDownload && <DownloadButton onDownload={onDownload} />}
		</>
	);
}
