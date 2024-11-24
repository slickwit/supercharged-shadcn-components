"use client";
import * as React from "react";
import DateRangePicker from "@/components/ui/date/date-range";

// ----------------------------------------------------------------------

export default function DatePickerDemo() {
	const [startDate, setStartDate] = React.useState<Date | undefined>(undefined);
	const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);

	return (
		<div className="max-w-72 w-full flex items-center justify-center">
			<DateRangePicker
				startDate={startDate}
				endDate={endDate}
				onSelect={(range) => {
					setStartDate(range?.from);
					setEndDate(range?.to);
				}}
				onClear={() => {
					setEndDate(undefined);
					setStartDate(undefined);
				}}
			/>
		</div>
	);
}
