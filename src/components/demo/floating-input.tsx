import { FloatingLabelInput } from "@/components/ui/inputs/floating-label-input";

// ----------------------------------------------------------------------

export default function FloatingInputDemo() {
	return (
		<div className="flex flex-col gap-y-5 w-full max-w-[300px]">
			<FloatingLabelInput label="Floating Label" />
			<h3 className="font-semibold leading-none tracking-tight">With error:</h3>
			<div>
				<FloatingLabelInput label="Floating Label" value="Floating Label Value" error />
				<p className="text-sm ml-1.5 mt-0.5 text-error">Invalid value</p>
			</div>
		</div>
	);
}
