"use client";
import { type ComponentPropsWithoutRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { Trigger } from "@radix-ui/react-select";
import { FloatingLabelButon } from "../buttons";
import { ChevronsUpDown } from "lucide-react";

// ----------------------------------------------------------------------

type SelectOption = {
	label: string;
	value: string;
};

interface CustomRHFSelectProps<T>
	extends Omit<ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render">,
		Omit<ComponentPropsWithoutRef<typeof Select>, "name" | "defaultValue"> {
	name: keyof T extends string ? keyof T : never;
	helperText?: string;
	containerClass?: string;
	label?: string;
	buttonClass?: string;
	options: SelectOption[];
}

export default function CustomRHFSelect<T extends Record<string, any>>({
	name,
	label,
	helperText,
	defaultValue,
	rules,
	containerClass,
	buttonClass,
	options,
}: CustomRHFSelectProps<T>) {
	const { control } = useFormContext();

	const handleValueChange = (value: string, onChange: (...event: any[]) => void) => {
		if (value !== "empty") {
			onChange(value);
			return;
		}
		onChange("");
	};

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<div className={cn("space-y-2", containerClass)}>
					<Select onValueChange={(value) => handleValueChange(value, field.onChange)} defaultValue={field.value}>
						<Trigger asChild>
							<FloatingLabelButon
								label={label ?? ""}
								value={field.value}
								variant="outlined"
								className={cn("w-full", buttonClass)}
								endIcon={<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />}
								error={!!error}
								size="md"
							/>
						</Trigger>
						<SelectContent>
							<SelectItem value="empty" className="rounded-sm focus:bg-accent outline-none">
								<span className="italic text-foreground">Empty</span>
							</SelectItem>
							{options.map((o, idx) => (
								<SelectItem key={idx} value={o.value} className="font-medium">
									{o.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					{!!helperText && <p className="text-sm text-muted-foreground ml-1.5">{helperText}</p>}
					{!!error && <p className="text-sm text-error ml-1.5">{error?.message}</p>}
				</div>
			)}
		/>
	);
}
