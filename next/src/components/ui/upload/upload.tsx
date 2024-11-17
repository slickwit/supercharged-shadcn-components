import { cn } from "@/lib/utils";
import { Button, IconButton } from "@/components/ui/buttons";
import { CloudUpload, X } from "lucide-react";
import { type Accept, type DropzoneOptions, useDropzone } from "react-dropzone";
import { type HTMLAttributes } from "react";
import { fileFormat } from "@/components/ui/file-thumbnail";

import { ALLOWED_PREVIEW, type FileWithPathAndPreview } from "./utils";
import RejectionFiles from "./rejection-files";
import MultiFilePreview from "./preview-multi-file";
import SinglePreview from "./preview-single-file";

// ----------------------------------------------------------------------

interface UploadProps extends DropzoneOptions {
	disabled?: boolean;
	error?: boolean;
	helperText?: React.ReactNode;
	accept?: Accept;
	className?: Pick<HTMLAttributes<HTMLDivElement>, "className">;
	multiple?: boolean;
	thumbnail?: boolean;

	file?: FileWithPathAndPreview | null | string;
	onDelete?: () => any;

	files?: FileWithPathAndPreview[] | null;
	onRemove?: (file: FileWithPathAndPreview | string, index: number) => any;
	onRemoveAll?: () => any;
	onUpload?: () => void;
}

export function Upload(props: UploadProps) {
	const {
		disabled,
		multiple = false,
		error,
		helperText,
		//
		file,
		onDelete,
		//
		files,
		thumbnail = false,
		onUpload,
		onRemove,
		onRemoveAll,
		className,
		...other
	} = props;

	const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
		multiple,
		disabled,
		...other,
	});

	const hasError = isDragReject || !!error;
	const hasFile = !!file && !multiple;
	const hasFiles = !!files && multiple && !!files.length;

	const isFileAllowedPreview = !hasFile ? false : ALLOWED_PREVIEW.includes(fileFormat(typeof file === "string" ? file : file.name));

	const removeSinglePreview = hasFile && isFileAllowedPreview && !!onDelete && (
		<IconButton size="xs" onClick={onDelete} className="top-4 right-4 z-10 absolute text-white bg-gray-500/70 hover:bg-gray-500/50">
			<X width={18} />
		</IconButton>
	);

	const renderMultiPreview = hasFiles && multiple && (
		<>
			<div className="my-6 space-y-3">
				<MultiFilePreview files={files} thumbnail={thumbnail} onRemove={onRemove} />
			</div>
			<div className="flex justify-end gap-2.5">
				{!!onRemoveAll && (
					<Button variant="outline" size="sm" onClick={onRemoveAll}>
						Remove All
					</Button>
				)}
				{!!onUpload && (
					<Button size="sm" variant="contained" onClick={onUpload}>
						<CloudUpload className="mr-1" />
						Upload
					</Button>
				)}
			</div>
		</>
	);

	return (
		<div className={cn("w-full relative", className)}>
			<div
				{...getRootProps()}
				className={cn(
					"min-h-[300px] outline-none rounded-lg cursor-pointer overflow-hidden relative bg-gray-400/12 border border-dashed border-gray-500/20 transition-all hover:opacity-80",
					{
						"opacity-80": isDragActive,
						"pointer-events-none opacity-50": disabled,
						"text-error bg-error bg-error/12": hasError || (!!fileRejections.length && files?.length === 0),
						"h-[400px] bg-transparent": hasFile && isFileAllowedPreview,
					},
				)}>
				<input {...getInputProps()} />
				<SinglePreview file={file} multiple={multiple} />
			</div>

			{removeSinglePreview}

			{!!fileRejections.length && <RejectionFiles fileRejections={fileRejections} />}

			{hasFile && !isFileAllowedPreview && (
				<div className="my-4 space-y-3">
					<MultiFilePreview files={[file] as FileWithPathAndPreview[] | string[]} onRemove={onDelete} thumbnail={thumbnail} />
				</div>
			)}

			{renderMultiPreview}

			{!!helperText && helperText}
		</div>
	);
}
