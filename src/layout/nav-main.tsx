"use client";
import { ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useActiveLink } from "@/hooks/use-active-link";
import { cn } from "@/lib/utils";
import { TItems } from "@/config/nav-data";

export function NavMain({ items, title }: { items: TItems[]; title: string }) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>{title}</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<NavList key={item.name} item={item} />
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}

function NavList({ item }: { item: TItems }) {
	const { open } = useSidebar();
	const active = useActiveLink(item.name);

	if (!item.items) return <NavSingleList item={item} />;

	return (
		<Collapsible asChild defaultOpen className="group/collapsible">
			<SidebarMenuItem>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton tooltip={item.title} data-active={active} className={cn(!open && "[&>.sidebar-icon]:size-4")}>
						{item.icon && item.icon}
						<span className="text-md">{item.title}</span>
						<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						{item.items.map((subItem) => (
							<NavLink item={subItem} parentActive={active} key={subItem.name} />
						))}
					</SidebarMenuSub>
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	);
}

function NavLink({ item, parentActive }: { item: TItems; parentActive: boolean }) {
	const active = useActiveLink(item.name);
	const isActive = active && parentActive;

	return (
		<SidebarMenuSubItem>
			<SidebarMenuSubButton asChild>
				<Link href={item.url} className={cn(isActive && "!text-primary  font-semibold underline")}>
					<span>{item.title}</span>
				</Link>
			</SidebarMenuSubButton>
		</SidebarMenuSubItem>
	);
}

function NavSingleList({ item }: { item: TItems }) {
	const { open } = useSidebar();
	const active = useActiveLink(item.name);

	return (
		<SidebarMenuItem>
			<SidebarMenuButton asChild className={cn(!open && "[&>.sidebar-icon]:size-4")}>
				<Link href={item.url} className={cn(active && "text-primary font-semibold")}>
					{!!item.icon && item.icon}
					<span>{item.title}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
}
