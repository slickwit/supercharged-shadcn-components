"use client";
import * as React from "react";
import TimePicker from "@/components/ui/date/time-picker";
import { getString12HourTime, Period } from "@/components/ui/date/time-picker-utils";

// ----------------------------------------------------------------------

export default function TimePickerDemo() {
	const [period, setPeriod] = React.useState<Period>("AM");
	const [date, setDate] = React.useState<Date | null>(null);
	const value = !!date ? getString12HourTime(date, period) : "";

	const onClear = () => {
		setDate(null);
		setPeriod("AM");
	};

	return (
		<div className="flex flex-col items-center">
			<p className="mb-4 text-sm text-foreground/80 italic">
				Use arrow [Left, Right, Up, Down] to navigate `Hours, Minutes, Seconds, and Period` and its value.
			</p>
			<div className="max-w-72 w-full flex items-center justify-center">
				<TimePicker
					label="Select Time"
					date={date}
					setDate={setDate}
					value={value}
					period={period}
					setPeriod={setPeriod}
					onClear={onClear}
				/>
			</div>
		</div>
	);
}
