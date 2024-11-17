"use client";
import type { ComponentPropsWithoutRef } from "react";
import { Controller, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FloatingLabelTextArea } from "@/components/ui/inputs";

// ----------------------------------------------------------------------

interface CustomRHFTextareaProps<T>
	extends Omit<ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render">,
		Omit<ComponentPropsWithoutRef<typeof FloatingLabelTextArea>, "name" | "defaultValue"> {
	name: keyof T extends string ? keyof T : never;
	helperText?: string;
	containerClass?: string;
	label: string;
}

export default function CustomRHFTextarea<T extends FieldValues>({
	name,
	label,
	helperText,
	defaultValue,
	rules,
	containerClass,
	className,
	...other
}: CustomRHFTextareaProps<T>) {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<div className={cn("space-y-2", containerClass)}>
					<FloatingLabelTextArea
						{...field}
						{...other}
						value={field.value ?? ""}
						label={label}
						className={cn(className, {
							"text-error border-error focus-visible:ring-error": !!error,
						})}
						error={!!error}
					/>
					{!!helperText && <p className="text-sm text-muted-foreground ml-1.5">{helperText}</p>}
					{!!error && <p className="text-sm text-error ml-1.5">{error?.message}</p>}
				</div>
			)}
		/>
	);
}