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
};
