"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const presetOptions = [
	["default", "#16a34a"],
	["orange", "#F97316"],
	["blue", "#2563EB"],
	["rose", "#E11D48"],
	["zinc", "#18181B"],
	["purple", "#7738DC"],
] as const;

export interface ISettings {
	_hasHydrated: boolean;
	themeColorPresets: "default" | "purple" | "blue" | "orange" | "rose" | "zinc";
}

export interface ISettingActions {
	setHasHydrated: (state: boolean) => void;
	update: <Key extends keyof ISettings>(name: Key, value: ISettings[Key]) => void;
}

const defaultSettings: ISettings = {
	_hasHydrated: false,
	themeColorPresets: "default", // 'default' | 'purple' | 'blue' | 'orange' | 'rose' | 'zinc'
} as const;

export const useSettingStore = create<ISettings & ISettingActions>()(
	persist(
		(set, get) => ({
			...defaultSettings,
			setHasHydrated: (state) => {
				const preset = get().themeColorPresets;
				if (!!document && document?.documentElement?.getAttribute?.("data-theme") !== preset) {
					document.documentElement.setAttribute("data-theme", preset);
				}
				set({
					_hasHydrated: state,
				});
			},
			update: (setting, value) => {
				set(() => ({ [setting]: value }));
			},
		}),
		{
			name: "settings",
			onRehydrateStorage: (state) => {
				return () => state.setHasHydrated(true);
			},
		},
	),
);
