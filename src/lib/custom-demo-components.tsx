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
