"use client";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RHFInput } from "@/components/ui/hook-form";
import { Button } from "@/components/ui/buttons/button";

// ----------------------------------------------------------------------

const formSchema = z.object({
	input: z.string().min(1),
});

type TFormSchema = z.infer<typeof formSchema>;

const defaultValues = {
	input: "",
};
export default function RHFInputDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = () => {};
	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<div className="max-w-72 w-full">
				<RHFInput<TFormSchema> label="Input Label" name="input" />
			</div>
			<div className="mt-10 space-x-3">
				<Button
					variant="filled"
					color="error"
					onClick={() => {
						methods.clearErrors();
						methods.reset(defaultValues);
					}}
					type="button">
					Clear
				</Button>
				<Button variant="filled" color="success" type="submit">
					Submit
				</Button>
			</div>
		</FormProvider>
	);
}
