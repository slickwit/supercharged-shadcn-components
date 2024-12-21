import { lazy } from "react";

// ----------------------------------------------------------------------

export const customDemoComponents: Record<string, any> = {
	"upload-demo": {
		component: lazy(() => import("@/components/demo/upload")),
		path: "src/components/demo/upload.tsx",
	},
	"hook-form-demo": {
		component: lazy(() => import("@/components/demo/hook-form")),
		path: "src/components/demo/hook-form.tsx",
	},
	"rhf-checkbox-demo": {
		component: lazy(() => import("@/components/demo/rhf-checkbox")),
		path: "src/components/demo/rhf-checkbox.tsx",
	},
	"rhf-autocomplete-demo": {
		component: lazy(() => import("@/components/demo/rhf-autocomplete")),
		path: "src/components/demo/rhf-autocomplete.tsx",
	},
	"rhf-combobox-demo": {
		component: lazy(() => import("@/components/demo/rhf-combobox")),
		path: "src/components/demo/rhf-combobox.tsx",
	},
	"rhf-date-picker-demo": {
		component: lazy(() => import("@/components/demo/rhf-date-picker")),
		path: "src/components/demo/rhf-date-picker.tsx",
	},
	"rhf-time-picker-demo": {
		component: lazy(() => import("@/components/demo/rhf-time-picker")),
		path: "src/components/demo/rhf-time-picker.tsx",
	},
	"rhf-floating-input-demo": {
		component: lazy(() => import("@/components/demo/rhf-floating-input")),
		path: "src/components/demo/rhf-floating-input.tsx",
	},
	"rhf-input-demo": {
		component: lazy(() => import("@/components/demo/rhf-input")),
		path: "src/components/demo/rhf-input.tsx",
	},
	"rhf-multi-select-demo": {
		component: lazy(() => import("@/components/demo/rhf-multi-select")),
		path: "src/components/demo/rhf-multi-select.tsx",
	},
	"rhf-select-demo": {
		component: lazy(() => import("@/components/demo/rhf-select")),
		path: "src/components/demo/rhf-select.tsx",
	},
	"rhf-radio-group-demo": {
		component: lazy(() => import("@/components/demo/rhf-radio-group")),
		path: "src/components/demo/rhf-radio-group.tsx",
	},
	"rhf-textarea-demo": {
		component: lazy(() => import("@/components/demo/rhf-textarea")),
		path: "src/components/demo/rhf-textarea.tsx",
	},
	"rhf-upload-demo": {
		component: lazy(() => import("@/components/demo/rhf-upload")),
		path: "src/components/demo/rhf-upload.tsx",
	},
	"rhf-upload-multiple-demo": {
		component: lazy(() => import("@/components/demo/rhf-upload-multiple")),
		path: "src/components/demo/rhf-upload-multiple.tsx",
	},
};
