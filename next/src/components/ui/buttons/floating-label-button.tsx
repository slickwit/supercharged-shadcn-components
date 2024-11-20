import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";

// ----------------------------------------------------------------------

export interface FloatingLabelButonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color" | "value">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	ring?: boolean;
	variant?: "destructive" | "secondary" | "link" | "ghost" | "soft" | "contained" | "outline";
	color?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
	size?: "default" | "sm" | "md" | "lg" | "icon";
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;

	label: string;
	value: React.ReactNode;
	error?: boolean;
}

const FloatingLabelButon = React.forwardRef<HTMLButtonElement, FloatingLabelButonProps>(
	({ className, variant = "contained", color, size, asChild = false, error = false, startIcon, endIcon, label, value, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				data-start-icon={!!startIcon}
				data-end-icon={!!endIcon}
				className={cn(buttonVariants({ variant, size, color, className }), "justify-start relative group border-0", {
					"text-error": !!error,
				})}
				type="button"
				ref={ref}
				{...props}
				data-value={!!value}>
				{!!startIcon && <span>{startIcon}</span>}
				<span
					className={cn(
						"absolute transition-all group-data-[value=true]:-translate-y-4 group-data-[value=true]:top-2 group-data-[value=true]:text-xs",
						{
							"group-data-[value=true]:-translate-x-1 translate-x-5": !!startIcon,
						},
					)}>
					{label}
				</span>
				{!!value ? <span className="w-full text-left text-common/90">{value}</span> : <span className="w-full" />}
				{!!endIcon && <span>{endIcon}</span>}
				<fieldset
					className={cn(
						"absolute group-focus:border-2 group-focus-visible:border-2 transition-all group-focus:border-primary group-focus-visible:border-primary inset-0 -top-[5px] border border-input rounded-md m-0 py-0 text-left px-2 pointer-events-none min-w-0 group-focus:[&>legend]:max-w-full group-focus-visible:[&>legend]:max-w-full group-data-[value=false]:[&>legend]:max-w-0",
						{
							"text-error border-error": !!error,
						},
					)}>
					<legend className="transition-all invisible whitespace-nowrap overflow-hidden w-auto max-w-full h-3 leading-4 text-xs font-normal p-0">
						<span className="px-1 visible inline-block opacity-0">{label}</span>
					</legend>
				</fieldset>
			</Comp>
		);
	},
);

FloatingLabelButon.displayName = "FloatingLabelButton";

export { FloatingLabelButon };
