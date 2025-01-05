import type { FileWithPath } from "react-dropzone";

// ----------------------------------------------------------------------

export interface FileWithPathAndPreview extends FileWithPath {
	preview: string;
	name: string;
}

export const ALLOWED_PREVIEW = ["image", "pdf", "excel"];
