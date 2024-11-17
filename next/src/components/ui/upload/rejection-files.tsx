import type { FileRejection } from "react-dropzone";
import type { FileWithPathAndPreview } from "./utils";

import { fData } from "@/lib/format-number";
import { fileData } from "@/components/ui/file-thumbnail";

// ----------------------------------------------------------------------

export default function RejectionFiles({ fileRejections }: { fileRejections: readonly FileRejection[] }) {
	return (
		<div className="py-2 px-4 mt-6 rounded-lg border border-dashed border-error bg-error/12 text-left">
			{fileRejections.map(({ file, errors }) => {
				const { path, size } = fileData(file as FileWithPathAndPreview);
				return (
					<div key={path} className="my-1">
						<p className="text-common text-sm font-medium text-nowrap text-ellipsis overflow-hidden">
							{path}
							{size ? ` - ${fData(size)}` : ""}
						</p>
						{errors.map((err) => (
							<span key={err.code} className="text-xs">
								- {err.message}
							</span>
						))}
					</div>
				);
			})}
		</div>
	);
}
