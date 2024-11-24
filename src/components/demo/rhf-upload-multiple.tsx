"use client";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RHFUploadMultiple } from "@/components/ui/hook-form";
import { Button } from "@/components/ui/buttons/button";

// ----------------------------------------------------------------------

const formSchema = z.object({
	files: z
		.array(
			z.any().refine((file) => {
				if (typeof file !== "object" || !file) {
					return false;
				}
				return typeof file.name === "string" && typeof file.path === "string" && typeof file.preview === "string";
			}, "Invalid File"),
		)
		.min(1, "At least 1 file required."),
});

type TFormSchema = z.infer<typeof formSchema>;

const defaultValues = {
	files: [],
};
export default function RHFUploadMultipleDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = () => {};
	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<div className="max-w-[80%] w-full">
				<RHFUploadMultiple<TFormSchema> name="files" />
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
