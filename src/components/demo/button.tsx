import { Button } from "@/components/ui/buttons/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ----------------------------------------------------------------------

export default function ButtonDemo() {
	return (
		<>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Contained</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2.5 w-full">
					<Button variant="contained" color="default">
						Default
					</Button>
					<Button variant="contained" color="primary">
						Primary
					</Button>
					<Button variant="contained" color="secondary">
						Secondary
					</Button>
					<Button variant="contained" color="success">
						Success
					</Button>
					<Button variant="contained" color="info">
						Info
					</Button>
					<Button variant="contained" color="warning">
						Warning
					</Button>
					<Button variant="contained" color="error">
						Error
					</Button>
				</CardContent>
			</Card>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Outline</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2.5 w-full">
					<Button variant="outline" color="default">
						Default
					</Button>
					<Button variant="outline" color="primary">
						Primary
					</Button>
					<Button variant="outline" color="secondary">
						Secondary
					</Button>
					<Button variant="outline" color="success">
						Success
					</Button>
					<Button variant="outline" color="info">
						Info
					</Button>
					<Button variant="outline" color="warning">
						Warning
					</Button>
					<Button variant="outline" color="error">
						Error
					</Button>
				</CardContent>
			</Card>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Soft</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2.5 w-full">
					<Button variant="soft" color="default">
						Default
					</Button>
					<Button variant="soft" color="primary">
						Primary
					</Button>
					<Button variant="soft" color="secondary">
						Secondary
					</Button>
					<Button variant="soft" color="success">
						Success
					</Button>
					<Button variant="soft" color="info">
						Info
					</Button>
					<Button variant="soft" color="warning">
						Warning
					</Button>
					<Button variant="soft" color="error">
						Error
					</Button>
				</CardContent>
			</Card>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Ghost</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2.5 w-full">
					<Button variant="ghost" color="default">
						Default
					</Button>
					<Button variant="ghost" color="primary">
						Primary
					</Button>
					<Button variant="ghost" color="secondary">
						Secondary
					</Button>
					<Button variant="ghost" color="success">
						Success
					</Button>
					<Button variant="ghost" color="info">
						Info
					</Button>
					<Button variant="ghost" color="warning">
						Warning
					</Button>
					<Button variant="ghost" color="error">
						Error
					</Button>
				</CardContent>
			</Card>
		</>
	);
}