import { Registry } from "./schema";

export const hooks: Registry = [
	{
		name: "use-active-link",
		type: "registry:hook",
		files: ["hooks/use-active-link.ts"],
	},
	{
		name: "use-boolean",
		type: "registry:hook",
		files: ["hooks/use-boolean.tsx"],
	},
	{
		name: "use-copy-to-clipboard",
		type: "registry:hook",
		files: ["hooks/use-copy-to-clipboard.tsx"],
	},
];
