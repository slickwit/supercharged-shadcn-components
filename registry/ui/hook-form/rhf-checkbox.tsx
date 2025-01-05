"use client";
import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { paramCase } from "@/lib/change-case";

// ----------------------------------------------------------------------

type TDivClassName = Pick<React.HTMLAttributes<HTMLDivElement>, "className">;

interface CustomRHFCheckboxProps<TFieldValues extends FieldValues>
	extends Omit<React.ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render">,
		Omit<React.ComponentPropsWithoutRef<typeof Checkbox>, "name" | "defaultValue"> {
	name: FieldPath<TFieldValues>;
	helperText?: string;
	containerClass?: TDivClassName;
	checkboxContainerClass?: TDivClassName;
	label?: string;
	labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
}

export default function CustomRHFCheckbox<TFieldValues extends FieldValues>({
	name,
	helperText,
	defaultValue,
	rules,
	containerClass,
	checkboxContainerClass,
	label,
	labelProps,
	...other
}: CustomRHFCheckboxProps<TFieldValues>) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field: { onChange, value, ...fields }, fieldState: { error } }) => (
				<div className={cn("space-y-2", containerClass)}>
					<div className={cn("flex items-center space-x-1.5", checkboxContainerClass)}>
						<Checkbox id={other.id ?? paramCase(name)} {...fields} {...other} onCheckedChange={onChange} checked={value} />
						{!!label && (
							<Label
								{...labelProps}
								className={cn("h-4", !!error && "text-error", labelProps?.className)}
								htmlFor={other.id ?? paramCase(name)}>
								{label}
							</Label>
						)}
					</div>
					{!!helperText && <p className="text-xs leading-tight text-muted-foreground">{helperText}</p>}
					{!!error && <p className="text-xs leading-tight text-error">{error?.message}</p>}
				</div>
			)}
		/>
	);
}
