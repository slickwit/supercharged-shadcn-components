import * as React from "react";
import { cn } from "@/lib/utils";
import { type FloatingInputProps, FloatingInput } from "./base/floating-input";
import { FloatingLabel } from "./base/floating-label";

type FloatingLabelInputProps = FloatingInputProps & {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	label?: string;
	error?: boolean;
};

const FloatingLabelInput = React.forwardRef<React.ElementRef<typeof FloatingInput>, React.PropsWithoutRef<FloatingLabelInputProps>>(
	({ id, label, error = false, className, containerProps, ...props }, ref) => {
		return (
			<div
				{...containerProps}
				className={cn(
					"relative",
					error && "[&>*]:text-error [&>fieldset]:border-error [&>fieldset]:dark:border-error",
					containerProps?.className,
				)}>
				<FloatingInput
					ref={ref}
					id={id}
					className={cn(className, "focus-visible:ring-ring focus-visible:ring-0 focus-visible:ring-opacity-0", {
						"text-error": error,
					})}
					{...props}
				/>
				<FloatingLabel
					htmlFor={id}
					size={props.size}
					className={cn("peer-focus:text-primary font-medium", {
						"text-error peer-focus:text-error": error,
					})}>
					{label}
				</FloatingLabel>
				<fieldset
					className={cn(
						"absolute peer-focus-visible:border-2 transition-all peer-focus-visible:border-primary inset-0 -top-[5px] border dark:border-input/35 border-input rounded-md m-0 py-0 text-left px-2 pointer-events-none min-w-0 peer-focus:[&>legend]:max-w-full peer-focus-visible:[&>legend]:max-w-full peer-placeholder-shown:[&>legend]:max-w-0",
					)}>
					<legend className="transition-all invisible whitespace-nowrap overflow-hidden w-auto max-w-full h-3 leading-4 text-xs font-normal p-0">
						<span className="px-1 visible inline-block opacity-0">{label}</span>
					</legend>
				</fieldset>
			</div>
		);
	},
);
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
