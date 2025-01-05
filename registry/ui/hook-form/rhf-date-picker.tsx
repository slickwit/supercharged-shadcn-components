"use client";
import type { ComponentPropsWithoutRef } from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { DatePicker } from "@/components/ui/date/date-picker";
import { FloatingLabelButon } from "@/components/ui/buttons/floating-label-button";
import { Calendar } from "@/components/ui/calendar";

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ICalendar extends Omit<ComponentPropsWithoutRef<typeof Calendar>, "selected" | "onSelect" | "mode"> {}

interface RHFDatePickerProps<TFieldValues extends FieldValues>
	extends Omit<ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render"> {
	name: FieldPath<TFieldValues>;
	btnProps?: Omit<React.ComponentPropsWithoutRef<typeof FloatingLabelButon>, "value" | "label">;
	calendarProps?: ICalendar;
	helperText?: string;
	label?: string;
}

export default function CustomRHFDatePicker<TFieldValues extends FieldValues>({
	name,
	helperText,
	defaultValue,
	rules,
	btnProps = {
		size: "md",
		className: "[&>svg]:size-6",
	},
	label,
	calendarProps,
}: RHFDatePickerProps<TFieldValues>) {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<div className="flex flex-col">
					<DatePicker
						label={label}
						btnProps={{
							...btnProps,
							error: !!error,
						}}
						date={field.value}
						onSelect={field.onChange}
						calendarProps={calendarProps}
					/>
					{!!helperText && <p className="text-sm leading-none text-muted-foreground ml-1.5 mt-2">{helperText}</p>}
					{!!error && <p className="text-sm leading-none text-error ml-1.5 mt-2">{error?.message}</p>}
				</div>
			)}
		/>
	);
}
