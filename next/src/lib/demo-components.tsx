import { lazy } from "react";

// ----------------------------------------------------------------------

export const demoComponents: Record<string, any> = {
	"button-demo": {
		component: lazy(() => import("@/components/demo/button")),
		path: "src/components/demo/button.tsx",
	},
};
