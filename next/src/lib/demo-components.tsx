import { lazy } from "react";

// ----------------------------------------------------------------------

export const demoComponents: Record<string, any> = {
	"button-demo": {
		component: lazy(() => import("@/components/demo/button")),
		path: "src/components/demo/button.tsx",
	},
	button: {
		component: lazy(async () => ({
			default: (await import("@/components/ui/buttons/button")).Button,
		})),
		path: "src/components/ui/buttons/button.tsx",
	},

	"floating-button-demo": {
		component: lazy(() => import("@/components/demo/floating-button")),
		path: "src/components/demo/floating-button.tsx",
	},
	"floating-button": {
		component: lazy(async () => ({
			default: (await import("@/components/ui/buttons/floating-label-button")).FloatingLabelButon,
		})),
		path: "src/components/ui/buttons/floating-label-button.tsx",
	},

	"floating-input-demo": {
		component: lazy(() => import("@/components/demo/floating-input")),
		path: "src/components/demo/floating-input.tsx",
	},
	"floating-input": {
		component: lazy(async () => ({
			default: (await import("@/components/ui/inputs/floating-label-input")).FloatingLabelInput,
		})),
		path: "src/components/ui/inputs/floating-label-input.tsx",
	},
	"base-input": {
		component: lazy(async () => ({
			default: (await import("@/components/ui/inputs/base/floating-input")).FloatingInput,
		})),
		path: "src/components/ui/inputs/base/floating-input.tsx",
	},
	"base-label": {
		component: lazy(async () => ({
			default: (await import("@/components/ui/inputs/base/floating-label")).FloatingLabel,
		})),
		path: "src/components/ui/inputs/base/floating-label.tsx",
	},
	"time-picker-demo": {
		component: lazy(() => import("@/components/demo/time-picker")),
		path: "src/components/demo/time-picker.tsx",
	},
	"time-picker": {
		component: null,
		path: "src/components/ui/date/time-picker.tsx",
	},
	"time-picker-utils": {
		component: null,
		path: "src/components/ui/date/time-picker-utils.ts",
	},
	"date-picker-demo": {
		component: lazy(() => import("@/components/demo/date-picker")),
		path: "src/components/demo/date-picker.tsx",
	},
	"date-picker": {
		component: null,
		path: "src/components/ui/date/date-picker.tsx",
	},
	"date-range-picker-demo": {
		component: lazy(() => import("@/components/demo/date-range-picker")),
		path: "src/components/demo/date-range-picker.tsx",
	},
	"date-range-picker": {
		component: null,
		path: "src/components/ui/date/date-range.tsx",
	},

	"floating-textarea-demo": {
		component: lazy(() => import("@/components/demo/floating-textarea")),
		path: "src/components/demo/floating-textarea.tsx",
	},
	"floating-textarea": {
		component: lazy(async () => ({
			default: (await import("@/components/ui/inputs/floating-label-textarea")).FloatingLabelTextArea,
		})),
		path: "src/components/ui/inputs/floating-label-textarea.tsx",
	},
	upload: {
		component: null,
		path: "src/components/ui/upload/upload.tsx",
	},
	"preview-multi-file": {
		component: null,
		path: "src/components/ui/upload/preview-multi-file.tsx",
	},
	"preview-single-file": {
		component: null,
		path: "src/components/ui/upload/preview-single-file.tsx",
	},
	"rejection-files": {
		component: null,
		path: "src/components/ui/upload/rejection-files.tsx",
	},
	"upload-placeholder": {
		component: null,
		path: "src/components/ui/upload/rejection-files.tsx",
	},
	"file-thumbnail": {
		component: null,
		path: "src/components/ui/file-thumbnail/file-thumbnail.tsx",
	},
	"download-button": {
		component: null,
		path: "src/components/ui/file-thumbnail/download-button.tsx",
	},
	"file-thumbnail-utils": {
		component: null,
		path: "src/components/ui/file-thumbnail/utils.ts",
	},
	"rhf-form": {
		component: null,
		path: "src/components/ui/hook-form/form-provider.tsx",
	},
	"rhf-checkbox": {
		component: null,
		path: "src/components/ui/hook-form/rhf-checkbox.tsx",
	},
	"rhf-combobox": {
		component: null,
		path: "src/components/ui/hook-form/rhf-combobox.tsx",
	},
	"rhf-date-picker": {
		component: null,
		path: "src/components/ui/hook-form/rhf-date-picker.tsx",
	},
	"rhf-time-picker": {
		component: null,
		path: "src/components/ui/hook-form/rhf-time-picker.tsx",
	},

	"rhf-floating-input": {
		component: null,
		path: "src/components/ui/hook-form/rhf-floating-input.tsx",
	},

	"rhf-input": {
		component: null,
		path: "src/components/ui/hook-form/rhf-input.tsx",
	},

	"rhf-multi-select": {
		component: null,
		path: "src/components/ui/hook-form/rhf-multi-select.tsx",
	},

	"rhf-select": {
		component: null,
		path: "src/components/ui/hook-form/rhf-select.tsx",
	},

	"rhf-radio-group": {
		component: null,
		path: "src/components/ui/hook-form/rhf-radio-group.tsx",
	},
	"rhf-textarea": {
		component: null,
		path: "src/components/ui/hook-form/rhf-textarea.tsx",
	},
	"rhf-upload": {
		component: null,
		path: "src/components/ui/hook-form/rhf-upload.tsx",
	},
	"rhf-upload-multiple": {
		component: null,
		path: "src/components/ui/hook-form/rhf-upload-multiple.tsx",
	},
};
