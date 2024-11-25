"use client";
import React, { useEffect } from "react";
import { SearchIcon, FileText } from "lucide-react";

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import Link from "next/link";
import { useBoolean } from "@/hooks/use-boolean";
import { type TItems, useNavData } from "@/config/nav-data";
import { useActiveLink } from "@/hooks/use-active-link";
import { cn } from "@/lib/utils";

export function Searchbar() {
	const navData = useNavData();
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

	const handleOpen = () => {
		open.onTrue();
	};

	const handleClose = () => {
		open.onFalse();
	};

	return (
		<>
			<div
				onClick={handleOpen}
				className="flex lg:hidden items-center lg:justify-around gap-4 rounded-md border border-input lg:px-3 lg:py-2 py-1 px-2 max-md:w-full text-sm text-muted-foreground ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:bg-muted">
				<span className="flex items-center justify-start gap-1">
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
					{navData.map((data) => (
						<CommandGroup key={data.title} heading={data.title}>
							{data.items.map((nav) => (
								<CommandLists key={nav.url} item={nav} handleClose={handleClose} />
							))}
						</CommandGroup>
					))}
				</CommandList>
			</CommandDialog>
		</>
	);
}

function CommandLists({ item, handleClose }: { item: TItems; handleClose: () => void }) {
	const active = useActiveLink(item.name);

	if (!!item.items) {
		return (
			<CommandGroup key={item.title} heading={item.title}>
				<CommandSubList items={item.items} handleClose={handleClose} />
			</CommandGroup>
		);
	}
	return (
		<CommandItem
			asChild
			key={item.url}
			className={cn("cursor-pointer", active && "text-primary font-semibold bg-primary/10 !opacity-100 underline")}
			disabled={active}
			value={item.name}>
			<Link href={item.url} onClick={handleClose} aria-disabled={active}>
				<FileText className="size-4 mr-2" />
				<span>{item.title}</span>
			</Link>
		</CommandItem>
	);
}

function CommandSubList({ items, handleClose }: { items: TItems[]; handleClose: () => void }) {
	return items.map((item) => <CommandLists key={item.url} item={item} handleClose={handleClose} />);
}
