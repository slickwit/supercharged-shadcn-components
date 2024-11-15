import * as React from "react";
import { CustomTextarea, type CustomTextareaProps } from "./custom/custom-textarea";
import { cn } from "@/lib/utils";
import { FloatingLabel } from "./floating-label-input";

const FloatingTextArea = React.forwardRef<HTMLTextAreaElement, CustomTextareaProps>(({ className, ...props }, ref) => {
	return <CustomTextarea placeholder=" " className={cn("peer bg-transparent border-none", className)} ref={ref} {...props} />;
});
FloatingTextArea.displayName = "FloatingTextArea";

export type FloatingLabelTextAreaProps = CustomTextareaProps & {
	label: string;
	error?: boolean;
};
const FloatingLabelTextArea = React.forwardRef<React.ElementRef<typeof FloatingTextArea>, React.PropsWithoutRef<FloatingLabelTextAreaProps>>(
	({ id, label, error = false, className, ...props }, ref) => {
		return (
			<div className={cn("relative", { "text-error": error })}>
				<FloatingTextArea
					ref={ref}
					id={id}
					className={cn(className, "focus-visible:ring-ring focus-visible:ring-0 focus-visible:ring-opacity-0 py-4")}
					{...props}
				/>
				<FloatingLabel
					htmlFor={id}
					className={cn("peer-focus:text-primary peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-4", {
						"text-error peer-focus:text-error": error,
					})}>
					{label}
				</FloatingLabel>
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

FloatingLabelTextArea.displayName = "FloatingLabelTextArea";

export { FloatingLabelTextArea };
