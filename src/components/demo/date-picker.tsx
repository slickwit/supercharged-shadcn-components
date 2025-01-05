"use client";
import * as React from "react";
import { DatePicker } from "@/components/ui/date/date-picker";

// ----------------------------------------------------------------------

export default function DatePickerDemo() {
	const [date, setDate] = React.useState<Date | undefined>(undefined);
	return (
		<div className="max-w-72 w-full flex items-center justify-center">
			<DatePicker
				label="Select Date"
				date={date}
				onSelect={setDate}
				calendarProps={{
					disabled: (date) => date < new Date(),
				}}
			/>
		</div>
	);
}
