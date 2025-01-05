"use client";
import type { ComponentPropsWithoutRef } from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Autocomplete, type Option } from "@/components/ui/autocomplete";

// ----------------------------------------------------------------------

interface RHFAutocompleteProps<TFieldValues extends FieldValues>
	extends Omit<ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render">,
		Omit<ComponentPropsWithoutRef<typeof Autocomplete>, "name" | "defaultValue"> {
	name: FieldPath<TFieldValues>;
	helperText?: string;
	containerClass?: string;
	label: string;
}

export default function RHFAutocomplete<TFieldValues extends FieldValues>({
	name,
	helperText,
	label,
	defaultValue,
	rules,
	containerClass,
	onOptionSelect,
	onRemove,
	...other
}: RHFAutocompleteProps<TFieldValues>) {
	const { control, setValue } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field: { onChange, ...restField }, fieldState: { error } }) => (
				<div className={cn("space-y-2", containerClass)}>
					<Autocomplete
						label={label}
						{...other}
						onOptionSelect={(value: string, optionValue: Option) => {
							if (!onOptionSelect) {
								onChange(value);
							} else {
								onOptionSelect(value, optionValue);
							}
						}}
						onRemove={() => {
							onRemove?.();
							setValue(name as string, "", { shouldValidate: false, shouldTouch: true, shouldDirty: true });
						}}
						{...restField}
						error={!!error}
					/>
					{!!helperText && <p className="text-sm text-muted-foreground ml-1.5">{helperText}</p>}
					{!!error && <p className="text-sm text-error ml-1.5">{error?.message}</p>}
				</div>
			)}
		/>
	);
}
