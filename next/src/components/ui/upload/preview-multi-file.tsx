import type { FileWithPathAndPreview } from "./utils";

import { m, AnimatePresence } from "framer-motion";
import { varFade } from "@/components/ui/animate";
import FileThumbnail, { fileData } from "@/components/ui/file-thumbnail";
import { IconButton } from "@/components/ui/buttons";
import { fData } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// ----------------------------------------------------------------------

interface MultiFilePreviewProps {
	thumbnail?: boolean;
	files: FileWithPathAndPreview[] | string[];
	onRemove?: (file: FileWithPathAndPreview | string, index: number) => any;
	className?: string;
}

export default function MultiFilePreview({ thumbnail, files, onRemove, className }: MultiFilePreviewProps) {
	return (
		<AnimatePresence initial={false}>
			{files?.map((file, idx) => {
				const { name = "", size = 0 } = fileData(file);

				const isNotFormatFile = typeof file === "string";

				if (thumbnail) {
					return (
						<m.div
							key={idx}
							{...varFade().inUp}
							className="inline-flex items-center justify-center m-1 w-20 h-20 rounded-sm overflow-hidden relative border border-gray-800/12 dark:border-gray-800/80">
							<FileThumbnail tooltip imageView file={file} className="absolute" />

							{!!onRemove && (
								<IconButton
									size="xs"
									onClick={() => onRemove(file, idx)}
									className="absolute p-1 top-1 right-1 text-white bg-gray-900/60 hover:bg-gray-600/55">
									<X width={14} />
								</IconButton>
							)}
						</m.div>
					);
				}

				return (
					<m.div
						key={idx}
						{...varFade().inUp}
						className={cn(
							"space-x-3 flex flex-row items-center py-3.5 px-3 rounded-lg border border-gray-900/15 dark:border-gray-600/55",
							className,
						)}>
						<FileThumbnail file={file} />

						<div className="flex justify-start items-center relative w-full">
							<div className="flex-1 min-w-0">
								<p className="text-sm block">{isNotFormatFile ? file : name}</p>
								<p className="text-xs block text-muted-foreground">{isNotFormatFile ? "" : fData(size)}</p>
							</div>
						</div>

						{!!onRemove && (
							<IconButton size="xs" onClick={() => onRemove(file, idx)}>
								<X width={16} />
							</IconButton>
						)}
					</m.div>
				);
			})}
		</AnimatePresence>
	);
}
