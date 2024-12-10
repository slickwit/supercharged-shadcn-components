"use client";
import { Button } from "@/components/ui/buttons/button";
import FormProvider from "@/components/ui/hook-form/form-provider";
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
import { cn } from "@/lib/utils";

const languages = ["React", "Vue", "Laravel", "Svelte", "HTML"];

const formSchema = z.object({
	normalInput: z.string().min(2),
	firstname: z.string().min(2, {
		message: "Firstname must be at least 2 characters.",
	}),
	lastname: z.string().min(2, {
		message: "Lastname must be at least 2 characters.",
	}),
	gender: z.string().min(2, {
		message: "Gender must be at least 2 characters.",
	}),
	birth: z
		.date()
		.nullable()
		.refine((val) => val !== null, {
			message: "Date is required",
		}),
	description: z.string().min(2),
	language: z.string().min(2),
	languages: z.string().min(2),
	comboboxLanguages: z.string().min(2),
	time: z
		.date()
		.nullable()
		.refine((val) => val !== null, {
			message: "Time is required",
		}),
	remember: z.boolean().refine((val) => val, { message: "Remember field is required" }),
	singleFile: z.any().refine((file) => {
		if (typeof file !== "object" || !file) {
			return false;
		}
		return typeof file.name === "string" && typeof file.path === "string" && typeof file.preview === "string";
	}, "Invalid File"),
	multiFile: z
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

const defaultValues = {
	firstname: "",
	lastname: "",
	gender: "male",
	birth: undefined,
	description: "",
	language: "",
	languages: "",
	comboboxLanguages: "",
	time: undefined,
	remember: false,
	singleFile: null,
	multiFile: [],
};

type TFormSchema = z.infer<typeof formSchema>;

export default function HookFormDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});
	const {
		watch,
		reset,
		clearErrors,
		formState: { errors },
	} = methods;
	console.log({
		values: watch(),
		errors,
	});

	const handleSubmit = (data: TFormSchema) => {
		console.log(data);
	};

	const handleReset = () => {
		clearErrors();
		reset(defaultValues);
	};

	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="space-y-2 w-full">
			<div className="flex flex-col gap-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
					<RHFFloatingInput<TFormSchema> name="firstname" label="Last Name" />

					<RHFFloatingInput<TFormSchema> name="lastname" label="Last Name" />

					<RHFDatePicker<TFormSchema>
						name="birth"
						label="Birth"
						calendarProps={{
							disabled: (date) => date > new Date(),
						}}
					/>
					<RHFTimePicker<TFormSchema> name="time" label="Time" />
				</div>
				<RHFCheckbox<TFormSchema> name="remember" label="Remember me (Checkbox)" />

				<RHFInput<TFormSchema> name="normalInput" label="Normal Input" />

				<div className="flex flex-col gap-3 justify-center">
					<Label className={cn(!!errors.gender && "text-error")}>Gender (Radio Group)</Label>
					<RHFRadioGroup<TFormSchema> name="gender">
						<div className="flex lg:gap-4 gap-2.5 flex-wrap items-center">
							{["male", "female", "others", null].map((gender) => (
								<div key={gender} className="flex items-center space-x-1 lg:space-x-2">
									<RadioGroupItem
										value={gender ?? ""}
										id={gender ?? ""}
										className="group-data-[state-error=true]/radio:border-error group-data-[state-error=true]/radio:text-error"
									/>
									<Label className="capitalize group-data-[state-error=true]/radio:text-error" htmlFor={gender ?? ""}>
										{gender ?? "Error State"}
									</Label>
								</div>
							))}
						</div>
					</RHFRadioGroup>
				</div>
				<RHFTextarea<TFormSchema> name="description" label="Description (Textarea)" rows={6} />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<RHFSelect<TFormSchema> name="language" label="Language (Select)" options={languages.map((l) => ({ value: l, label: l }))} />

					<RHFMultiSelect<TFormSchema>
						name="languages"
						label="Languages (Multi Select)"
						options={languages.map((l) => ({ value: l, label: l }))}
					/>
				</div>

				<RHFCombobox<TFormSchema>
					name="comboboxLanguages"
					label="Languages (Combobox)"
					options={languages.map((l) => ({ value: l, label: l }))}
				/>

				<RHFUpload<TFormSchema> name="singleFile" deletable />

				<RHFUploadMultiple<TFormSchema> name="multiFile" />

				<div className="flex items-center justify-end gap-4">
					<Button variant="filled" color="error" type="button" onClick={handleReset}>
						Reset
					</Button>
					<Button variant="filled" color="success" type="submit">
						Submit
					</Button>
				</div>
			</div>
		</FormProvider>
	);
}
