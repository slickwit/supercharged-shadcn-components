import { env } from "@/env";
import AppHeader from "@/layout/app-header";
import type { Metadata } from "next";

// ----------------------------------------------------------------------

export const metadata: Metadata = {
	title: `Getting Started - ${env.APP_TITLE}`,
};

interface GettingStartedLayoutProps {
	children?: React.ReactNode;
}

export default function GettingStartedLayout({ children }: GettingStartedLayoutProps) {
	return (
		<>
			<AppHeader />
			<div className="container mx-auto p-4 mt-20">{children}</div>
		</>
	);
}
