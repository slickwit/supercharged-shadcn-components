import { Registry } from "./schema";

export const ui: Registry = [
	{
		name: "floating-label-button",
		type: "registry:ui",
		files: ["ui/buttons/floating-label-button.tsx", "ui/buttons/variants.ts"],
	},
	{
		name: "floating-label-input",
		type: "registry:ui",
		registryDependencies: ["label"],
		files: ["ui/inputs/base/floating-input.tsx", "ui/inputs/base/floating-label.tsx", "ui/inputs/floating-label-input.tsx"],
	},
	{
		name: "floating-label-textarea",
		type: "registry:ui",
		registryDependencies: ["label"],
		files: ["ui/inputs/base/floating-label.tsx", "ui/inputs/floating-label-textarea.tsx"],
	},
];
