"use client";
import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------

export function useActiveLink(name: string) {
	const pathname = usePathname();
	const pathnameArray = pathname.split("/");
	return pathnameArray.some((p) => p === name);
}
