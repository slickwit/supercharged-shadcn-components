"use client";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RHFCheckbox } from "@/components/ui/hook-form";
import { Button } from "@/components/ui/buttons/button";

// ----------------------------------------------------------------------

const formSchema = z.object({
	remember: z.boolean().refine((val) => val, { message: "Remember field is required" }),
});

type TFormSchema = z.infer<typeof formSchema>;

const defaultValues = {
	remember: false,
};
export default function RHFCheckboxDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = () => {};
	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<RHFCheckbox<TFormSchema> name="remember" label="Remember me" />

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
