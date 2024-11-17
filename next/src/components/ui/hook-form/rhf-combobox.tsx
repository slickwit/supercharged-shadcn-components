"use client";
import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { FloatingLabelButon } from "../buttons";

// ----------------------------------------------------------------------

type TOption = {
	label: string;
	labelNode?: React.ReactNode;
	value: string;
};

type TOptions = TOption[] | Record<string, TOption[]>;

interface RHFComboboxProps<TFieldValues extends FieldValues>
	extends Omit<React.ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render"> {
	name: FieldPath<TFieldValues>;
	btnProps?: Omit<React.ComponentPropsWithoutRef<typeof FloatingLabelButon>, "value" | "label">;
	popoverProps?: React.ComponentPropsWithoutRef<typeof PopoverContent>;
	helperText?: string;
	label?: string;
	placeholder?: string;
	options: TOptions;
	enableCheck?: boolean;
	noResultText?: string;
}

export default function CustomRHFCombobox<TFieldValues extends FieldValues>({
	name,
	helperText,
	defaultValue,
	rules,
	label = "Select...",
	placeholder = "Search...",
	options,
	btnProps = {
		variant: "outline",
		size: "md",
		className: "w-full justify-between",
	},
	popoverProps,
	enableCheck = true,
	noResultText = "No item found.",
}: RHFComboboxProps<TFieldValues>) {
	const btnRef = React.useRef<HTMLButtonElement>(null);
	const [open, setOpen] = React.useState(false);
	const { control } = useFormContext();

	function getSelected(value: string) {
		if (Array.isArray(options)) {
			return options.find((opt) => opt.value === value)?.label ?? "";
		} else {
			let selectedValue;
			Object.values(options).forEach((opt) => {
				const selected = opt.find((optVal) => optVal.value === value)?.label ?? "";
				if (!!selected) {
					selectedValue = selected;
					return;
				}
			});
			return selectedValue;
		}
	}

	const handleSelect = React.useCallback(
		(onChange: (value: string) => void, value: string, isSelected: boolean) => () => {
			onChange(!isSelected ? value : "");
			setOpen(false);
		},
		[],
	);

	const popOverStyle = !!btnRef.current ? { width: btnRef.current.clientWidth } : {};
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => {
				const selectedLabel = getSelected(field.value);
				return (
					<div className="flex flex-col">
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<FloatingLabelButon
									role={name + "-combobox"}
									aria-expanded={open}
									{...btnProps}
									ref={btnRef}
									label={label}
									value={selectedLabel}
									endIcon={<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />}
									error={!!error}
								/>
							</PopoverTrigger>
							<PopoverContent {...popoverProps} style={popOverStyle} className={cn("w-full p-0", popoverProps?.className)}>
								<Command>
									<CommandInput placeholder={placeholder} />
									<CommandEmpty>{noResultText}</CommandEmpty>
									<CommandList>
										{Array.isArray(options)
											? options.map((option) => {
													const selected = field.value === option.value;
													return (
														<CommandItem
															key={option.value}
															value={option.label}
															onSelect={handleSelect(field.onChange, option.value, selected)}
															className={cn("text-foreground", selected && "bg-accent/60 text-accent-foreground")}>
															{enableCheck && (
																<Check className={cn("mr-2 h-4 w-4", selected ? "opacity-100" : "opacity-0")} />
															)}
															{option?.labelNode ?? option.label}
														</CommandItem>
													);
											  })
											: Object.entries(options).map(([heading, opts], idx) => (
													<React.Fragment key={idx}>
														<CommandGroup>
															<DropdownMenuLabel className="text-common capitalize">{heading}</DropdownMenuLabel>
															{opts.map((option) => {
																const selected = field.value === option.value;
																return (
																	<CommandItem
																		key={option.value}
																		value={option.label + " " + heading}
																		onSelect={handleSelect(field.onChange, option.value, selected)}
																		className={cn(
																			"text-foreground",
																			selected && "bg-accent/60 text-accent-foreground",
																		)}>
																		{enableCheck && (
																			<Check
																				className={cn(
																					"mr-2 h-4 w-4",
																					selected ? "opacity-100" : "opacity-0",
																				)}
																			/>
																		)}
																		{option?.labelNode ?? option.label}
																	</CommandItem>
																);
															})}
														</CommandGroup>
													</React.Fragment>
											  ))}
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
						{!!helperText && <p className="text-sm leading-none text-muted-foreground ml-1.5 mt-2">{helperText}</p>}
						{!!error && <p className="text-sm leading-none text-error ml-1.5 mt-2">{error?.message}</p>}
					</div>
				);
			}}
		/>
	);
}
