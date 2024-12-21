import * as React from "react";
import { FloatingLabelInput } from "@/components/ui/inputs/floating-label-input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { useBoolean } from "@/hooks/use-boolean";
import { cn } from "@/lib/utils";
import { useDebouncedCallback } from "use-debounce";

// ----------------------------------------------------------------------

export interface Option {
	label: React.ReactNode;
	value: string;
	disabled?: boolean;
}

interface AutocompleteProps extends Omit<React.ComponentPropsWithoutRef<typeof FloatingLabelInput>, "onChange"> {
	value?: string;
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onOptionSelect?: (value: string, selectedOption: Option) => void;
	options: Option[];
	creatable?: boolean;
	onCreate?: (newOption: Option) => Option | void;
	asynFilterFunction?: (query: string) => Promise<Option[]>;
	loadingLabel?: React.ReactNode;
	contentClass?: string;
	triggerClass?: string;
}

const Autocomplete = ({
	value = "",
	onInputChange,
	onOptionSelect,
	options,
	creatable,
	onCreate,
	asynFilterFunction,
	loadingLabel = "loading...",
	contentClass,
	triggerClass,
	...props
}: AutocompleteProps) => {
	const inputRef = React.useRef<React.ElementRef<"input">>(null);
	const contentRef = React.useRef<React.ElementRef<"div">>(null);

	const focused = useBoolean(false);

	const [addedOption, setAddedOption] = React.useState<Option[]>([]);
	const [optionList, setOptionList] = React.useState(options);
	const [inputValue, setInputValue] = React.useState(!!value ? () => options.find((opt) => opt.value === value)?.value ?? "" : "");
	const [focusedOption, setFocusedOption] = React.useState(-1);

	const [loading, setLoading] = React.useState(false);
	const debounce = useDebouncedCallback(async (value: string) => {
		if (asynFilterFunction) {
			const data = await asynFilterFunction(value);
			setOptionList(data);
		}
		setLoading(false);
	}, 250);

	const isCreatable = creatable || !!onCreate;

	const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!!onInputChange) {
			onInputChange(e);
		}
		setInputValue(e.currentTarget.value);
		if (!asynFilterFunction) {
			const filteredOptions = options.filter((opt) =>
				opt.value.toLocaleLowerCase().includes(e.currentTarget.value.trim().toLocaleLowerCase()),
			);
			setOptionList(!isCreatable ? filteredOptions : [...filteredOptions, ...addedOption]);
		} else {
			setLoading(true);
			debounce(e.currentTarget.value);
		}
	};

	const handleSelect = (optionIndex: number) => {
		const selected = optionList[optionIndex];
		if (!!selected) {
			setFocusedOption(-1);
			setInputValue(selected.value);
			inputRef.current?.blur();
			onOptionSelect?.(selected.value, selected);
		}
	};

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		if (!!props.onFocus) {
			props.onFocus(e);
		}
		inputRef.current?.select();
		focused.onTrue();
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (!!props.onBlur) {
			props.onBlur(e);
		}
		focused.onFalse();
		setFocusedOption(-1);
	};

	const scrollToOption = React.useCallback(
		(index: number) => {
			const popover = contentRef.current;
			const optionElement = popover?.querySelectorAll("li")[index] as HTMLElement;
			if (optionElement && popover) {
				const { offsetTop, offsetHeight } = optionElement;
				const { scrollTop, clientHeight } = popover;

				if (offsetTop < scrollTop) {
					popover.scrollTop = offsetTop;
				} else if (offsetTop + offsetHeight > scrollTop + clientHeight) {
					popover.scrollTop = offsetTop + offsetHeight - clientHeight;
				}
			}
		},
		[contentRef],
	);

	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		switch (e.key) {
			case "Enter":
				e.preventDefault();
				if (isCreatable && !!inputValue && focusedOption === optionList.length) {
					handleCreate();
				} else if (focusedOption >= 0) {
					const selectedOpt = optionList[focusedOption];
					if (selectedOpt && !selectedOpt.disabled) {
						handleSelect(focusedOption);
					}
				}
				break;
			case "Escape":
				e.preventDefault();
				focused.onFalse();
				setFocusedOption(-1);
				break;
			case "ArrowDown":
				e.preventDefault();
				setFocusedOption((currState) => {
					let nextIndex = -1;
					if (currState === optionList.length - 1 && isCreatable && !!inputValue.trim()) {
						nextIndex = optionList.length;
					} else {
						nextIndex = currState < optionList.length - 1 ? currState + 1 : 0;
					}
					scrollToOption(nextIndex);
					return nextIndex;
				});
				break;
			case "ArrowUp":
				e.preventDefault();
				setFocusedOption((currState) => {
					const prevIndex = currState > 0 ? currState - 1 : optionList.length - 1;
					scrollToOption(prevIndex);
					return prevIndex;
				});
				break;
			default:
				break;
		}
	};

	const handleCreate = () => {
		const newOption = { label: inputValue, value: inputValue };
		if (!!onCreate) {
			const createdOpt: Option = onCreate(newOption) ?? newOption;
			setAddedOption((curr) => [...curr, createdOpt]);
			setOptionList((curr) => [...curr, createdOpt]);
		} else {
			setAddedOption((curr) => [...curr, newOption]);
			setOptionList((curr) => [...curr, newOption]);
		}
		inputRef.current?.blur();
	};

	const canAdd = isCreatable && !!inputValue ? !optionList.some((opt) => opt.value === inputValue) : false;
	const notFound = !isCreatable && optionList.length === 0;
	return (
		<Popover open={focused.value}>
			<PopoverTrigger asChild>
				<div className={triggerClass}>
					<FloatingLabelInput
						{...props}
						ref={inputRef}
						value={inputValue}
						onFocus={handleFocus}
						onBlur={handleBlur}
						onChange={handleInputChange}
						onKeyDown={handleInputKeyDown}
					/>
				</div>
			</PopoverTrigger>
			<PopoverContent
				ref={contentRef}
				onOpenAutoFocus={(e) => {
					e.preventDefault();
				}}
				className={cn(contentClass, "w-[var(--radix-popper-anchor-width)] p-0 flex flex-col items-start max-h-[300px] overflow-y-auto")}>
				<ul className="w-full py-0.5">
					{!loading ? (
						<>
							{optionList.map((opt, index) => {
								const isFocused = index === focusedOption;
								const selected = value === opt.value;
								return (
									<li
										aria-label="button"
										tabIndex={index + 1}
										key={opt.value}
										onClick={() => {
											handleSelect(index);
										}}
										className={cn(
											"px-2 py-1.5 cursor-pointer w-full text-start rounded-none hover:bg-accent",
											isFocused && "ring-1 ring-primary bg-accent",
											selected && "bg-accent",
											opt.disabled && "opacity-50 pointer-events-none",
										)}>
										{opt.label}
									</li>
								);
							})}
							{canAdd && (
								<li
									aria-label="button"
									tabIndex={optionList.length + 1}
									onClick={handleCreate}
									className={cn(
										"px-2 py-1.5 cursor-pointer w-full text-start rounded-none hover:bg-accent",
										focusedOption === optionList.length && "ring-1 ring-primary bg-accent",
									)}>
									Create &quot;{inputValue}&quot;
								</li>
							)}
							{notFound && (
								<li aria-label="not found" className="px-2 py-1.5 w-full rounded-none text-start">
									Not Found
								</li>
							)}
						</>
					) : (
						<li aria-label="loading" className="px-2 py-1.5 w-full rounded-none text-center">
							{loadingLabel}
						</li>
					)}
				</ul>
			</PopoverContent>
		</Popover>
	);
};

export { Autocomplete };
