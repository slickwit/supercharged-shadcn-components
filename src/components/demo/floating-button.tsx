import { FloatingLabelButon } from "@/components/ui/buttons/floating-label-button";
import { Calendar } from "lucide-react";

// ----------------------------------------------------------------------

export default function ButtonDemo() {
	return (
		<div className="flex flex-col gap-y-5 w-full max-w-[300px]">
			<FloatingLabelButon label="Floating Button Label" value="Floating Button Value" className="w-full" />
			<h3 className="font-semibold leading-none tracking-tight">With start icon</h3>
			<FloatingLabelButon label="Floating Button With Calendar" value="" className="w-full" startIcon={<Calendar />} />
			<FloatingLabelButon label="Floating Button Label" value="November 6th, 2024" className="w-full" startIcon={<Calendar />} />
			<h3 className="font-semibold leading-none tracking-tight">With end icon</h3>
			<FloatingLabelButon label="Floating Button With Calendar" value="" className="w-full" endIcon={<Calendar />} />
			<FloatingLabelButon label="Floating Button Label" value="November 6th, 2024" className="w-full" endIcon={<Calendar />} />
		</div>
	);
}
