"use client";
import { useState } from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { FloatingLabelButon } from "@/components/ui/buttons/floating-label-button";
import TimePicker from "../date/time-picker";
import { getString12HourTime, getStringTime, Period } from "../date/time-picker-utils";

// ----------------------------------------------------------------------

interface RHFTimePickerProps<TFieldValues extends FieldValues>
	extends Omit<React.ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render"> {
	name: FieldPath<TFieldValues>;
	buttonProps?: Omit<React.ComponentPropsWithoutRef<typeof FloatingLabelButon>, "value" | "label">;
	timePickerProps?: Omit<React.ComponentPropsWithoutRef<typeof TimePicker>, "value" | "label" | "date" | "setDate" | "period" | "setPeriod">;
	helperText?: string;
	label: string;
	stringVal?: boolean;
}

export default function CustomRHFTimePicker<TFieldValues extends FieldValues>({
	name,
	helperText,
	defaultValue,
	rules,
	label,
	buttonProps = {},
	timePickerProps = {},
	stringVal = false,
}: RHFTimePickerProps<TFieldValues>) {
	const [period, setPeriod] = useState<Period>("AM");
	const [date, setDate] = useState<Date | undefined>(undefined);
	const { control } = useFormContext();

	const handleChange = (d: Date | undefined, onChange: (value?: string | Date) => void) => {
		setDate(d);
		if (stringVal) {
			const stringTime = !!d ? getStringTime(d) : "";
			onChange(stringTime);
		} else {
			onChange(d);
		}
	};

	const value = !!date ? getString12HourTime(date, period) : "";
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<div className="flex flex-col">
					<TimePicker
						date={date}
						setDate={(d: Date | undefined) => handleChange(d, field.onChange)}
						label={label}
						buttonProps={{
							...buttonProps,
							error: !!error,
						}}
						value={value}
						picker="12hours"
						period={period}
						setPeriod={setPeriod}
						{...timePickerProps}
					/>
					{!!helperText && <p className="text-sm leading-none text-muted-foreground ml-1.5 mt-2">{helperText}</p>}
					{!!error && <p className="text-sm leading-none text-error ml-1.5 mt-2">{error?.message}</p>}
				</div>
			)}
		/>
	);
}
