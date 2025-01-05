import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------

export const iconButtonVariants = cva(
	"inline-flex items-center justify-center size-full relative box-border bg-transparent outline-none select-none text-center cursor-pointer flex-auto rounded-full overflow-visible leading-none appearance-none align-middle transition-colors disabled:pointer-events-none disabled:opacity-35",
	{
		variants: {
			variant: {
				default: "",
				filled: "",
				outline: "",
				ghost: "",
				soft: "",
			},
			color: {
				default: "",
				mute: "",
				primary: "",
				secondary: "",
				info: "",
				success: "",
				warning: "",
				error: "",
			},
			size: {
				xs: "p-1 text-md size-6",
				sm: "p-1.5 text-lg size-8",
				md: "p-1.5 text-2xl size-9",
				lg: "p-3 text-3xl size-14",
			},
		},
		compoundVariants: [
			// Default color
			{
				variant: "default",
				color: "default",
				className: "text-foreground hover:bg-foreground/10",
			},
			{
				variant: "filled",
				color: "default",
				className: "text-slate-900 dark:text-slate-100  bg-slate-600 bg-opacity-45 hover:bg-opacity-100 dark:bg-200",
			},
			{
				variant: "outline",
				color: "default",
				className:
					"text-slate-900 dark:text-slate-100 border border-slate-400 dark:border-slate-300 dark:hover:bg-slate-600/35 hover:bg-slate-600/10",
			},
			{
				variant: "ghost",
				color: "default",
				className: "dark:text-slate-200 text-slate-800 hover:bg-slate-400/12",
			},
			{
				variant: "soft",
				color: "default",
				className: "dark:text-slate-100/85 text-slate-700/85 bg-slate-400/10 hover:bg-slate-400/24",
			},
			// Primary color
			{
				variant: "default",
				color: "primary",
				className: "text-primary hover:bg-primary/15",
			},
			{
				variant: "filled",
				color: "primary",
				className: "text-slate-100 bg-primary hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary/80",
			},
			{
				variant: "outline",
				color: "primary",
				className: "text-primary border border-primary hover:bg-primary-light/35",
			},
			{
				variant: "ghost",
				color: "primary",
				className: "text-primary hover:bg-primary/12",
			},
			{
				variant: "soft",
				color: "primary",
				className: "text-primary/90 hover:text-primary bg-primary/12 hover:bg-primary/24 hover:text-primary",
			},
			// Secondary color
			{
				variant: "filled",
				color: "secondary",
				className: "text-slate-100 bg-secondary hover:bg-secondary-dark dark:bg-secondary dark:hover:bg-secondary/80",
			},
			{
				variant: "outline",
				color: "secondary",
				className: "text-secondary border border-secondary hover:bg-secondary-light/35",
			},
			{
				variant: "ghost",
				color: "secondary",
				className: "text-secondary hover:bg-secondary/12",
			},
			{
				variant: "soft",
				color: "secondary",
				className: "text-secondary/90 hover:text-secondary bg-secondary/12 hover:bg-secondary/15",
			},
			// Success color
			{
				variant: "filled",
				color: "success",
				className: "text-slate-100 bg-success hover:bg-success-dark dark:bg-success dark:hover:bg-success/80",
			},
			{
				variant: "outline",
				color: "success",
				className: "text-success border border-success hover:bg-success-light/35",
			},
			{
				variant: "ghost",
				color: "success",
				className: "text-success hover:bg-success/12",
			},
			{
				variant: "soft",
				color: "success",
				className: "text-success/90 hover:text-success bg-success/12 hover:bg-success/15",
			},
			// Info color
			{
				variant: "filled",
				color: "info",
				className: "text-slate-100 bg-info hover:bg-info-dark dark:bg-info dark:hover:bg-info/80",
			},
			{
				variant: "outline",
				color: "info",
				className: "text-info border border-info hover:bg-info-light/35",
			},
			{
				variant: "ghost",
				color: "info",
				className: "text-info hover:bg-info/12",
			},
			{
				variant: "soft",
				color: "info",
				className: "text-info/90 hover:text-info bg-info/12 hover:bg-info/15",
			},
			// Warning color
			{
				variant: "filled",
				color: "warning",
				className: "text-slate-900 bg-warning hover:bg-warning-dark dark:bg-warning dark:hover:bg-warning/80",
			},
			{
				variant: "outline",
				color: "warning",
				className: "text-warning border border-warning hover:bg-warning-light/35",
			},
			{
				variant: "ghost",
				color: "warning",
				className: "text-warning hover:bg-warning/12",
			},
			{
				variant: "soft",
				color: "warning",
				className: "text-warning-dark/90 hover:text-warning-dark bg-warning/12 hover:bg-warning/15",
			},
			// Error color
			{
				variant: "default",
				color: "error",
				className: "text-error hover:bg-error-dark/12 dark:hover:bg-error/80",
			},
			{
				variant: "filled",
				color: "error",
				className: "text-slate-100 bg-error hover:bg-error-dark dark:bg-error dark:hover:bg-error/80",
			},
			{
				variant: "outline",
				color: "error",
				className: "text-error border border-error hover:bg-error-light/35",
			},
			{
				variant: "ghost",
				color: "error",
				className: "text-error hover:bg-error/35",
			},
			{
				variant: "soft",
				color: "error",
				className: "text-error-dark/90 hover:text-error-dark bg-error/12 hover:bg-error/15",
			},
		],
		defaultVariants: {
			size: "sm",
			variant: "default",
			color: "default",
		},
	},
);

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">, VariantProps<typeof iconButtonVariants> {
	asChild?: boolean;
	variant?: "default" | "filled" | "outline" | "ghost" | "soft";
	size?: "xs" | "sm" | "md" | "lg";
	color?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
	transitionOff?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ className, variant = "default", size = "sm", color, transitionOff = false, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(
					iconButtonVariants({
						variant,
						color,
						size,
						className,
					}),
					{
						"transition-transform hover:scale-105 hover:translate-z-[0px]": !transitionOff,
					},
				)}
				ref={ref}
				type="button"
				{...props}
			/>
		);
	},
);

IconButton.displayName = "IconButton";

export { IconButton };
