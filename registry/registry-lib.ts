import { Registry } from "./schema";

export const lib: Registry = [
	{
		name: "change-case",
		type: "registry:lib",
		files: ["lib/change-case.ts"],
	},
	{
		name: "format-number",
		type: "registry:lib",
		files: ["lib/format-number.ts"],
	},
	{
		name: "format-time",
		type: "registry:lib",
		files: ["lib/format-time.ts"],
	},
];
