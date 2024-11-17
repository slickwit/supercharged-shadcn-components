"use client";
import * as React from "react";
import { Controller, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FloatingLabelButon } from "@/components/ui/buttons";
import { ChevronsUpDown, Square, SquareCheckBig } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// ----------------------------------------------------------------------

type SelectOption = {
	label: string;
	value: string;
};

interface CustomRHFMultiSelectProps<T> extends Omit<React.ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render"> {
	name: keyof T extends string ? keyof T : never;
	btnProps?: Omit<React.ComponentPropsWithoutRef<typeof FloatingLabelButon>, "value" | "label">;
	popoverProps?: React.ComponentPropsWithoutRef<typeof PopoverContent>;
	helperText?: string;
	containerClass?: string;
	label: string;
	options: SelectOption[];
}

export default function CustomRHFMultiSelect<T extends FieldValues>({
	name,
	label,
	helperText,
	defaultValue,
	rules,
	containerClass,
	btnProps = {
		variant: "outlined",
		size: "md",
		className: "w-full justify-between",
	},
	popoverProps,
	options,
}: CustomRHFMultiSelectProps<T>) {
	const btnRef = React.useRef<React.ElementRef<"button">>(null);
	const [open, setOpen] = React.useState(false);
	const { control } = useFormContext();

	const handleValueChange = React.useCallback((value: string, inputValue: string, onChange: (...event: any[]) => void) => {
		const values = inputValue.trim() === "" ? [] : inputValue.split(",");
		const valIdx = values.findIndex((val) => val === value);
		if (valIdx === -1) {
			values.push(value);
		} else {
			values.splice(valIdx, 1);
		}
		onChange(values.join(","));
		setOpen(false);
	}, []);

	const popOverStyle = !!btnRef.current ? { width: btnRef.current.clientWidth } : {};
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => {
				return (
					<div className={containerClass}>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<FloatingLabelButon
									role={name + "-combobox"}
									aria-expanded={open}
									{...btnProps}
									ref={btnRef}
									label={label}
									value={field.value}
									endIcon={<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />}
									error={!!error}
								/>
							</PopoverTrigger>
							<PopoverContent
								{...popoverProps}
								style={popOverStyle}
								className={cn("w-full p-0 space-y-0", popoverProps?.className)}>
								{options.map((option, index) => {
									const selected = (field.value as string).split(",").findIndex((val) => val === option.value) !== -1;
									return (
										<div
											key={index}
											onClick={() => handleValueChange(option.value, field.value, field.onChange)}
											className={cn(
												"flex items-center rounded-md py-2 px-1.5 cursor-pointer select-none hover:bg-accent dark:hover:bg-accent/10",
												{
													"font-medium bg-accent dark:bg-accent/10": selected,
												},
											)}>
											{selected ? <SquareCheckBig className="h-4 w-4" /> : <Square className="h-4 w-4" />}
											<span className="text-sm ml-2 whitespace-nowrap">{option.label}</span>
										</div>
									);
								})}
							</PopoverContent>
						</Popover>
						<div className="space-y-2 mt-2">
							{!!helperText && <p className="text-sm text-muted-foreground ml-1.5">{helperText}</p>}
							{!!error && <p className="text-sm text-error ml-1.5">{error?.message}</p>}
						</div>
					</div>
				);
			}}
		/>
	);
}
