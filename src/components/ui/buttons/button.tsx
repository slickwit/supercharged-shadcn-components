import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 align-middle",
	{
		compoundVariants: [
			// Default color
			{
				variant: "filled",
				color: "default",
				className: "bg-gray-600 text-white hover:bg-gray-500",
			},
			{
				variant: "outline",
				color: "default",
				className: "text-foreground border-foreground border hover:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20",
			},
			{
				variant: "ghost",
				color: "default",
				className: "dark:hover:bg-accent/15 hover:bg-accent hover:shadow-none",
			},
			{
				variant: "soft",
				color: "default",
				className: "text-foreground dark:bg-accent/35 bg-accent hover:bg-foreground/15 dark:hover:bg-accent/65",
			},
			{
				variant: "link",
				color: "default",
				className: "text-default",
			},
			// Primary color
			{
				variant: "filled",
				color: "primary",
				className: "text-white bg-primary hover:bg-primary/90",
			},
			{
				variant: "outline",
				color: "primary",
				className: "text-primary border-primary border hover:bg-primary/5",
			},
			{
				variant: "ghost",
				color: "primary",
				className: "text-primary hover:bg-primary/15 hover:shadow-none",
			},
			{
				variant: "soft",
				color: "primary",
				className: "text-primary bg-primary/15 hover:bg-primary/35",
			},
			{
				variant: "link",
				color: "primary",
				className: "text-primary",
			},
			// Secondary color
			{
				variant: "filled",
				color: "secondary",
				className: "text-white bg-secondary hover:bg-secondary/90",
			},
			{
				variant: "outline",
				color: "secondary",
				className: "text-secondary border-secondary border hover:bg-secondary/5",
			},
			{
				variant: "ghost",
				color: "secondary",
				className: "text-secondary hover:bg-secondary/15 hover:shadow-none",
			},
			{
				variant: "soft",
				color: "secondary",
				className: "text-secondary bg-secondary/15 hover:bg-secondary/35",
			},
			{
				variant: "link",
				color: "secondary",
				className: "text-secondary",
			},
			// Info color
			{
				variant: "filled",
				color: "info",
				className: "text-white bg-info hover:bg-info/90",
			},
			{
				variant: "outline",
				color: "info",
				className: "text-info border-info border hover:bg-info/5",
			},
			{
				variant: "ghost",
				color: "info",
				className: "text-info hover:bg-info/15 hover:shadow-none",
			},
			{
				variant: "soft",
				color: "info",
				className: "text-info bg-info/15 hover:bg-info/35",
			},
			{
				variant: "link",
				color: "info",
				className: "text-info",
			},
			// Success color
			{
				variant: "filled",
				color: "success",
				className: "text-white bg-success hover:bg-success/90",
			},
			{
				variant: "outline",
				color: "success",
				className: "text-success border-success border hover:bg-success/5",
			},
			{
				variant: "ghost",
				color: "success",
				className: "text-success hover:bg-success/15 hover:shadow-none",
			},
			{
				variant: "soft",
				color: "success",
				className: "text-success bg-success/15 hover:bg-success/35",
			},
			{
				variant: "link",
				color: "success",
				className: "text-success",
			},
			// Warning color
			{
				variant: "filled",
				color: "warning",
				className: "text-white bg-warning hover:bg-warning/90",
			},
			{
				variant: "outline",
				color: "warning",
				className: "text-warning border-warning border hover:bg-warning/5",
			},
			{
				variant: "ghost",
				color: "warning",
				className: "text-warning hover:bg-warning/15 hover:shadow-none",
			},
			{
				variant: "soft",
				color: "warning",
				className: "text-warning bg-warning/35 hover:bg-warning/15",
			},
			{
				variant: "link",
				color: "warning",
				className: "text-warning",
			},
			// Error color
			{
				variant: "filled",
				color: "error",
				className: "text-white bg-error hover:bg-error/90",
			},
			{
				variant: "outline",
				color: "error",
				className: "text-error border-error border hover:bg-error/5",
			},
			{
				variant: "ghost",
				color: "error",
				className: "text-error hover:bg-error/15 hover:shadow-none",
			},
			{
				variant: "soft",
				color: "error",
				className: "text-error bg-error/15 hover:bg-error/35",
			},
			{
				variant: "link",
				color: "error",
				className: "text-error",
			},
		],
		variants: {
			variant: {
				default: "",
				destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				filled: "",
				soft: "",
				outline: "",
				secondary: "",
				ghost: "hover:shadow-[currentcolor_0px_0px_0px_0.5px]",
				link: "underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
			},
			color: {
				default: "",
				primary: "",
				secondary: "",
				info: "",
				success: "",
				warning: "",
				error: "",
			},
		},
		defaultVariants: {
			variant: "default",
			color: "default",
			size: "default",
		},
	},
);

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, color, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	return <Comp className={cn(buttonVariants({ variant, size, color, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
