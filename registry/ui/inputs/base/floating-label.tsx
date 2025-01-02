import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// ----------------------------------------------------------------------

const floatingLabelVariant = cva(
	"cursor-text text-muted-foreground absolute z-10 duration-300 peer-placeholder-shown:start-3 font-medium leading-4 text-xs peer-focus:text-xs start-3 peer-focus:start-3 -top-2 peer-focus:-top-2",
	{
		variants: {
			size: {
				sm: "peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5",
				md: "peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5",
				lg: "peer-placeholder-shown:text-lg peer-placeholder-shown:top-4",
				textarea: "peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5",
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
