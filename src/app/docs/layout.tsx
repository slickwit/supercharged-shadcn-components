import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "@/layout/app-header";
import { AppSidebar } from "@/layout/app-sidebar";

// ----------------------------------------------------------------------

interface DocsLayoutProps {
	children?: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<AppHeader />
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
