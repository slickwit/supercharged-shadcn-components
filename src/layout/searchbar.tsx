"use client";
import React, { useCallback, useEffect, useState } from "react";
import { SearchIcon, FileText } from "lucide-react";

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import Link from "next/link";
import { type TItems, useNavData } from "@/config/nav-data";
import { useActiveLink } from "@/hooks/use-active-link";
import { cn } from "@/lib/utils";

export function Searchbar() {
	const navData = useNavData();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen(true);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [open]);

	const handleOpen = useCallback(() => {
		setOpen(true);
	}, [setOpen]);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	return (
		<>
			<div
				onClick={handleOpen}
				className="flex items-center lg:justify-around gap-4 rounded-md border border-input lg:px-3 lg:py-2 py-1 px-2 max-md:w-full text-sm text-muted-foreground ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:bg-muted">
				<span className="flex items-center justify-start gap-1">
					<SearchIcon className="h-4 w-4" />
					Search Components...
				</span>
				<kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 md:inline-flex">
					<span className="text-xs">⌘</span>K
				</kbd>
			</div>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="search components..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{navData.map((data) =>
						data.items.map((nav) =>
							!!nav.items ? (
								<CommandGroup key={nav.title} heading={nav.title}>
									{nav.items.map((item) => (
										<CommandLink key={item.url} item={item} handleClose={handleClose} />
									))}
								</CommandGroup>
							) : (
								<CommandLink key={nav.url} item={nav} handleClose={handleClose} />
							),
						),
					)}
				</CommandList>
			</CommandDialog>
		</>
	);
}

function CommandLists({ item, handleClose }: { item: TItems; handleClose: () => void }) {
	if (!!item.items) {
		return (
			<CommandGroup key={item.title} heading={item.title}>
				{item.items.map((item) => (
					<CommandLink key={item.url} item={item} handleClose={handleClose} />
				))}
			</CommandGroup>
		);
	}

	return <CommandLink item={item} handleClose={handleClose} />;
}

function CommandLink({ item, handleClose }: { item: TItems; handleClose: () => void }) {
	const active = useActiveLink(item.name);
	return (
		<CommandItem
			asChild
			className={cn("cursor-pointer", active && "text-primary font-semibold bg-primary/10 !opacity-100 underline")}
			disabled={active}
			value={item.title}>
			<Link href={item.url} onClick={handleClose} aria-disabled={active}>
				<FileText className="size-4 mr-2" />
				<span>{item.title}</span>
			</Link>
		</CommandItem>
	);
}
