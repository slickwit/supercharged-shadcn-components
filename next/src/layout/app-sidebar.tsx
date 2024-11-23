"use client";
import * as React from "react";
import { BookOpen, Ellipsis, SquareDot, Upload } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import Link from "next/link";
import BuyMeCoffee from "@/components/buy-me-coffee";
import Image from "next/image";

// This is sample data.
const data = {
	gettingStarted: [
		{
			title: "Introduction",
			url: "/docs/getting-started",
		},
	],
	navMain: [
		{
			title: "Buttons",
			url: "#",
			icon: SquareDot,
			isActive: true,
			items: [
				{
					title: "Button",
					url: "/docs/components/buttons/button",
				},
				{
					title: "Floating Button",
					url: "/docs/components/buttons/floating-button",
				},
			],
		},
		{
			title: "Inputs",
			url: "#",
			icon: Ellipsis,
			isActive: true,
			items: [
				{
					title: "Floating Input",
					url: "/docs/components/inputs/floating-input",
				},
				{
					title: "Floating Textarea",
					url: "/docs/components/inputs/floating-textarea",
				},
				{
					title: "Date Picker",
					url: "/docs/components/inputs/date-picker",
				},
				{
					title: "Date Range Picker",
					url: "/docs/components/inputs/date-range-picker",
				},
				{
					title: "Time Picker",
					url: "/docs/components/inputs/time-picker",
				},
			],
		},
		{
			title: "Upload",
			url: "/docs/components/upload",
			icon: Upload,
		},
		{
			title: "Hook Form",
			url: "#",
			icon: BookOpen,
			isActive: true,
			items: [
				{
					title: "Form Provider",
					url: "/docs/components/form/hook-form",
				},
				{
					title: "Checkbox",
					url: "/docs/components/form/rhf-checkbox",
				},
				{
					title: "Combobox",
					url: "/docs/components/form/rhf-combobox",
				},
				{
					title: "Date Picker",
					url: "/docs/components/form/rhf-date-picker",
				},
				{
					title: "Time Picker",
					url: "/docs/components/form/rhf-time-picker",
				},
				{
					title: "Floating Input",
					url: "/docs/components/form/rhf-floating-input",
				},
				{
					title: "Input",
					url: "/docs/components/form/rhf-input",
				},
				{
					title: "Multi Select",
					url: "/docs/components/form/rhf-multi-select",
				},
				{
					title: "Select",
					url: "/docs/components/form/rhf-select",
				},
				{
					title: "Radio Group",
					url: "/docs/components/form/rhf-radio-group",
				},
				{
					title: "Textarea",
					url: "/docs/components/form/rhf-textarea",
				},
				{
					title: "Upload",
					url: "/docs/components/form/rhf-upload",
				},
				{
					title: "Upload Multiple",
					url: "/docs/components/form/rhf-upload-multiple",
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props} className="rounded-none">
			<SidebarHeader className="border-b rounded-b-none border-border max-h-16">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/">
								<div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-black text-foreground">
									<Image src="/assets/meta/favicon-32x32.png" width={32} height={32} alt="Supercharged Shadcn/UI Components" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">Supercharged Shadcn/UI</span>
									<span className="truncate font-semibold">Components</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Getting Started</SidebarGroupLabel>
					<SidebarMenu>
						{data.gettingStarted.map((item, index) => (
							<SidebarMenuItem key={index}>
								<SidebarMenuButton asChild>
									<Link href={item.url}>
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<div className="flex flex-col items-center">
					<BuyMeCoffee className="mb-3" />
					<div className="text-center text-xs italic text-muted-foreground truncate">
						<p className="">Powered By:</p>
						<Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
							shadcn/ui
						</Link>
					</div>
				</div>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
