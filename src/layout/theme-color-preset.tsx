"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import useStore from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { useSettingStore } from "@/store/settings.store";

// ----------------------------------------------------------------------

export const presetOptions = [
	["default", "#16a34a"],
	["orange", "#F97316"],
	["blue", "#2563EB"],
	["rose", "#E11D48"],
	["zinc", "#18181B"],
	["purple", "#7738DC"],
] as const;

type TPresetNames = (typeof presetOptions)[number][0];

export default function PresetsOptions() {
	const settings = useStore(useSettingStore, (state) => state);

	return (
		<div>
			<h4 className="font-bold mb-4 text-lg">Color Presets</h4>
			<div className="grid grid-cols-3 gap-x-4 gap-y-3">
				{presetOptions.map(([name, color]) => {
					const selected = name === settings?.themeColorPresets;
					return (
						<ColorButton
							key={name}
							name={name}
							onClick={() => {
								document.documentElement.setAttribute("data-theme", name);
								settings?.update("themeColorPresets", name);
							}}
							color={color}
							selected={selected}
						/>
					);
				})}
			</div>
		</div>
	);
}

function ColorButton({ name, color, selected, onClick }: { name: TPresetNames; color: string; selected: boolean; onClick: () => void }) {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={250}>
				<TooltipTrigger asChild>
					<button
						className={cn(
							"inline-flex items-center justify-center outline-0 m-0 p-0 cursor-pointer select-none align-middle appearance-none rounded-lg h-14 border border-border/40",
							selected && "bg-primary/10",
						)}
						onClick={onClick}>
						<div
							className={cn("w-4 h-4 rounded-full transition-transform", selected && "scale-150")}
							style={{
								backgroundColor: color,
							}}
						/>
					</button>
				</TooltipTrigger>
				<TooltipContent
					style={{
						backgroundColor: color,
					}}>
					<p className="capitalize">{name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
