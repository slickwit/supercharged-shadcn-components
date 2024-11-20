import { DarkModeToggle } from "@/components/navbar/darkmode-toggle";
import { Searchbar } from "@/components/navbar/searchbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SIDEBAR_WIDTH, SidebarTrigger } from "@/components/ui/sidebar";

// ----------------------------------------------------------------------

interface AppHeaderProps {
	children?: React.ReactNode;
}

export default function AppHeader({}: AppHeaderProps) {
	return (
		<header
			style={
				{
					"--sidebar-width": SIDEBAR_WIDTH,
					maxWidth: `calc(100% - var(--sidebar-width))`,
				} as React.CSSProperties
			}
			className={
				"flex w-full h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 fixed bg-sidebar/75 backdrop-blur-sm border-b border-border rounded-none z-[50] pr-4"
			}>
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Getting Started</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="flex gap-3">
					<Searchbar />
					<DarkModeToggle />
				</div>
			</div>
		</header>
	);
}
