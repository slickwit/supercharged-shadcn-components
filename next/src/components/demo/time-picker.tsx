"use client";
import * as React from "react";
import TimePicker from "@/components/ui/date/time-picker";
import { getString12HourTime, Period } from "@/components/ui/date/time-picker-utils";

// ----------------------------------------------------------------------

export default function TimePickerDemo() {
	const [period, setPeriod] = React.useState<Period>("AM");
	const [date, setDate] = React.useState<Date | undefined>(undefined);
	const value = !!date ? getString12HourTime(date, period) : "";

	return (
		<div className="max-w-72 w-full flex items-center justify-center">
			<TimePicker label="Select Time" date={date} setDate={setDate} value={value} period={period} setPeriod={setPeriod} />
		</div>
	);
}
