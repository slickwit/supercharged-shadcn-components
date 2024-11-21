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
};
