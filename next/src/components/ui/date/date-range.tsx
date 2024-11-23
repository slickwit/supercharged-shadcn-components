"use client";
import { CalendarDaysIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/buttons/button";
import { IconButton } from "@/components/ui/buttons/icon-button";
import { FloatingLabelButon } from "@/components/ui/buttons/floating-label-button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ComponentPropsWithoutRef } from "react";
import { type SelectRangeEventHandler } from "react-day-picker";
import { shortDateLabel } from "@/lib/format-time";

// ----------------------------------------------------------------------

interface DateRangePickerProps {
	startDate?: Date;
	endDate?: Date;
	onSelect?: SelectRangeEventHandler;
	onClear?: () => void;
	label?: string;
	btnProps?: ComponentPropsWithoutRef<typeof FloatingLabelButon>;
	calendarProps?: Omit<ComponentPropsWithoutRef<typeof Calendar>, "selected" | "onSelect" | "mode">;
}

export default function DateRangePicker({
	startDate,
	endDate,
	onSelect,
	onClear,
	btnProps,
	calendarProps,
	label = "Pick a date",
}: DateRangePickerProps) {
	const shortLabel = shortDateLabel(startDate, endDate);
	return (
		<Popover>
			<PopoverTrigger asChild>
				<FloatingLabelButon
					variant="outline"
					label={label}
					value={shortLabel ?? ""}
					{...btnProps}
					className={cn(
						"w-full justify-start text-sm font-medium select-none overflow-x-clip py-1",
						!shortLabel && "text-muted-foreground",
						btnProps?.className,
					)}
					endIcon={
						<IconButton size="md" asChild>
							<CalendarDaysIcon className="fill-common/12 stroke-common/80 !p-1.5 size-9 min-w-9 max-w-9 min-h-9 max-h-9 hover:bg-foreground/5 aria-selected:" />
						</IconButton>
					}
				/>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					initialFocus
					mode="range"
					selected={{ from: startDate, to: endDate }}
					onSelect={onSelect}
					numberOfMonths={2}
					captionLayout="dropdown-buttons"
					fromYear={1990}
					{...calendarProps}
				/>
				{!!onClear && (
					<Button onClick={onClear} variant="ghost" className="w-full h-8 text-sm font-medium">
						Clear
					</Button>
				)}
			</PopoverContent>
		</Popover>
	);
}
