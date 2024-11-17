import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button, FloatingLabelButon, IconButton } from "@/components/ui/buttons";
import { Clock4Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Period, TimePickerType, getArrowByType, getDateByType, setDateByType, display12HourValue } from "./time-picker-utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ----------------------------------------------------------------------

interface TimePickerProps {
	buttonProps?: Omit<React.ComponentPropsWithoutRef<typeof FloatingLabelButon>, "label" | "value">;
	label: string;
	value: string;
	date: Date | undefined;
	setDate: (date: Date | undefined) => void;
	picker?: TimePickerType;
	period: Period;
	setPeriod: React.Dispatch<React.SetStateAction<Period>>;
}

export default function TimePicker({ picker = "12hours", buttonProps, label, value, date, setDate, period, setPeriod }: TimePickerProps) {
	const [open, setOpen] = React.useState(false);
	const [localDate, setLocalDate] = React.useState(date ?? new Date(new Date().setHours(0, 0, 0, 0)));
	const minuteRef = React.useRef<HTMLInputElement>(null);
	const hourRef = React.useRef<HTMLInputElement>(null);
	const secondRef = React.useRef<HTMLInputElement>(null);
	const periodRef = React.useRef<HTMLButtonElement>(null);

	const handleLocalDateChange = (dateVal: Date | undefined) => {
		if (!!dateVal) {
			setLocalDate(dateVal);
		}
	};

	const handleOpenChange = (open: boolean) => {
		if (!open) {
			setDate(localDate);
		}
		setOpen(open);
	};

	return (
		<Popover open={open} onOpenChange={handleOpenChange}>
			<PopoverTrigger asChild>
				<FloatingLabelButon
					variant="outline"
					size="md"
					label={label}
					value={value ?? ""}
					{...buttonProps}
					className={cn(
						"w-full justify-start text-sm font-medium select-none overflow-x-clip py-1",
						!value && "text-muted-foreground",
						buttonProps?.className,
					)}
					endIcon={
						<IconButton size="md" asChild>
							<Clock4Icon className="fill-common/12 stroke-common/80 !p-1.5 size-9 min-w-9 max-w-9 min-h-9 max-h-9 hover:bg-foreground/5" />
						</IconButton>
					}
				/>
			</PopoverTrigger>
			<PopoverContent className="max-w-64 w-full">
				<div className="flex items-end gap-2">
					<div className="grid gap-1 text-center">
						<Label htmlFor="hours" className="text-xs">
							Hours
						</Label>
						<TimePickerInput
							picker={picker}
							period={period}
							date={localDate}
							setDate={handleLocalDateChange}
							ref={hourRef}
							onRightFocus={() => minuteRef.current?.focus()}
						/>
					</div>
					<div className="grid gap-1 text-center">
						<Label htmlFor="minutes" className="text-xs">
							Minutes
						</Label>
						<TimePickerInput
							picker="minutes"
							date={localDate}
							setDate={handleLocalDateChange}
							ref={minuteRef}
							onLeftFocus={() => hourRef.current?.focus()}
							onRightFocus={() => secondRef.current?.focus()}
						/>
					</div>
					<div className="grid gap-1 text-center">
						<Label htmlFor="seconds" className="text-xs">
							Seconds
						</Label>
						<TimePickerInput
							picker="seconds"
							date={localDate}
							setDate={handleLocalDateChange}
							ref={secondRef}
							onLeftFocus={() => minuteRef.current?.focus()}
							onRightFocus={() => periodRef.current?.focus()}
						/>
					</div>
					<div className="grid gap-1 text-center">
						<Label htmlFor="period" className="text-xs">
							Period
						</Label>
						<TimePeriodSelect
							period={period}
							setPeriod={setPeriod}
							date={localDate}
							setDate={handleLocalDateChange}
							ref={periodRef}
							onLeftFocus={() => secondRef.current?.focus()}
							onRightFocus={() => periodRef.current?.focus()}
						/>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}

export interface TimePickerInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
	picker: TimePickerType;
	date: Date;
	setDate: (date: Date | undefined) => void;
	period?: Period;
	onRightFocus?: () => void;
	onLeftFocus?: () => void;
}

