import { cva } from "class-variance-authority";

// ----------------------------------------------------------------------

export const buttonVariants = cva(
	"inline-flex items-center justify-center capitalize whitespace-nowrap overflow-ellipsis rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-35 transition-colors px-3",
	{
		compoundVariants: [
			// Default color
			{
				variant: "filled",
				color: "default",
				className: "",
			},
			{
				variant: "outline",
				color: "default",
				className: "text-muted-foreground dark:border-input/35 border-input/65 border",
			},
			{
				variant: "ghost",
				color: "default",
				className: "text-foreground dark:hover:bg-accent/15 hover:bg-accent",
			},
			{
				variant: "soft",
				color: "default",
				className:
					"text-foreground/95 dark:bg-accent/15 bg-accent/75 hover:bg-foreground/15 dark:hover:bg-accent/35 hover:text-foreground",
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
				className: "text-white bg-primary hover:bg-primary-dark",
			},
			{
				variant: "outline",
				color: "primary",
				className: "text-primary border-primary border",
			},
			{
				variant: "ghost",
				color: "primary",
				className: "text-primary hover:bg-primary/15",
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
				className: "text-white bg-secondary hover:bg-secondary-dark",
			},
			{
				variant: "outline",
				color: "secondary",
				className: "text-secondary border-secondary border",
			},
			{
				variant: "ghost",
				color: "secondary",
				className: "text-secondary hover:text-secondary hover:bg-secondary/15",
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
				className: "text-white bg-info hover:bg-info-dark",
			},
			{
				variant: "outline",
				color: "info",
				className: "text-info border-info border",
			},
			{
				variant: "ghost",
				color: "info",
				className: "text-info hover:bg-info/15",
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
				className: "text-white bg-success hover:bg-success-dark",
			},
			{
				variant: "outline",
				color: "success",
				className: "text-success border-success border",
			},
			{
				variant: "ghost",
				color: "success",
				className: "text-success hover:bg-success/15",
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
				className: "text-white bg-warning hover:bg-warning-dark",
			},
			{
				variant: "outline",
				color: "warning",
				className: "text-warning border-warning border",
			},
			{
				variant: "ghost",
				color: "warning",
				className: "text-warning hover:bg-warning/15",
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
				className: "text-white bg-error hover:bg-error-dark",
			},
			{
				variant: "outline",
				color: "error",
				className: "text-error border-error border",
			},
			{
				variant: "ghost",
				color: "error",
				className: "text-error hover:bg-error/15",
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
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				link: "underline-offset-4 hover:underline",
				ghost: "",
				filled: "",
				outline: "",
				soft: "",
			},
			color: {
				default: "text-foreground",
				primary: "",
				secondary: "",
				info: "",
				success: "",
				warning: "",
				error: "",
			},
			size: {
				default: "h-12 text-md",
				sm: "h-9 text-sm",
				md: "h-14 text-base py-4",
				lg: "h-11 text-lg",
				icon: "h-10 text-sm w-10",
			},
		},
		defaultVariants: {
			variant: "filled",
			size: "md",
			color: "default",
		},
	},
);
