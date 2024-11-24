"use client";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RHFCombobox } from "@/components/ui/hook-form";
import { Button } from "@/components/ui/buttons/button";

// ----------------------------------------------------------------------

const languages = ["React", "Vue", "Laravel", "Svelte", "HTML"];

const formSchema = z.object({
	combobox: z.string().min(1, "Select one item."),
});

type TFormSchema = z.infer<typeof formSchema>;

const defaultValues = {
	combobox: "",
};
export default function RHFComboboxDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = () => {};
	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<div className="max-w-72 w-full">
				<RHFCombobox<TFormSchema> name="combobox" label="Languages" options={languages.map((l) => ({ value: l, label: l }))} />
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
