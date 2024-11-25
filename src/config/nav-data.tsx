import { useMemo } from "react";
import SvgColor from "@/components/ui/svg-color";

const icon = (name: string) => (
	<SvgColor src={`/assets/icons/nav/${name}.svg`} className="flex-shrink-0 w-5 h-5 transition-[width, height] sidebar-icon" />
);

const ICONS = {
	buttons: icon("buttons"),
	inputs: icon("inputs"),
	form: icon("form"),
	upload: icon("upload"),
};

export type TItems = {
	title: string;
	name: string;
	url: string;
	icon?: JSX.Element;
	items?: {
		title: string;
		url: string;
		name: string;
	}[];
};

export type TNavData = {
	title: string;
	items: TItems[];
};

export const useNavData = () => {
	return useMemo<TNavData[]>(
		() => [
			{
				title: "Getting Started",
				items: [
					{
						title: "Introduction",
						name: "getting-started",
						url: "/docs/getting-started",
					},
				],
			},
			{
				title: "Components",
				items: [
					{
						title: "Buttons",
						name: "buttons",
						url: "/docs/components/buttons",
						icon: ICONS.buttons,
						items: [
							{
								title: "Button",
								name: "button",
								url: "/docs/components/buttons/button",
							},
							{
								title: "Floating Button",
								name: "floating-button",
								url: "/docs/components/buttons/floating-button",
							},
						],
					},
					{
						title: "Inputs",
						name: "inputs",
						url: "/docs/components/inputs",
						icon: ICONS.inputs,
						items: [
							{
								title: "Floating Input",
								name: "floating-input",
								url: "/docs/components/inputs/floating-input",
							},
							{
								title: "Floating Textarea",
								name: "floating-textarea",
								url: "/docs/components/inputs/floating-textarea",
							},
							{
								title: "Date Picker",
								name: "date-picker",
								url: "/docs/components/inputs/date-picker",
							},
							{
								title: "Date Range Picker",
								name: "date-range-picker",
								url: "/docs/components/inputs/date-range-picker",
							},
							{
								title: "Time Picker",
								name: "time-picker",
								url: "/docs/components/inputs/time-picker",
							},
						],
					},
					{
						title: "Upload",
						name: "upload",
						url: "/docs/components/upload",
						icon: ICONS.upload,
					},
					{
						title: "Hook Form",
						name: "form",
						url: "/docs/components/hook-form",
						icon: ICONS.form,
						items: [
							{
								title: "Form Provider",
								name: "hook-form",
								url: "/docs/components/form/hook-form",
							},
							{
								title: "Checkbox",
								name: "rhf-checkbox",
								url: "/docs/components/form/rhf-checkbox",
							},
							{
								title: "Combobox",
								name: "rhf-combobox",
								url: "/docs/components/form/rhf-combobox",
							},
							{
								title: "Date Picker",
								name: "rhf-date-picker",
								url: "/docs/components/form/rhf-date-picker",
							},
							{
								title: "Time Picker",
								name: "rhf-time-picker",
								url: "/docs/components/form/rhf-time-picker",
							},
							{
								title: "Floating Input",
								name: "rhf-floating-input",
								url: "/docs/components/form/rhf-floating-input",
							},
							{
								title: "Input",
								name: "rhf-input",
								url: "/docs/components/form/rhf-input",
							},
							{
								title: "Multi Select",
								name: "rhf-multi-select",
								url: "/docs/components/form/rhf-multi-select",
							},
							{
								title: "Select",
								name: "rhf-select",
								url: "/docs/components/form/rhf-select",
							},
							{
								title: "Radio Group",
								name: "rhf-radio-group",
								url: "/docs/components/form/rhf-radio-group",
							},
							{
								title: "Textarea",
								name: "rhf-textarea",
								url: "/docs/components/form/rhf-textarea",
							},
							{
								title: "Upload",
								name: "rhf-upload",
								url: "/docs/components/form/rhf-upload",
							},
							{
								title: "Upload Multiple",
								name: "rhf-upload-multiple",
								url: "/docs/components/form/rhf-upload-multiple",
							},
						],
					},
				],
			},
		],
		[],
	);
};
