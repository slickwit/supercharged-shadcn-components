"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

const customLabelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const CustomLabel = forwardRef<
	ElementRef<typeof LabelPrimitive.Root>,
	ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof customLabelVariants>
>(({ className, ...props }, ref) => <LabelPrimitive.Root ref={ref} className={cn(customLabelVariants(), className)} {...props} />);
CustomLabel.displayName = LabelPrimitive.Root.displayName;

export { CustomLabel };
