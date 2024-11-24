"use client";
import { format } from "date-fns";
import { CalendarDaysIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { IconButton } from "@/components/ui/buttons/icon-button";
import { FloatingLabelButon } from "@/components/ui/buttons/floating-label-button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ComponentPropsWithoutRef } from "react";
import { type SelectSingleEventHandler } from "react-day-picker";

// ----------------------------------------------------------------------

interface DatePickerProps {
	date?: Date;
	onSelect?: SelectSingleEventHandler;
	label?: string;
	btnProps?: Omit<React.ComponentPropsWithoutRef<typeof FloatingLabelButon>, "value" | "label">;
	calendarProps?: Omit<ComponentPropsWithoutRef<typeof Calendar>, "selected" | "onSelect" | "mode">;
}

export function DatePicker({ date, onSelect, btnProps, calendarProps, label = "Pick a date" }: DatePickerProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<FloatingLabelButon
					variant="outline"
					label={label}
					value={!!date ? format(date, "PPP") : ""}
					{...btnProps}
					className={cn(
						"w-full justify-start text-base select-none overflow-x-clip py-1 cursor-text",
						!date && "text-muted-foreground",
						btnProps?.className,
					)}
					endIcon={
						<IconButton size="md" asChild>
							<CalendarDaysIcon className="fill-common/12 stroke-common/80 !p-1.5 size-9 min-w-9 max-w-9 min-h-9 max-h-9 hover:bg-foreground/5" />
						</IconButton>
					}
				/>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={onSelect}
					initialFocus
					captionLayout="dropdown-buttons"
					fromYear={1990}
					{...calendarProps}
				/>
			</PopoverContent>
		</Popover>
	);
}
