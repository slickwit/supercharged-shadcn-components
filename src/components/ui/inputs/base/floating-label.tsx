import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// ----------------------------------------------------------------------

const floatingLabelVariant = cva(
	"cursor-text absolute start-2 z-10 transform duration-300 peer-placeholder-shown:start-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:text-foreground font-medium peer-placeholder-shown:translate-x-1.5 leading-4 text-xs -translate-y-4 top-2 translate-x-1.5 peer-focus:top-2 peer-focus:text-xs peer-focus:-translate-y-4",
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

interface FloatingLabelProps extends React.ComponentPropsWithoutRef<typeof Label>, VariantProps<typeof floatingLabelVariant> {}

const FloatingLabel = React.forwardRef<React.ElementRef<typeof Label>, FloatingLabelProps>(({ size = "md", className, ...props }, ref) => {
	return (
		<Label
			className={cn("text-foreground select-none pointer-events-none", floatingLabelVariant({ size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
FloatingLabel.displayName = "FloatingLabel";

export { FloatingLabel, floatingLabelVariant, type FloatingLabelProps };
