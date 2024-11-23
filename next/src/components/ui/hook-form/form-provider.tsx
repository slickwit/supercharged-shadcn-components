import type { ReactNode } from "react";
import { FieldValues, FormProvider as Form, SubmitHandler, type UseFormReturn } from "react-hook-form";

// ----------------------------------------------------------------------

interface FormProviderProps<TFieldValues extends FieldValues = FieldValues> extends UseFormReturn<TFieldValues> {
	className?: string;
	children?: ReactNode;
	onSubmit: SubmitHandler<TFieldValues>;
}

export default function FormProvider<TFieldValues extends FieldValues = FieldValues>({
	children,
	className,
	onSubmit,
	...props
}: FormProviderProps<TFieldValues>) {
	return (
		<Form {...props}>
			<form className={className} onSubmit={props.handleSubmit(onSubmit)}>
				{children}
			</form>
		</Form>
	);
}
