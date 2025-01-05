import { Registry } from "./schema";

export const ui: Registry = [
	{
		name: "button",
		type: "registry:ui",
		dependencies: ["@radix-ui/react-slot"],
		files: ["ui/buttons/button.tsx"],
	},
	{
		name: "icon-button",
		type: "registry:ui",
		dependencies: ["@radix-ui/react-slot"],
		files: ["ui/buttons/icon-button.tsx", "ui/buttons/variants.ts"],
	},
	{
		name: "floating-label-button",
		type: "registry:ui",
		files: ["ui/buttons/floating-label-button.tsx", "ui/buttons/variants.ts"],
	},
	{
		name: "chip",
		type: "registry:ui",
		files: ["ui/chip.tsx"],
	},
	{
		name: "autocomplete",
		type: "registry:ui",
		registryDependencies: ["popover"],
		dependencies: ["use-debounce"],
		files: [
			"ui/autocomplete.tsx",
			"hooks/use-boolean.tsx",
			// floating-label-input dependencies
			"ui/inputs/base/floating-input.tsx",
			"ui/inputs/base/floating-label.tsx",
			"ui/inputs/floating-label-input.tsx",
		],
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
		registryDependencies: ["label", "textarea"],
		files: ["ui/inputs/base/floating-label.tsx", "ui/inputs/floating-label-textarea.tsx"],
	},
	{
		name: "date-picker",
		type: "registry:ui",
		dependencies: ["date-fns", "numeral"],
		registryDependencies: ["calendar", "popover"],
		files: [
			"ui/date/date-picker.tsx",
			// icon-button dependencies
			"ui/buttons/icon-button.tsx",
			"ui/buttons/variants.ts",
			// floating-label-button dependencies
			"ui/buttons/floating-label-button.tsx",
			"ui/buttons/variants.ts",
		],
	},
	{
		name: "date-range",
		type: "registry:ui",
		dependencies: ["date-fns"],
		registryDependencies: ["calendar", "popover"],
		files: [
			"ui/date/date-range.tsx",
			// icon-button dependencies
			"ui/buttons/icon-button.tsx",
			"ui/buttons/variants.ts",
			// floating-label-button dependencies
			"ui/buttons/floating-label-button.tsx",
			"ui/buttons/variants.ts",
			// lib dependencies
			"lib/format-time.ts",
		],
	},
	{
		name: "time-picker",
		type: "registry:ui",
		registryDependencies: ["input", "label", "popover"],
		files: [
			"ui/date/time-picker.tsx",
			// icon-button dependencies
			"ui/buttons/icon-button.tsx",
			"ui/buttons/variants.ts",
			// floating-label-button dependencies
			"ui/buttons/floating-label-button.tsx",
			"ui/buttons/variants.ts",
			// lib dependencies
			"ui/date/time-picker-utils.ts",
		],
	},
	{
		name: "upload",
		type: "registry:ui",
		registryDependencies: ["tooltip", "button"],
		dependencies: ["react-dropzone@^14.3.5", "framer-motion", "numeral"],
		files: [
			//button dependencies
			"ui/buttons/button.tsx",
			// icon-button dependencies
			"ui/buttons/icon-button.tsx",
			"ui/buttons/variants.ts",
			// upload
			"ui/upload/preview-multi-file.tsx",
			"ui/upload/preview-single-file.tsx",
			"ui/upload/rejection-files.tsx",
			"ui/upload/upload-placeholder.tsx",
			"ui/upload/upload.tsx",
			"ui/upload/utils.ts",
			// thumbnail dependencies
			"ui/file-thumbnail/file-thumbnail.tsx",
			"ui/file-thumbnail/utils.ts",
			"ui/file-thumbnail/download-button.tsx",
			// lib dependencies
			"lib/format-number.ts",
		],
	},
	// HOOK FORM
	{
		name: "form-provider",
		type: "registry:ui",
		dependencies: ["react-hook-form"],
		files: ["ui/hook-form/form-provider.tsx", "ui/hook-form/index.tsx"],
	},
	{
		name: "rhf-autocomplete",
		type: "registry:ui",
		registryDependencies: ["popover"],
		dependencies: ["use-debounce", "react-hook-form"],
		files: [
			// autocomplete
			"ui/autocomplete.tsx",
			"hooks/use-boolean.tsx",
			// floating-label-input dependencies
			"ui/inputs/base/floating-input.tsx",
			"ui/inputs/base/floating-label.tsx",
			"ui/inputs/floating-label-input.tsx",
			//
			"ui/hook-form/rhf-autocomplete.tsx",
		],
	},
	{
		name: "rhf-checkbox",
		type: "registry:ui",
		registryDependencies: ["checkbox", "label"],
		dependencies: ["react-hook-form"],
		files: [
			"ui/hook-form/rhf-checkbox.tsx",
			// lib
			"lib/change-case.ts",
		],
	},
	{
		name: "rhf-combobox",
		type: "registry:ui",
		registryDependencies: ["popover", "command", "dropdown-menu"],
		dependencies: ["react-hook-form"],
		files: [
			"ui/hook-form/rhf-combobox.tsx",
			// floating-label-button dependencies
			"ui/buttons/floating-label-button.tsx",
			"ui/buttons/variants.ts",
		],
	},
	{
		name: "rhf-date-picker",
		type: "registry:ui",
		dependencies: ["date-fns", "numeral", "react-hook-form"],
		registryDependencies: ["calendar", "popover"],
		files: [
			//
			"ui/hook-form/rhf-date-picker.tsx",
			// date-picker
			"ui/date/date-picker.tsx",
			// icon-button dependencies
			"ui/buttons/icon-button.tsx",
			"ui/buttons/variants.ts",
			// floating-label-button dependencies
			"ui/buttons/floating-label-button.tsx",
			"ui/buttons/variants.ts",
		],
	},
	{
		name: "rhf-time-picker",
		type: "registry:ui",
		dependencies: ["react-hook-form"],
		registryDependencies: ["input", "label", "popover"],
		files: [
			"ui/hook-form/rhf-time-picker.tsx",
			// time-picker
			"ui/date/time-picker.tsx",
			// icon-button dependencies
			"ui/buttons/icon-button.tsx",
			"ui/buttons/variants.ts",
			// floating-label-button dependencies
			"ui/buttons/floating-label-button.tsx",
			"ui/buttons/variants.ts",
			// lib dependencies
			"ui/date/time-picker-utils.ts",
		],
	},
	{
		name: "rhf-floating-input",
		type: "registry:ui",
		dependencies: ["react-hook-form"],
		registryDependencies: ["label"],
		files: [
			"ui/hook-form/rhf-floating-input.tsx",
			// floating-label-input dependencies
			"ui/inputs/base/floating-input.tsx",
			"ui/inputs/base/floating-label.tsx",
			"ui/inputs/floating-label-input.tsx",
		],
	},
	{
		name: "rhf-input",
		type: "registry:ui",
		dependencies: ["react-hook-form"],
		files: ["ui/hook-form/rhf-input.tsx", "ui/inputs/base/floating-input.tsx"],
	},
	{
		name: "rhf-multi-select",
		type: "registry:ui",
		dependencies: ["react-hook-form"],
		registryDependencies: ["popover"],
		files: [
			"ui/hook-form/rhf-multi-select.tsx",
			// floating-label-input dependencies
			"ui/inputs/base/floating-input.tsx",
			"ui/inputs/base/floating-label.tsx",
			"ui/inputs/floating-label-input.tsx",
		],
	},
	{
		name: "rhf-select",
		type: "registry:ui",
		dependencies: ["react-hook-form", "@radix-ui/react-select"],
		registryDependencies: ["select"],
		files: [
			"ui/hook-form/rhf-select.tsx",
			// floating-label-input dependencies
			"ui/inputs/base/floating-input.tsx",
			"ui/inputs/base/floating-label.tsx",
			"ui/inputs/floating-label-input.tsx",
		],
	},
	{
		name: "rhf-radio-group",
		type: "registry:ui",
		dependencies: ["react-hook-form"],
		registryDependencies: ["radio-group"],
		files: ["ui/hook-form/rhf-radio-group.tsx"],
	},
	{
		name: "rhf-textarea",
		type: "registry:ui",
		dependencies: ["react-hook-form"],
		registryDependencies: ["label"],
		files: [
			"ui/hook-form/rhf-textarea.tsx",
			// floating-textarea dependencies
			"ui/inputs/base/floating-label.tsx",
			"ui/inputs/floating-label-textarea.tsx",
		],
	},
	{
		name: "rhf-upload",
		type: "registry:ui",
		registryDependencies: ["tooltip", "button"],
		dependencies: ["react-dropzone@^14.3.5", "framer-motion", "numeral", "react-hook-form"],
		files: [
			"ui/hook-form/rhf-upload.tsx",
			//button dependencies
			"ui/buttons/button.tsx",
			// icon-button dependencies
			"ui/buttons/icon-button.tsx",
			"ui/buttons/variants.ts",
			// upload
			"ui/upload/preview-multi-file.tsx",
			"ui/upload/preview-single-file.tsx",
			"ui/upload/rejection-files.tsx",
			"ui/upload/upload-placeholder.tsx",
			"ui/upload/upload.tsx",
			"ui/upload/utils.ts",
			// thumbnail dependencies
			"ui/file-thumbnail/file-thumbnail.tsx",
			"ui/file-thumbnail/utils.ts",
			"ui/file-thumbnail/download-button.tsx",
			// lib dependencies
			"lib/format-number.ts",
		],
	},
	{
		name: "rhf-upload-multiple",
		type: "registry:ui",
		registryDependencies: ["tooltip", "button"],
		dependencies: ["react-dropzone@^14.3.5", "framer-motion", "numeral", "react-hook-form"],
		files: [
			"ui/hook-form/rhf-upload-multiple.tsx",
			//button dependencies
			"ui/buttons/button.tsx",
			// icon-button dependencies
			"ui/buttons/icon-button.tsx",
			"ui/buttons/variants.ts",
			// upload
			"ui/upload/preview-multi-file.tsx",
			"ui/upload/preview-single-file.tsx",
			"ui/upload/rejection-files.tsx",
			"ui/upload/upload-placeholder.tsx",
			"ui/upload/upload.tsx",
			"ui/upload/utils.ts",
			// thumbnail dependencies
			"ui/file-thumbnail/file-thumbnail.tsx",
			"ui/file-thumbnail/utils.ts",
			"ui/file-thumbnail/download-button.tsx",
			// lib dependencies
			"lib/format-number.ts",
		],
	},
];
