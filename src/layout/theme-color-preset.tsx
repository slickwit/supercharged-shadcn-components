"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import useStore from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { presetOptions, useSettingStore } from "@/store/settings.store";

// ----------------------------------------------------------------------

type TPresetNames = (typeof presetOptions)[number][0];

export default function PresetsOptions() {
	const settings = useStore(useSettingStore, (state) => state);

	return (
		<div>
			<h4 className="font-bold mb-4 text-base lg:text-lg">Color Presets</h4>
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
							"inline-flex items-center justify-center outline-0 m-0 p-0 cursor-pointer select-none align-middle appearance-none rounded-lg lg:h-14 h-10 border border-border/40",
							selected && "bg-primary/10",
						)}
						onClick={onClick}>
						<span
							className={cn("lg:size-4 size-3 rounded-full transition-transform", selected && "scale-150")}
							style={{
								backgroundColor: color,
							}}
						/>
					</button>
				</TooltipTrigger>
				<TooltipContent
					style={{
						backgroundColor: color,
					}}
					sideOffset={8}>
					<p className="capitalize">{name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
