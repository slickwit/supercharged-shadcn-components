import * as React from "react";
import { cn } from "@/lib/utils";
import { type CustomInputProps, CustomInput } from "./custom/custom-input";
import { cva, type VariantProps } from "class-variance-authority";
import { CustomLabel } from "./custom/custom-label";

const FloatingInput = React.forwardRef<HTMLInputElement, CustomInputProps>(({ className, ...props }, ref) => {
	return <CustomInput placeholder=" " className={cn("peer bg-transparent border-none", className)} ref={ref} {...props} />;
});
FloatingInput.displayName = "FloatingInput";

const floatingLabelVariant = cva(
	"cursor-text absolute start-2 z-10 transform duration-300 peer-placeholder-shown:start-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:text-common font-normal peer-placeholder-shown:translate-x-1.5 leading-4 text-xs -translate-y-4 top-2 translate-x-1.5 peer-focus:top-2 peer-focus:text-xs peer-focus:-translate-y-4",
	{
		variants: {
			size: {
				sm: "peer-placeholder-shown:text-sm",
				md: "peer-placeholder-shown:text-base",
				lg: "peer-placeholder-shown:text-lg",
			},
		},
		defaultVariants: {
			size: "sm",
		},
	},
);

interface FloatingLabelProps extends React.ComponentPropsWithoutRef<typeof CustomLabel>, VariantProps<typeof floatingLabelVariant> {}

const FloatingLabel = React.forwardRef<React.ElementRef<typeof CustomLabel>, FloatingLabelProps>(({ size = "md", className, ...props }, ref) => {
	return (
		<CustomLabel
			className={cn("text-foreground select-none pointer-events-none", floatingLabelVariant({ size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
FloatingLabel.displayName = "FloatingLabel";

type FloatingLabelInputProps = CustomInputProps & {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	label?: string;
	endIcon?: React.ReactNode;
	error?: boolean;
};

const FloatingLabelInput = React.forwardRef<React.ElementRef<typeof FloatingInput>, React.PropsWithoutRef<FloatingLabelInputProps>>(
	({ id, label, endIcon, error = false, className, containerProps, ...props }, ref) => {
		return (
			<div {...containerProps} className={cn("relative", { "text-error": error }, containerProps?.className)}>
				<FloatingInput
					ref={ref}
					id={id}
					className={cn(className, "focus-visible:ring-ring focus-visible:ring-0 focus-visible:ring-opacity-0", {
						"pr-12": !!endIcon,
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
				{!!endIcon && endIcon}
				<fieldset
					className={cn(
						"absolute peer-focus-visible:border-2 transition-all peer-focus-visible:border-primary inset-0 -top-[5px] border border-input/35 rounded-md m-0 py-0 text-left px-2 pointer-events-none min-w-0 peer-focus-visible:[&>legend]:max-w-full peer-placeholder-shown:[&>legend]:max-w-0",
						{
							"text-error border-error": !!error,
						},
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

export { FloatingInput, FloatingLabel, FloatingLabelInput };
