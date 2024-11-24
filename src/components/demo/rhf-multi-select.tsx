"use client";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RHFMultiSelect } from "@/components/ui/hook-form";
import { Button } from "@/components/ui/buttons/button";

// ----------------------------------------------------------------------

const languages = ["React", "Vue", "Laravel", "Svelte", "HTML"];

const formSchema = z.object({
	multiSelect: z.string().min(1),
});

type TFormSchema = z.infer<typeof formSchema>;

const defaultValues = {
	multiSelect: "",
};
export default function RHFMultiSelectDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = () => {};
	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<div className="max-w-72 w-full">
				<RHFMultiSelect<TFormSchema>
					label="Select Multiple Item"
					name="multiSelect"
					options={languages.map((l) => ({ value: l, label: l }))}
				/>
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
