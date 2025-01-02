import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { FloatingLabel } from "./base/floating-label";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const FloatingTextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return <Textarea placeholder=" " className={cn("peer bg-transparent border-none", className)} ref={ref} {...props} />;
});
FloatingTextArea.displayName = "FloatingTextArea";

export type FloatingLabelTextAreaProps = TextareaProps & {
	label: string;
	error?: boolean;
};
const FloatingLabelTextArea = React.forwardRef<React.ElementRef<typeof FloatingTextArea>, React.PropsWithoutRef<FloatingLabelTextAreaProps>>(
	({ id, label, error = false, className, ...props }, ref) => {
		return (
			<div className={cn("relative", error && "[&>*]:text-error [&>fieldset]:border-error [&>fieldset]:dark:border-error")}>
				<FloatingTextArea
					ref={ref}
					id={id}
					placeholder="  "
					className={cn(className, "focus-visible:ring-ring focus-visible:ring-0 focus-visible:ring-opacity-0 py-4")}
					{...props}
				/>
				<FloatingLabel
					htmlFor={id}
					className={cn("peer-focus:text-primary font-medium", {
						"text-error peer-focus:text-error": error,
					})}
					size="textarea">
					{label}
				</FloatingLabel>
				<fieldset
					className={cn(
						"absolute peer-focus-visible:border-2 transition-all peer-focus-visible:border-primary inset-0 -top-[5px] border dark:border-input/35 border-input/65 rounded-md m-0 py-0 text-left px-2 pointer-events-none min-w-0 peer-focus-visible:[&>legend]:max-w-full peer-placeholder-shown:[&>legend]:max-w-0",
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
