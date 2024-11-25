"use client";
import * as React from "react";
import { Upload, type UploadProps } from "@/components/ui/upload/upload";

// ----------------------------------------------------------------------

export default function FloatingTextareaDemo() {
	const [multiFile, setMultiFile] = React.useState<UploadProps["files"]>([]);
	const [singleFile, setSingleFile] = React.useState<UploadProps["file"]>(null);

	const handleSingleDrop = React.useCallback(
		(acceptedFiles: File[]) => {
			if (acceptedFiles.length === 1) {
				const file = Object.assign(acceptedFiles[0], {
					preview: URL.createObjectURL(acceptedFiles[0]),
				});
				setSingleFile(file);
			}
		},
		[setSingleFile],
	);

	const handleMultiDrop = React.useCallback(
		(acceptedFiles: File[]) => {
			const files = acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				}),
			);
			setMultiFile(files);
		},
		[setMultiFile],
	);

	const handleRemove = (_file: UploadProps["file"], index: number) => {
		if (!!multiFile) {
			const newValues = multiFile.toSpliced(index, 1);
			setMultiFile(newValues);
		}
	};

	return (
		<div className="flex flex-col gap-y-5 lg:max-w-[95%] w-full">
			<div>
				<h3 className="font-semibold leading-none tracking-tight mb-2">Single Upload:</h3>
				<Upload file={singleFile} onDrop={handleSingleDrop} onDelete={() => setSingleFile(null)} onRemove={() => setSingleFile(null)} />
			</div>
			<div>
				<h3 className="font-semibold leading-none tracking-tight mb-2">Multiple Upload:</h3>
				<Upload files={multiFile} multiple onDrop={handleMultiDrop} onRemove={handleRemove} />
			</div>
			<div>
				<h3 className="font-semibold leading-none tracking-tight mb-2">With error:</h3>
				<Upload error />
				<p className="text-sm ml-1.5 mt-0.5 text-error">Invalid file format</p>
			</div>
		</div>
	);
}
