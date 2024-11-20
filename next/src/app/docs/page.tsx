"use client";
// import { Button } from "@/components/ui/buttons";
// import FormProvider from "@/components/ui/hook-form/form-provider";
// import { FloatingLabelInput, FloatingLabelTextArea } from "@/components/ui/inputs";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import {
// 	RHFCheckbox,
// 	RHFCombobox,
// 	RHFDatePicker,
// 	RHFFloatingInput,
// 	RHFInput,
// 	RHFMultiSelect,
// 	RHFRadioGroup,
// 	RHFSelect,
// 	RHFTextarea,
// 	RHFTimePicker,
// 	RHFUpload,
// 	RHFUploadMultiple,
// } from "@/components/ui/hook-form";
// import { Label } from "@/components/ui/label";
// import { RadioGroupItem } from "@/components/ui/radio-group";
import AppHeader from "@/layout/app-header";

// const languages = ["React", "Vue", "Laravel", "Svelte"];

// const formSchema = z.object({
// 	firstname: z.string().min(2, {
// 		message: "Firstname must be at least 2 characters.",
// 	}),
// 	lastname: z.string().min(2, {
// 		message: "Lastname must be at least 2 characters.",
// 	}),
// 	gender: z.string().min(2, {
// 		message: "Gender must be at least 2 characters.",
// 	}),
// 	birth: z.string().min(2),
// 	description: z.string().min(2),
// 	language: z.string().min(2),
// 	languages: z.string().min(2),
// 	comboboxLanguages: z.string().min(2),
// 	time: z.string().min(2),
// 	remember: z.boolean(),
// 	singleFile: z.any().refine((file) => {
// 		if (typeof file !== "object" || !file) {
// 			return false;
// 		}
// 		return typeof file.name === "string" && typeof file.path === "string" && typeof file.preview === "string";
// 	}, "Invalid FileWithPath"),
// 	multiFile: z.array(z.any()),
// });

// const defaultValues = {
// 	firstname: "",
// 	lastname: "",
// 	gender: "",
// 	birth: "",
// 	description: "",
// 	language: "",
// 	languages: "",
// 	comboboxLanguages: "",
// 	time: "",
// 	remember: false,
// 	singleFile: null,
// 	multiFile: [],
// };

// type TFormSchema = z.infer<typeof formSchema>;

export default function Home() {
	// const methods = useForm<TFormSchema>({
	// 	resolver: zodResolver(formSchema),
	// 	defaultValues,
	// });

	// const handleSubmit = () => {};
	// console.log(methods.watch());

	return (
		<>
			<AppHeader />
			<div className="container mx-auto p-4 mt-16"></div>
		</>
	);
}
