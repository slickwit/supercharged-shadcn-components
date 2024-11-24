import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import ProgressBarProvider from "@/components/progress-bar";
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
	description:
		"Supercharged Shadcn Component is an open-source ReactJS component library designed to simplify your workflow with pre-built, reusable components inspired by shadcn/ui, Material-UI, and more.",
	keywords: [
		"NextJS",
		"Shadcn",
		"ReactJS",
		"UI Components",
		"shadcn/ui",
		"Material-UI",
		"Open Source",
		"react-hook-form",
		"date-fns",
		"framer-motion",
		"numeral",
		"TypeScript",
	],
	authors: [
		{
			name: "Kenneth Ryan Dy",
			url: "https://kennethryandy.vercel.app",
		},
	],
	openGraph: {
		title: "Supercharged Shadcn Component - Pre-built React Components",
		description:
			"Build faster with ready-to-use React components inspired by shadcn/ui and Material-UI, featuring simpler, type-safe react-hook-form components.",
		url: env.APP_URL,
		siteName: "Supercharged Shadcn Component",
		images: [
			{
				url: env.APP_URL + "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Supercharged Shadcn Component - Pre-built React Components",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Supercharged Shadcn Component - Pre-built React Components",
		description:
			"An open-source ReactJS library with pre-built components to supercharge your development workflow. Inspired by shadcn/ui, Material-UI, and more.",
		images: [env.APP_URL + "/og-image.png"],
		creator: "@KennethRyanDy3",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: env.APP_URL + "/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							try {
								if (localStorage.settings) {document.documentElement.setAttribute("data-theme", JSON.parse(localStorage.settings).state.themeColorPresets);}
							} catch (_) {}
						`,
					}}
				/>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
					<ProgressBarProvider>{children}</ProgressBarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
