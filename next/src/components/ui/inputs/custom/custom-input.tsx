import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const customInputVariant = cva(
	"px-3 py-2 flex leading-4 w-full text-common rounded-md border border-input/35 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-common focus-visible:ring-offset-0 focus-visible:border-0 disabled:cursor-not-allowed disabled:opacity-35",
	{
		variants: {
			size: {
				sm: "h-12 text-sm",
				md: "h-14 text-base py-4 text-base",
				lg: "h-16 text-lg",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

export interface CustomInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof customInputVariant> {
	size?: "sm" | "md" | "lg" | undefined;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(({ className, type = "text", size, ...props }, ref) => {
	return <input type={type} className={cn(customInputVariant({ size, className }))} ref={ref} {...props} />;
});
CustomInput.displayName = "CustomInput";

export { CustomInput };