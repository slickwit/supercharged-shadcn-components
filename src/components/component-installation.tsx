import { useEffect, useState } from "react";
import CopyCode from "./copy-code";

// ----------------------------------------------------------------------

export const ComponentInstallation = ({ name }: { name: string }) => {
	const [currentUrl, setCurrentUrl] = useState("");

	useEffect(() => {
		// Check if the code is running on the client side
		if (process) {
			// Access the current page URL using window.location
			setCurrentUrl(window.location.origin);
		}
	}, []);

	const commandText = `npx shadcn@latest add ${currentUrl}/registry/${name}.json`;
	return (
		<div className="relative mt-2 pl-3 py-4 bg-[#24292e] text-white rounded-lg border max-w-fit pr-16">
			<span className="font-mono text-sm">{commandText}</span>
			<CopyCode
				className="size-6 [&_svg]:stroke-inherit stroke-input hover:stroke-accent-foreground absolute right-2 top-2"
				text={commandText}
			/>
		</div>
	);
};
