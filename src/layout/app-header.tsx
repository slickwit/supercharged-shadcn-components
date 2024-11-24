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

// ----------------------------------------------------------------------

interface ILink {
	name: string;
	url?: string;
}
interface AppHeaderProps {
	links: ILink[];
}

export default function AppHeader({ links }: AppHeaderProps) {
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
				"flex w-full h-16 shrink-0 items-center gap-2 transition-all ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 fixed bg-sidebar/75 backdrop-blur-sm border-b border-border rounded-none z-[50] pr-4"
			}>
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
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
				<div className="flex gap-3">
					<Searchbar />
					<Button asChild variant="outline" size="icon">
						<Link href="https://github.com/slickwit/supercharged-shadcn-components" target="_blank" rel="noopener noreferrer">
							<Github />
						</Link>
					</Button>
					<DarkModeToggle />
				</div>
			</div>
		</header>
	);
}