const TimePickerInput = React.forwardRef<HTMLInputElement, TimePickerInputProps>(
	(
		{ className, type = "tel", value, id, name, date, setDate, onChange, onKeyDown, picker, period, onLeftFocus, onRightFocus, ...props },
		ref,
	) => {
		const [flag, setFlag] = React.useState<boolean>(false);
		const [prevIntKey, setPrevIntKey] = React.useState<string>("0");

		/**
		 * allow the user to enter the second digit within 2 seconds
		 * otherwise start again with entering first digit
		 */
		React.useEffect(() => {
			if (flag) {
				const timer = setTimeout(() => {
					setFlag(false);
				}, 2000);

				return () => clearTimeout(timer);
			}
		}, [flag]);

		const calculatedValue = React.useMemo(() => {
			return getDateByType(date, picker);
		}, [date, picker]);

		const calculateNewValue = (key: string) => {
			/*
			 * If picker is '12hours' and the first digit is 0, then the second digit is automatically set to 1.
			 * The second entered digit will break the condition and the value will be set to 10-12.
			 */
			if (picker === "12hours") {
				if (flag && calculatedValue.slice(1, 2) === "1" && prevIntKey === "0") return "0" + key;
			}

			return !flag ? "0" + key : calculatedValue.slice(1, 2) + key;
		};

		const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Tab") return;
			e.preventDefault();
			if (e.key === "ArrowRight") onRightFocus?.();
			if (e.key === "ArrowLeft") onLeftFocus?.();
			if (["ArrowUp", "ArrowDown"].includes(e.key)) {
				const step = e.key === "ArrowUp" ? 1 : -1;
				const newValue = getArrowByType(calculatedValue, step, picker);
				if (flag) setFlag(false);
				const tempDate = new Date(date);
				setDate(setDateByType(tempDate, newValue, picker, period));
			}
			if (e.key >= "0" && e.key <= "9") {
				if (picker === "12hours") setPrevIntKey(e.key);

				const newValue = calculateNewValue(e.key);
				if (flag) onRightFocus?.();
				setFlag((prev) => !prev);
				const tempDate = new Date(date);
				setDate(setDateByType(tempDate, newValue, picker, period));
			}
		};

		return (
			<Input
				ref={ref}
				id={id || picker}
				name={name || picker}
				className={cn(
					"w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
					className,
				)}
				value={value || calculatedValue}
				onChange={(e) => {
					e.preventDefault();
					onChange?.(e);
				}}
				type={type}
				inputMode="decimal"
				onKeyDown={(e) => {
					onKeyDown?.(e);
					handleKeyDown(e);
				}}
				{...props}
			/>
		);
	},
);

TimePickerInput.displayName = "TimePickerInput";

export interface PeriodSelectorProps {
	period: Period;
	setPeriod: (m: Period) => void;
	date: Date | undefined;
	setDate: (date: Date | undefined) => void;
	onRightFocus?: () => void;
	onLeftFocus?: () => void;
}

export const TimePeriodSelect = React.forwardRef<HTMLButtonElement, PeriodSelectorProps>(
	({ period, setPeriod, date, setDate, onLeftFocus, onRightFocus }, ref) => {
		const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
			if (e.key === "ArrowRight") onRightFocus?.();
			if (e.key === "ArrowLeft") onLeftFocus?.();
		};

		const handleClick = () => {
			setPeriod(period === "AM" ? "PM" : "AM");

			if (date) {
				const tempDate = new Date(date);
				const hours = display12HourValue(date.getHours());
				setDate(setDateByType(tempDate, hours.toString(), "12hours", period === "AM" ? "PM" : "AM"));
			}
		};

		return (
			<div className="flex items-center">
				<Button
					variant="outline"
					onClick={handleClick}
					className="text-common focus:ring-offset-0 focus:ring-2 ring-offset-background focus:ring-common h-9"
					type="button"
					ref={ref}
					onKeyDown={handleKeyDown}>
					{period}
				</Button>
			</div>
		);
	},
);

TimePeriodSelect.displayName = "TimePeriodSelect";

export { TimePickerInput };
