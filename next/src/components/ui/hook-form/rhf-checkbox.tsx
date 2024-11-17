"use client";
import * as React from "react";
import { Controller, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { paramCase } from "@/lib/change-case";

// ----------------------------------------------------------------------

type TDivClassName = Pick<React.HTMLAttributes<HTMLDivElement>, "className">;

interface CustomRHFCheckboxProps<T>
	extends Omit<React.ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render">,
		Omit<React.ComponentPropsWithoutRef<typeof Checkbox>, "name" | "defaultValue"> {
	name: keyof T extends string ? keyof T : never;
	helperText?: string;
	containerClass?: TDivClassName;
	checkboxContainerClass?: TDivClassName;
	label?: string;
	labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
}

export default function CustomRHFCheckbox<T extends FieldValues>({
	name,
	helperText,
	defaultValue,
	rules,
	containerClass,
	checkboxContainerClass,
	label,
	labelProps,
	className,
	...other
}: CustomRHFCheckboxProps<T>) {
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
							<Label {...labelProps} className={cn("h-4", labelProps?.className)} htmlFor={other.id ?? paramCase(name)}>
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
