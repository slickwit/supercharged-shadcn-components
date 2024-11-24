import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layout/app-sidebar";

// ----------------------------------------------------------------------

interface DocsLayoutProps {
	children?: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	);
}
