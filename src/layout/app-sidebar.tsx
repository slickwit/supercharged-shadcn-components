"use client";
import * as React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import Link from "next/link";
import BuyMeCoffee from "@/components/buy-me-coffee";
import Image from "next/image";
import { useNavData } from "@/config/nav-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { open } = useSidebar();
	const navData = useNavData();
	return (
		<Sidebar collapsible="icon" {...props} className="rounded-none">
			<SidebarHeader className="border-b rounded-b-none border-border max-h-16">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/">
								<div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-black text-foreground">
									<Image src="/favicon-32x32.png" width={32} height={32} alt="Supercharged Shadcn/UI Components" />
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
				{navData.map((nav) => (
					<NavMain key={nav.title} items={nav.items} title={nav.title} />
				))}
			</SidebarContent>
			{open ? (
				<SidebarFooter className="pt-4">
					<div className="flex flex-col items-center">
						<BuyMeCoffee className="mb-3" />
						<div className="text-center text-xs italic text-muted-foreground truncate">
							<p>Powered By:</p>
							<Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
								shadcn/ui
							</Link>
						</div>
					</div>
				</SidebarFooter>
			) : (
				<SidebarFooter className="pt-4">
					<div className="flex flex-col items-center">
						<BuyMeCoffee className="mb-3" src="/assets/bmc-logo-yellow.png" width={30} height={30} />
						<div className="text-center text-[0.5rem] font-semibold italic text-muted-foreground truncate">
							<p>Powered By:</p>
							<Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
								shadcn/ui
							</Link>
						</div>
					</div>
				</SidebarFooter>
			)}
			<SidebarRail />
		</Sidebar>
	);
}
