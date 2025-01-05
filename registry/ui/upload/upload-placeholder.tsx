import { CloudUpload } from "lucide-react";

// ----------------------------------------------------------------------

export default function UploadPlaceholder({ multiple }: { multiple: boolean }) {
	return (
		<div className="flex flex-col flex-wrap items-center justify-center space-y-6 h-[240px] px-2">
			<div className="flex items-center justify-center">
				<CloudUpload className="stroke-gray-600 lg:size-20 size-16" />
			</div>
			<div className="flex flex-col space-y-2 text-center">
				<h6 className="text-xl font-semibold">Drop or select{multiple ? " multiple " : " "}file</h6>
				<p className="text-sm text-muted-foreground">
					Drop files here or click
					<span className="mx-1 text-primary underline">browse</span>
					thorough your machine
				</p>
			</div>
		</div>
	);
}
