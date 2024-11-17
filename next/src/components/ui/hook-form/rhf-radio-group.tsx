"use client";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Controller, type FieldValues, useFormContext } from "react-hook-form";
import { RadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------

interface RHFRadioGroupProps<T>
	extends Omit<ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render">,
		Omit<ComponentPropsWithoutRef<typeof RadioGroup>, "name" | "defaultValue"> {
	name: keyof T extends string ? keyof T : never;
	helperText?: string;
	children: ReactNode;
}

export default function CustomRHFRadioGroup<T extends FieldValues>({
	name,
	helperText,
	defaultValue,
	rules,
	className,
	children,
	...other
}: RHFRadioGroupProps<T>) {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<RadioGroup
					onValueChange={field.onChange}
					defaultValue={field.value}
					value={field.value}
					className={cn("group/radio peer", className)}
					data-state-error={!!error}
					aria-invalid={!!error}
					{...other}>
					{children}
					{!!helperText && <p className="text-sm leading-none text-muted-foreground ml-1.5 mt-2">{helperText}</p>}
					{!!error && <p className="text-sm leading-none text-error ml-1.5 mt-2">{error?.message}</p>}
				</RadioGroup>
			)}
		/>
	);
}
