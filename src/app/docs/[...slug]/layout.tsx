import AppHeader from "@/layout/app-header";
import { slugToTitle } from "@/lib/change-case";

// ----------------------------------------------------------------------

interface ILink {
	name: string;
	url?: string;
}
interface DocsLayoutProps {
	children?: React.ReactNode;
	params: {
		slug: string[];
	};
}

export default function DocsLayout({ children, ...props }: DocsLayoutProps) {
	const slugs = props.params.slug ?? [];

	const links: ILink[] = [
		{
			name: "Docs",
			url: "/docs/getting-started",
		},
		...slugs.map((s) => ({
			name: slugToTitle(s),
		})),
	];

	return (
		<>
			<AppHeader links={links} />
			<div className="container mx-auto p-4 mt-20">{children}</div>
		</>
	);
}
