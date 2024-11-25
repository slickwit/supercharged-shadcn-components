"use client";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "./darkmode-toggle";
import { Searchbar } from "./searchbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SIDEBAR_WIDTH, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { Fragment } from "react";
import { Github } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import useStore from "@/hooks/use-store";
import { presetOptions, useSettingStore } from "@/store/settings.store";
import PresetsOptions from "./theme-color-preset";

// ----------------------------------------------------------------------

interface ILink {
	name: string;
	url?: string;
}
interface AppHeaderProps {
	links: ILink[];
}

export default function AppHeader({ links }: AppHeaderProps) {
	const settings = useStore(useSettingStore, (state) => state);
	const defaultColorPreset = settings?.themeColorPresets;
	const color = presetOptions.find((opt) => opt[0] === defaultColorPreset)?.[1] ?? "#16a34a";

	const { open } = useSidebar();
	return (
		<header
			style={
				{
					"--sidebar-width": SIDEBAR_WIDTH,
					maxWidth: `calc(100% - ${open ? "var(--sidebar-width)" : "47px"})`,
				} as React.CSSProperties
			}
			className={
				"flex w-full lg:h-16 h-14 shrink-0 items-center gap-2 transition-all ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 fixed lg:bg-sidebar/75 bg-sidebar lg:backdrop-blur-sm border-b border-border rounded-none z-[50] lg:pr-4 pr-2 max-md:!max-w-full"
			}>
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center lg:gap-2 lg:px-4 gap-1.5 px-1.5">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4 hidden lg:block" />
					<Breadcrumb className="hidden lg:block">
						<BreadcrumbList>
							{links.map((link, idx) => (
								<Fragment key={idx}>
									{!!link.url ? (
										<BreadcrumbItem className="hidden md:block">
											<BreadcrumbLink href={link.url}>{link.name}</BreadcrumbLink>
										</BreadcrumbItem>
									) : (
										<BreadcrumbItem>
											<BreadcrumbPage>{link.name}</BreadcrumbPage>
										</BreadcrumbItem>
									)}
									{idx !== links.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
								</Fragment>
							))}
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="flex lg:gap-2 gap-1.5 max-md:w-full">
					<Searchbar />
					<Button asChild variant="outline" size="icon" className="max-md:size-7 flex-shrink-0">
						<Link href="https://github.com/slickwit/supercharged-shadcn-components" target="_blank" rel="noopener noreferrer">
							<Github />
						</Link>
					</Button>
					<DarkModeToggle className="max-md:size-7 flex-shrink-0" />
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="outline" size="icon" className="lg:hidden size-7 flex-shrink-0">
								<span
									className="size-2.5 rounded-full transition-transform"
									style={{
										backgroundColor: color,
									}}
								/>
							</Button>
						</PopoverTrigger>
						<PopoverContent
							sideOffset={12}
							onOpenAutoFocus={(e) => {
								e.preventDefault();
							}}>
							<PresetsOptions />
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</header>
	);
}
