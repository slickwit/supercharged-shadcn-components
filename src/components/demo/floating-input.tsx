import { FloatingLabelInput } from "@/components/ui/inputs/floating-label-input";

// ----------------------------------------------------------------------

export default function FloatingInputDemo() {
	return (
		<div className="flex flex-col gap-y-5 w-full max-w-[300px]">
			<FloatingLabelInput label="Floating Label" />
			<FloatingLabelInput label="Floating Label MD" size="md" />
			<FloatingLabelInput label="Floating Label LG" size="lg" />
			<h3 className="font-semibold leading-none tracking-tight">With error:</h3>
			<div>
				<FloatingLabelInput label="Floating Label" value="Floating Label Example Value" error />
				<p className="text-sm ml-1.5 mt-0.5 text-error">Invalid value</p>
			</div>
		</div>
	);
}
