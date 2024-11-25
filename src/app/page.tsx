import { Button } from "@/components/ui/buttons/button";
import { Github } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

// ----------------------------------------------------------------------

export default function Home() {
	return (
		<main className="flex flex-col flex-grow min-h-full py-16 px-1 lg:px-4 w-full container mx-auto">
			<div className="lg:space-y-6 space-y-4">
				<div className="text-center">
					<h1 className="lg:text-5xl text-2xl font-bold lg:leading-loose">Supercharged Shadcn Components</h1>
					<div className="max-w-6xl mx-auto">
						<p className="text-base font-semibold">
							<Balancer>
								Effortlessly build modern React applications with pre-designed, reusable components. Inspired by the best in UI
								design, we make forms simpler, smoother, and development faster—so you can focus on building great experiences.
							</Balancer>
						</p>
						<p className="text-base font-medium italic">Copy and paste into your apps</p>
					</div>
				</div>
				<div className="flex flex-wrap items-center justify-center lg:gap-6 gap-4">
					<div className="flex items-center outline-dashed outline-2 rounded-md px-3 pt-1.5 pb-2">
						<p className="italic text-base leading-tight">Accessible</p>
					</div>
					<div className="flex items-center outline-dashed outline-2 rounded-md px-3 pt-1.5 pb-2">
						<p className="italic text-base leading-tight">Customizable</p>
					</div>
					<div className="flex items-center outline-dashed outline-2 rounded-md px-3 pt-1.5 pb-2">
						<p className="italic text-base leading-tight">Open Source</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-2">
					<div className="flex items-center justify-center gap-x-3">
						<Button asChild variant="outline" color="secondary" className="font-semibold">
							<Link href="/docs/getting-started">Get Started</Link>
						</Button>
						<Button asChild variant="outline" color="secondary" className="font-semibold">
							<Link href="https://github.com/slickwit/supercharged-shadcn-components" target="_blank" rel="noopener noreferrer">
								<Github />
								GitHub
							</Link>
						</Button>
					</div>
					<Button variant="link" asChild className="underline font-semibold">
						<Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
							Learn shadcn/ui
						</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
