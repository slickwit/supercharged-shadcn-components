import { FloatingLabelTextArea } from "@/components/ui/inputs/floating-label-textarea";

// ----------------------------------------------------------------------

export default function FloatingTextareaDemo() {
	return (
		<div className="flex flex-col gap-y-5 max-w-[600px] w-full">
			<FloatingLabelTextArea label="Floating Label" className="w-full" rows={6} />
			<h3 className="font-semibold leading-none tracking-tight">With error:</h3>
			<div>
				<FloatingLabelTextArea label="Floating Label" error />
				<p className="text-sm ml-1.5 mt-0.5 text-error">Textarea is required.</p>
			</div>
		</div>
	);
}
