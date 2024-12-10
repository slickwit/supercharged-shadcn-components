"use client";
import FormProvider from "@/components/ui/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RHFRadioGroup } from "@/components/ui/hook-form";
import { Button } from "@/components/ui/buttons/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { RadioGroupItem } from "@/components/ui/radio-group";

// ----------------------------------------------------------------------

const formSchema = z.object({
	gender: z.string().min(1),
});

type TFormSchema = z.infer<typeof formSchema>;

const defaultValues = {
	gender: "male",
};
export default function RHFRadioGroupDemo() {
	const methods = useForm<TFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});
	const {
		formState: { errors },
	} = methods;

	const handleSubmit = () => {};
	return (
		<FormProvider {...methods} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
			<div className="max-w-96 w-full">
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
