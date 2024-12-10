import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Chip } from "@/components/ui/chip";
import { Check, Smile } from "lucide-react";

// ----------------------------------------------------------------------

export default function ChipDemo() {
	return (
		<>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Contained</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2.5 w-full">
					<div className="flex flex-wrap gap-2.5">
						<Chip variant="contained" color="default" label="Default" />
						<Chip variant="contained" color="default" label="No Delete" deletable={false} />
						<Chip variant="contained" color="default" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="contained" color="default" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="contained" color="default" label="Clickable" onClick={() => {}} />
						<Chip variant="contained" color="default" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="contained" color="primary" label="Primary" />
						<Chip variant="contained" color="primary" label="No Delete" deletable={false} />
						<Chip variant="contained" color="primary" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="contained" color="primary" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="contained" color="primary" label="Clickable" onClick={() => {}} />
						<Chip variant="contained" color="primary" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="contained" color="secondary" label="Secondary" />
						<Chip variant="contained" color="secondary" label="No Delete" deletable={false} />
						<Chip variant="contained" color="secondary" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="contained" color="secondary" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="contained" color="secondary" label="Clickable" onClick={() => {}} />
						<Chip variant="contained" color="secondary" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="contained" color="info" label="Info" />
						<Chip variant="contained" color="info" label="No Delete" deletable={false} />
						<Chip variant="contained" color="info" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="contained" color="info" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="contained" color="info" label="Clickable" onClick={() => {}} />
						<Chip variant="contained" color="info" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="contained" color="success" label="Success" />
						<Chip variant="contained" color="success" label="No Delete" deletable={false} />
						<Chip variant="contained" color="success" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="contained" color="success" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="contained" color="success" label="Clickable" onClick={() => {}} />
						<Chip variant="contained" color="success" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="contained" color="warning" label="Warning" />
						<Chip variant="contained" color="warning" label="No Delete" deletable={false} />
						<Chip variant="contained" color="warning" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="contained" color="warning" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="contained" color="warning" label="Clickable" onClick={() => {}} />
						<Chip variant="contained" color="warning" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="contained" color="error" label="Error" />
						<Chip variant="contained" color="error" label="No Delete" deletable={false} />
						<Chip variant="contained" color="error" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="contained" color="error" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="contained" color="error" label="Clickable" onClick={() => {}} />
						<Chip variant="contained" color="error" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>
				</CardContent>
			</Card>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Outline</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2.5 w-full">
					<div className="flex flex-wrap gap-2.5">
						<Chip variant="outline" color="default" label="Default" />
						<Chip variant="outline" color="default" label="No Delete" deletable={false} />
						<Chip variant="outline" color="default" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="outline" color="default" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="outline" color="default" label="Clickable" onClick={() => {}} />
						<Chip variant="outline" color="default" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="outline" color="primary" label="Primary" />
						<Chip variant="outline" color="primary" label="No Delete" deletable={false} />
						<Chip variant="outline" color="primary" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="outline" color="primary" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="outline" color="primary" label="Clickable" onClick={() => {}} />
						<Chip variant="outline" color="primary" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="outline" color="secondary" label="Secondary" />
						<Chip variant="outline" color="secondary" label="No Delete" deletable={false} />
						<Chip variant="outline" color="secondary" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="outline" color="secondary" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="outline" color="secondary" label="Clickable" onClick={() => {}} />
						<Chip variant="outline" color="secondary" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="outline" color="info" label="Info" />
						<Chip variant="outline" color="info" label="No Delete" deletable={false} />
						<Chip variant="outline" color="info" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="outline" color="info" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="outline" color="info" label="Clickable" onClick={() => {}} />
						<Chip variant="outline" color="info" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="outline" color="success" label="Success" />
						<Chip variant="outline" color="success" label="No Delete" deletable={false} />
						<Chip variant="outline" color="success" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="outline" color="success" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="outline" color="success" label="Clickable" onClick={() => {}} />
						<Chip variant="outline" color="success" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="outline" color="warning" label="Warning" />
						<Chip variant="outline" color="warning" label="No Delete" deletable={false} />
						<Chip variant="outline" color="warning" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="outline" color="warning" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="outline" color="warning" label="Clickable" onClick={() => {}} />
						<Chip variant="outline" color="warning" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="outline" color="error" label="Error" />
						<Chip variant="outline" color="error" label="No Delete" deletable={false} />
						<Chip variant="outline" color="error" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="outline" color="error" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="outline" color="error" label="Clickable" onClick={() => {}} />
						<Chip variant="outline" color="error" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>
				</CardContent>
			</Card>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Soft</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2.5 w-full">
					<div className="flex flex-wrap gap-2.5">
						<Chip variant="soft" color="default" label="Default" />
						<Chip variant="soft" color="default" label="No Delete" deletable={false} />
						<Chip variant="soft" color="default" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="soft" color="default" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="soft" color="default" label="Clickable" onClick={() => {}} />
						<Chip variant="soft" color="default" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="soft" color="primary" label="Primary" />
						<Chip variant="soft" color="primary" label="No Delete" deletable={false} />
						<Chip variant="soft" color="primary" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="soft" color="primary" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="soft" color="primary" label="Clickable" onClick={() => {}} />
						<Chip variant="soft" color="primary" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="soft" color="secondary" label="Secondary" />
						<Chip variant="soft" color="secondary" label="No Delete" deletable={false} />
						<Chip variant="soft" color="secondary" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="soft" color="secondary" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="soft" color="secondary" label="Clickable" onClick={() => {}} />
						<Chip variant="soft" color="secondary" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="soft" color="info" label="Info" />
						<Chip variant="soft" color="info" label="No Delete" deletable={false} />
						<Chip variant="soft" color="info" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="soft" color="info" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="soft" color="info" label="Clickable" onClick={() => {}} />
						<Chip variant="soft" color="info" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="soft" color="success" label="Success" />
						<Chip variant="soft" color="success" label="No Delete" deletable={false} />
						<Chip variant="soft" color="success" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="soft" color="success" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="soft" color="success" label="Clickable" onClick={() => {}} />
						<Chip variant="soft" color="success" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="soft" color="warning" label="Warning" />
						<Chip variant="soft" color="warning" label="No Delete" deletable={false} />
						<Chip variant="soft" color="warning" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="soft" color="warning" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="soft" color="warning" label="Clickable" onClick={() => {}} />
						<Chip variant="soft" color="warning" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>

					<div className="flex flex-wrap gap-2.5">
						<Chip variant="soft" color="error" label="Error" />
						<Chip variant="soft" color="error" label="No Delete" deletable={false} />
						<Chip variant="soft" color="error" label="Custom Icon" avatar={<Smile />} />
						<Chip variant="soft" color="error" label="With Avatar" avatar={<AvatarDemo />} />
						<Chip variant="soft" color="error" label="Clickable" onClick={() => {}} />
						<Chip variant="soft" color="error" label="Custom Delete Icon" deleteIcon={<Check strokeWidth={4} />} />
					</div>
				</CardContent>
			</Card>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Rounded & Sizes</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2.5 w-full">
					<div className="flex flex-wrap gap-2.5 items-center">
						<Chip className="rounded-full" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" variant="outline" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" variant="outline" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" variant="soft" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" variant="soft" label="Small" size="sm" avatar={<AvatarDemo />} />
					</div>
					<div className="flex flex-wrap gap-2.5 items-center">
						<Chip className="rounded-full" color="primary" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="primary" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="primary" variant="outline" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="primary" variant="outline" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="primary" variant="soft" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="primary" variant="soft" label="Small" size="sm" avatar={<AvatarDemo />} />
					</div>
					<div className="flex flex-wrap gap-2.5 items-center">
						<Chip className="rounded-full" color="secondary" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="secondary" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="secondary" variant="outline" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="secondary" variant="outline" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="secondary" variant="soft" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="secondary" variant="soft" label="Small" size="sm" avatar={<AvatarDemo />} />
					</div>
					<div className="flex flex-wrap gap-2.5 items-center">
						<Chip className="rounded-full" color="info" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="info" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="info" variant="outline" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="info" variant="outline" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="info" variant="soft" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="info" variant="soft" label="Small" size="sm" avatar={<AvatarDemo />} />
					</div>
					<div className="flex flex-wrap gap-2.5 items-center">
						<Chip className="rounded-full" color="warning" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="warning" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="warning" variant="outline" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="warning" variant="outline" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="warning" variant="soft" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="warning" variant="soft" label="Small" size="sm" avatar={<AvatarDemo />} />
					</div>
					<div className="flex flex-wrap gap-2.5 items-center">
						<Chip className="rounded-full" color="error" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="error" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="error" variant="outline" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="error" variant="outline" label="Small" size="sm" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="error" variant="soft" label="Medium" avatar={<AvatarDemo />} />
						<Chip className="rounded-full" color="error" variant="soft" label="Small" size="sm" avatar={<AvatarDemo />} />
					</div>
				</CardContent>
			</Card>
		</>
	);
}

function AvatarDemo() {
	return (
		<Avatar className="size-6">
			<AvatarImage src="/assets/rick.jpg" alt="@shadcn" />
			<AvatarFallback>RC</AvatarFallback>
		</Avatar>
	);
}
