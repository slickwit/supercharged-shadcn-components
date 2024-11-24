import AppHeader from "@/layout/app-header";
import PresetsOptions from "@/layout/theme-color-preset";
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
			<div className="container mx-auto px-4 py-4 pb-12 mt-20 flex justify-between">
				<div className="max-w-[calc(100%_-_340px)]">{children}</div>
				<div className="min-w-[340px] fixed right-0 top-0 border-l">
					<div className="mt-20 px-6 lg:px-10 py-4 h-svh">
						<PresetsOptions />
					</div>
				</div>
			</div>
		</>
	);
}
