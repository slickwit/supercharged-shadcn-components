import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/env";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: {
		default: env.APP_TITLE,
		template: `%s - ${env.APP_TITLE}`,
	},
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
					{children}
					{/* <AppNavbar /> */}
					{/* <SidebarProvider>
						<AppSidebar />
						<div className="w-full">
							<div className="w-full">
								<AppNavbar />
							</div>
							<main className="flex flex-col flex-grow min-h-full py-16 px-1 lg:px-4 w-full container mx-auto">{children}</main>
						</div>
					</SidebarProvider> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
