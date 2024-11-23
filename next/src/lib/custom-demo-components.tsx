import { lazy } from "react";

// ----------------------------------------------------------------------

export const customDemoComponents: Record<string, any> = {
	"upload-demo": {
		component: lazy(() => import("@/components/demo/upload")),
		path: "src/components/demo/upload.tsx",
	},
};
