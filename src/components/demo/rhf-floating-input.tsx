"use client";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RHFFloatingInput } from "@/components/ui/hook-form";
import { Button } from "@/components/ui/buttons/button";

// ----------------------------------------------------------------------

const formSchema = z.object({
	floatingInput: z.string().min(1),
});

type TFormSchema = z.infer<typeof formSchema>;

const defaultValues = {
	floatingInput: undefined,
};
export default function RHFFloatingInputDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = () => {};
	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<div className="max-w-72 w-full">
				<RHFFloatingInput<TFormSchema> label="Floating Label" name="floatingInput" />
			</div>
			<div className="mt-10 space-x-3">
				<Button
					variant="contained"
					color="error"
					onClick={() => {
						methods.clearErrors();
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
