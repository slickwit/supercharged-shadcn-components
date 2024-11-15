import { DarkModeToggle } from "./navbar/darkmode-toggle";
import { Searchbar } from "./navbar/searchbar";

export function AppNavbar() {
	return (
		<header className="w-full h-16 sticky right-0 left-auto backdrop-blur-sm z-[50] bg-sidebar">
			<nav className="flex items-center justify-between h-full container mx-auto">
				<div>Logo</div>
				<div className="flex gap-3">
					<Searchbar />
					<DarkModeToggle />
				</div>
			</nav>
		</header>
	);
}
