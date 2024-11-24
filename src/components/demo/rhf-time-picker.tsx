"use client";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RHFTimePicker } from "@/components/ui/hook-form";
import { Button } from "@/components/ui/buttons/button";

// ----------------------------------------------------------------------

const formSchema = z.object({
	time: z
		.date()
		.nullable()
		.refine((val) => val !== null, {
			message: "Date is required",
		}),
});

type TFormSchema = z.infer<typeof formSchema>;

const defaultValues = {
	time: undefined,
};
export default function RHFTimePickerDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = () => {};
	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<div className="max-w-72 w-full">
				<RHFTimePicker<TFormSchema> name="time" label="Select A Time" />
			</div>
			<div className="mt-10 space-x-3">
				<Button
					variant="contained"
					color="error"
					onClick={() => {
						methods.clearErrors();
						methods.reset(defaultValues);
					}}
					type="button">
					Clear
				</Button>
				<Button variant="contained" color="success" type="submit">
					Submit
				</Button>
			</div>
		</FormProvider>
	);
}
