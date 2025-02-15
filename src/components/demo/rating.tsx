import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Rating from "@/components/ui/rating";
import { Apple, Flame, Heart } from "lucide-react";

// ----------------------------------------------------------------------

export default function RatingDemo() {
	return (
		<>
			<Card className="w-full flex-row flex items-center flex-wrap">
				<div>
					<CardHeader>
						<CardTitle>Default</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating defaultSelected={3} totalStars={5} />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Default (Hover Select)</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating defaultSelected={0} totalStars={5} hoverable selectOnHover />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Default (Not Hoverable)</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating defaultSelected={0} totalStars={5} hoverable={false} />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Custom Total Star</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating defaultSelected={0} totalStars={3} />
					</CardContent>
				</div>
			</Card>
			<Card className="w-full flex-row flex items-center flex-wrap">
				<div>
					<CardHeader>
						<CardTitle>Primary</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating color="primary" defaultSelected={2} totalStars={5} />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Secondary</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating color="secondary" defaultSelected={2} totalStars={5} />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Success</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating color="success" defaultSelected={2} totalStars={5} />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Info</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating color="info" defaultSelected={2} totalStars={5} />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Warning</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating color="warning" defaultSelected={2} totalStars={5} />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Error</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating color="error" defaultSelected={2} totalStars={5} />
					</CardContent>
				</div>
			</Card>
			<Card className="w-full flex-row flex items-center flex-wrap">
				<div>
					<CardHeader>
						<CardTitle>Small</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating defaultSelected={0} totalStars={5} size="sm" />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Medium (Default)</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating defaultSelected={0} totalStars={5} size="md" />
					</CardContent>
				</div>
				<div>
					<CardHeader>
						<CardTitle>Large</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating defaultSelected={0} totalStars={5} size="lg" />
					</CardContent>
				</div>
			</Card>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Custom Icon</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2.5 sm:gap-6 w-full">
					<Rating color="error" Icon={Heart} defaultSelected={1} totalStars={5} />
					<Rating color="success" Icon={Apple} defaultSelected={2} totalStars={5} />
					<Rating
						className="[&_.selected-star>svg]:text-red-700 [&_.selected-star>svg]:red-700"
						Icon={Flame}
						defaultSelected={3}
						totalStars={5}
					/>
				</CardContent>
			</Card>
		</>
	);
}
