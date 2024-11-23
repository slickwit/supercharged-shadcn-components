"use client";
import { Button } from "@/components/ui/buttons/button";
import { FloatingLabelButon } from "@/components/ui/buttons/floating-label-button";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { FloatingLabelInput } from "@/components/ui/inputs/floating-label-input";
import { FloatingLabelTextArea } from "@/components/ui/inputs/floating-label-textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	RHFCheckbox,
	RHFCombobox,
	RHFDatePicker,
	RHFFloatingInput,
	RHFInput,
	RHFMultiSelect,
	RHFRadioGroup,
	RHFSelect,
	RHFTextarea,
	RHFTimePicker,
	RHFUpload,
	RHFUploadMultiple,
} from "@/components/ui/hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

const languages = ["React", "Vue", "Laravel", "Svelte"];

const formSchema = z.object({
	firstname: z.string().min(2, {
		message: "Firstname must be at least 2 characters.",
	}),
	lastname: z.string().min(2, {
		message: "Lastname must be at least 2 characters.",
	}),
	gender: z.string().min(2, {
		message: "Gender must be at least 2 characters.",
	}),
	birth: z.string().min(2),
	description: z.string().min(2),
	language: z.string().min(2),
	languages: z.string().min(2),
	comboboxLanguages: z.string().min(2),
	time: z.string().min(2),
	remember: z.boolean(),
	singleFile: z.any().refine((file) => {
		if (typeof file !== "object" || !file) {
			return false;
		}
		return typeof file.name === "string" && typeof file.path === "string" && typeof file.preview === "string";
	}, "Invalid FileWithPath"),
	multiFile: z.array(z.any()),
});

const defaultValues = {
	firstname: "",
	lastname: "",
	gender: "",
	birth: "",
	description: "",
	language: "",
	languages: "",
	comboboxLanguages: "",
	time: "",
	remember: false,
	singleFile: null,
	multiFile: [],
};

type TFormSchema = z.infer<typeof formSchema>;

export default function GettingStartedPage() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = () => {};
	// console.log(methods.watch());

	return (
		<div className="space-y-2">
			<FloatingLabelButon label="Test" value="test" />
			<div>
				<Button variant="contained">Default</Button>
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="contained" color="secondary">
					Secondary
				</Button>
				<Button variant="contained" color="info">
					Info
				</Button>
				<Button variant="contained" color="warning">
					Warning
				</Button>
				<Button variant="contained" color="success">
					Succes
				</Button>
				<Button variant="contained" color="error">
					Error
				</Button>
			</div>
			<div className="mt-12">
				<FloatingLabelInput label="Username" className="border-gray-500" />
				<FloatingLabelTextArea label="Type here" />
			</div>
			<FormProvider {...methods} onSubmit={handleSubmit}>
				<div className="flex flex-col gap-4">
					<RHFInput<TFormSchema> name="firstname" label="First Name" />
					<RHFFloatingInput<TFormSchema> name="lastname" label="Last Name" />

					<RHFCheckbox<TFormSchema> name="remember" label="Remember me" />

					<RHFDatePicker<TFormSchema>
						name="birth"
						label="Birth"
						calendarProps={{
							disabled: (date) => date > new Date(),
						}}
					/>

					<RHFTimePicker<TFormSchema> name="time" label="Time" />

					<div className="flex flex-col gap-3 justify-center">
						<Label>Gender</Label>
						<RHFRadioGroup<TFormSchema> name="gender">
							<div className="flex space-x-4 items-center">
								{["male", "female", "others"].map((gender) => (
									<div key={gender} className="flex items-center space-x-2">
										<RadioGroupItem
											value={gender}
											id={gender}
											className="group-data-[state-error=true]/radio:border-error group-data-[state-error=true]/radio:text-error"
										/>
										<Label className="capitalize group-data-[state-error=true]/radio:text-error" htmlFor={gender}>
											{gender}
										</Label>
									</div>
								))}
							</div>
						</RHFRadioGroup>
					</div>
					<RHFTextarea<TFormSchema> name="description" label="Description" rows={6} />

					<RHFSelect<TFormSchema> name="language" label="Single Language" options={languages.map((l) => ({ value: l, label: l }))} />

					<RHFMultiSelect<TFormSchema>
						name="languages"
						label="Languages Combobox"
						options={languages.map((l) => ({ value: l, label: l }))}
					/>

					<RHFCombobox<TFormSchema>
						name="comboboxLanguages"
						label="Languages"
						options={languages.map((l) => ({ value: l, label: l }))}
					/>
					<RHFUpload<TFormSchema> name="singleFile" deletable />

					<RHFUploadMultiple<TFormSchema> name="multiFile" />

					<Button variant="contained" color="success">
						Submit
					</Button>
				</div>
			</FormProvider>
		</div>
	);
}
