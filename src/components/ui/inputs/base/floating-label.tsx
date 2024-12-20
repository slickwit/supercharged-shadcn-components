import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// ----------------------------------------------------------------------

const floatingLabelVariant = cva(
	"cursor-text text-muted-foreground absolute z-10 duration-300 peer-placeholder-shown:start-3 font-medium leading-4 text-xs peer-focus:text-xs",
	{
		variants: {
			size: {
				sm: "peer-placeholder-shown:text-sm start-3 peer-focus:start-3 peer-placeholder-shown:top-3.5 -top-2 peer-focus:-top-2",
				md: "peer-placeholder-shown:text-base start-3 peer-focus:start-3 peer-placeholder-shown:top-3.5 -top-2 peer-focus:-top-2",
				lg: "peer-placeholder-shown:text-lg start-3.5 peer-focus:start-3.5 peer-placeholder-shown:top-3.5 -top-2 peer-focus:-top-2",
				textarea: "peer-placeholder-shown:text-base start-3 peer-focus:start-3 peer-placeholder-shown:top-3.5 -top-2 peer-focus:-top-2",
			},
		},
		defaultVariants: {
			size: "sm",
		},
	},
);

interface FloatingLabelProps extends React.ComponentPropsWithoutRef<typeof Label>, VariantProps<typeof floatingLabelVariant> {}

const FloatingLabel = React.forwardRef<React.ElementRef<typeof Label>, FloatingLabelProps>(({ size = "sm", className, ...props }, ref) => {
	return (
		<Label
			className={cn("select-none pointer-events-none transition-all", floatingLabelVariant({ size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
FloatingLabel.displayName = "FloatingLabel";

export { FloatingLabel, floatingLabelVariant, type FloatingLabelProps };
