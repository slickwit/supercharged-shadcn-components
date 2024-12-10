import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------

const chipVariants = cva(
	"inline-flex items-center select-none appearance-none rounded-md font-medium text-sm text-white transition-[background-color] data-[clickable=true]:cursor-pointer",
	{
		compoundVariants: [
			// Default color
			{
				variant: "contained",
				color: "default",
				className: "bg-foreground/90 dark:bg-foreground text-accent data-[clickable=true]:hover:bg-foreground/65",
			},
			{
				variant: "outline",
				color: "default",
				className: "text-foreground border-foreground border data-[clickable=true]:hover:bg-muted-foreground/10",
			},
			{
				variant: "soft",
				color: "default",
				className:
					"text-foreground dark:bg-accent/35 bg-accent data-[clickable=true]:hover:bg-foreground/15 dark:data-[clickable=true]:hover:bg-accent/65",
			},
			// Primary color
			{
				variant: "contained",
				color: "primary",
				className: "bg-primary data-[clickable=true]:hover:bg-primary/80",
			},
			{
				variant: "outline",
				color: "primary",
				className: "text-primary border-primary border data-[clickable=true]:hover:bg-primary/5",
			},
			{
				variant: "soft",
				color: "primary",
				className: "text-primary bg-primary/15 data-[clickable=true]:hover:bg-primary/35",
			},
			// Secondary color
			{
				variant: "contained",
				color: "secondary",
				className: "bg-secondary data-[clickable=true]:hover:bg-secondary/80",
			},
			{
				variant: "outline",
				color: "secondary",
				className: "text-secondary border-secondary border data-[clickable=true]:hover:bg-secondary/5",
			},
			{
				variant: "soft",
				color: "secondary",
				className: "text-secondary bg-secondary/15 data-[clickable=true]:hover:bg-secondary/35",
			},
			// Info color
			{
				variant: "contained",
				color: "info",
				className: "text-white bg-info data-[clickable=true]:hover:bg-info/90",
			},
			{
				variant: "outline",
				color: "info",
				className: "text-info border-info border data-[clickable=true]:hover:bg-info/5",
			},
			{
				variant: "soft",
				color: "info",
				className: "text-info bg-info/15 data-[clickable=true]:hover:bg-info/35",
			},
			// Success color
			{
				variant: "contained",
				color: "success",
				className: "text-white bg-success data-[clickable=true]:hover:bg-success/90",
			},
			{
				variant: "outline",
				color: "success",
				className: "text-success border-success border data-[clickable=true]:hover:bg-success/5",
			},
			{
				variant: "soft",
				color: "success",
				className: "text-success bg-success/15 data-[clickable=true]:hover:bg-success/35",
			},
			// Warning color
			{
				variant: "contained",
				color: "warning",
				className: "text-white bg-warning data-[clickable=true]:hover:bg-warning/90",
			},
			{
				variant: "outline",
				color: "warning",
				className: "text-warning border-warning border data-[clickable=true]:hover:bg-warning/5",
			},
			{
				variant: "soft",
				color: "warning",
				className: "text-warning bg-warning/15 data-[clickable=true]:hover:bg-warning/35",
			},
			// Error color
			{
				variant: "contained",
				color: "error",
				className: "text-white bg-error data-[clickable=true]:hover:bg-error/90",
			},
			{
				variant: "outline",
				color: "error",
				className: "text-error border-error border data-[clickable=true]:hover:bg-error/5",
			},
			{
				variant: "soft",
				color: "error",
				className: "text-error bg-error/15 data-[clickable=true]:hover:bg-error/35",
			},
		],
		variants: {
			variant: {
				contained: "",
				outline: "bg-transparent",
				soft: "",
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
			size: {
				sm: "h-6 [&>.label]:px-2 [&>.start-icon]:size-5 [&>.start-icon>span]:size-5 [&>.start-icon>svg]:size-5 [&>.start-icon]:ml-0.5 [&>.start-icon]:-mr-1 [&>.deletable]:mr-0.5 [&>.deletable]:-ml-1",
				md: "h-8 [&>.label]:px-3 [&>.start-icon]:size-6 [&>.start-icon>span]:size-6 [&>.start-icon>svg]:size-6 [&>.start-icon]:ml-1 [&>.start-icon]:-mr-1.5 [&>.deletable]:mr-1 [&>.deletable]:-ml-1.5",
			},
		},
		defaultVariants: {
			color: "default",
			variant: "contained",
			size: "md",
		},
	},
);

const deletableVariants = cva(
	"cursor-pointer rounded-full flex items-center justify-center transition-[background-color] [&_svg]:text-current size-4 [&_svg]:size-2.5",
	{
		variants: {
			variant: {
				contained: "data-[variant=contained]:bg-white/45 data-[variant=contained]:hover:bg-white/80",
				outline: "text-accent",
				soft: "text-accent",
			},
			color: {
				default:
					"data-[variant=contained]:bg-accent/80 data-[variant=contained]:hover:bg-accent data-[variant=contained]:text-foreground bg-foreground/65 hover:bg-foreground",
				primary: "data-[variant=contained]:text-primary bg-primary/65 hover:bg-primary",
				secondary: "data-[variant=contained]:text-secondary bg-secondary/65 hover:bg-secondary",
				info: "data-[variant=contained]:text-info bg-info/65 hover:bg-info",
				success: "data-[variant=contained]:text-success bg-success/65 hover:bg-success",
				warning: "data-[variant=contained]:text-warning bg-warning/65 hover:bg-warning",
				error: "data-[variant=contained]:text-error bg-error/65 hover:bg-error",
			},
		},
		defaultVariants: {
			color: "default",
			variant: "contained",
		},
	},
);

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof chipVariants> {
	size?: "sm" | "md";
	label: string;
	deletable?: boolean;
	avatar?: JSX.Element;
	deleteIcon?: JSX.Element;
}

function Chip({
	label,
	variant = "contained",
	size = "md",
	color = "default",
	avatar,
	deletable = true,
	deleteIcon,
	onClick,
	className,
}: ChipProps) {
	return (
		<div className={cn(chipVariants({ variant, color, className, size }))} data-clickable={!!onClick} onClick={onClick}>
			{!!avatar && <div className="start-icon">{avatar}</div>}
			<p className="label">{label}</p>
			{!!deletable && (
				<div className={cn(deletableVariants({ variant, color }), "deletable")} data-variant={variant} data-color={color}>
					{deleteIcon ?? <X strokeWidth={3} />}
				</div>
			)}
		</div>
	);
}

export { Chip };
