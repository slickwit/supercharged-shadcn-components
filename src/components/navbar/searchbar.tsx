"use client";
import React, { useEffect } from "react";
import {
	SearchIcon,
	// FileText
} from "lucide-react";

import {
	CommandDialog,
	CommandEmpty,
	// CommandGroup,
	CommandInput,
	// CommandItem,
	CommandList,
} from "@/components/ui/command";
// import Link from "next/link";
import { useBoolean } from "@/hooks/use-boolean";

export function Searchbar() {
	const open = useBoolean();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open.onTrue();
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [open]);

	return (
		<>
			<div
				onClick={() => open.onTrue()}
				className="flex items-center justify-around gap-4 rounded-md border border-input px-3 py-2 text-sm text-muted-foreground ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:bg-muted">
				<span className="flex items-center gap-1">
					<SearchIcon className="h-4 w-4" />
					Search Components...
				</span>
				<kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 md:inline-flex">
					<span className="text-xs">⌘</span>K
				</kbd>
			</div>
			<CommandDialog open={open.value} onOpenChange={open.setValue}>
				<CommandInput placeholder="search components..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{/* {DOCS.map((doc) => (
            <CommandGroup key={doc.groupKey} heading={doc.groupValue}>
              {doc.children.map((d) => (
                <Link href={d.url} key={d.label} onClick={() => open.onFalse()}>
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>{d.label}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          ))} */}
				</CommandList>
			</CommandDialog>
		</>
	);
}
