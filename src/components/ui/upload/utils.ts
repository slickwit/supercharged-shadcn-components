import type { FileWithPath } from "react-dropzone";

// ----------------------------------------------------------------------

export interface FileWithPathAndPreview extends FileWithPath {
	preview: string;
}

export const ALLOWED_PREVIEW = ["image", "pdf", "excel"];
