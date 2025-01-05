"use client";
import type { ComponentPropsWithoutRef } from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/ui/inputs/base/floating-input";

// ----------------------------------------------------------------------

interface CustomRHFInputProps<TFieldValues extends FieldValues>
	extends Omit<ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render">,
		Omit<ComponentPropsWithoutRef<typeof CustomInput>, "name" | "defaultValue"> {
	name: FieldPath<TFieldValues>;
	helperText?: string;
	containerClass?: string;
	label?: string;
}

export default function CustomRHFInput<TFieldValues extends FieldValues>({
	name,
	label,
	helperText,
	type,
	defaultValue,
	rules,
	containerClass,
	className,
	...other
}: CustomRHFInputProps<TFieldValues>) {
	const { control, setValue } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<div className={cn("space-y-2", containerClass)}>
					{!!label && (
						<Label
							className={cn({
								"text-error": error,
							})}>
							{label}
						</Label>
					)}
					<CustomInput
						{...field}
						{...other}
						type={type ?? "text"}
						onChange={(event) => {
							if (type === "number") {
								setValue(name as string, +event.currentTarget.value, { shouldValidate: true });
							} else {
								field.onChange(event);
							}
						}}
						className={cn(className, {
							"text-error border-error focus-visible:ring-error": !!error,
						})}
					/>
					{!!helperText && <p className="text-sm text-muted-foreground ml-1.5">{helperText}</p>}
					{!!error && <p className="text-sm text-error ml-1.5">{error?.message}</p>}
				</div>
			)}
		/>
	);
}
