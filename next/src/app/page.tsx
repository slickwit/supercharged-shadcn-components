import { Button } from "@/components/ui/button";
import { FloatingLabelInput, FloatingLabelTextArea } from "@/components/ui/inputs";

export default function Home() {
	return (
		<>
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
				<FloatingLabelInput label="Username" />
				<FloatingLabelTextArea label="Type here" />
			</div>
		</>
	);
}
