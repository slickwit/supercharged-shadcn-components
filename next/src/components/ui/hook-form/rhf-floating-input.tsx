"use client";
import type { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import { Controller, type FieldValues, useFormContext } from "react-hook-form";
import { FloatingLabelInput } from "@/components/ui/inputs";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------

interface CustomRHFFloatingInputProps<T>
	extends Omit<ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render">,
		Omit<ComponentPropsWithoutRef<typeof FloatingLabelInput>, "name" | "defaultValue"> {
	name: keyof T extends string ? keyof T : never;
	helperText?: string;
	containerClass?: Pick<HTMLAttributes<HTMLDivElement>, "className">;
}

export default function CustomRHFFloatingInput<T extends FieldValues>({
	name,
	helperText,
	defaultValue,
	rules,
	containerClass,
	label,
	className,
	...other
}: CustomRHFFloatingInputProps<T>) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<div className={cn("space-y-2", containerClass)}>
					<FloatingLabelInput label={label} error={!!error} {...field} {...other} className={className} />
					{!!helperText && <p className="text-xs leading-tight text-muted-foreground ml-1.5">{helperText}</p>}
					{!!error && <p className="text-xs leading-tight text-error ml-1.5">{error?.message}</p>}
				</div>
			)}
		/>
	);
}