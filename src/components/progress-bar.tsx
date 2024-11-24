"use client";
import { type ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

// ----------------------------------------------------------------------

interface ProgressBarProviderProps {
	children?: ReactNode;
}

export default function ProgressBarProvider({ children }: ProgressBarProviderProps) {
	return (
		<>
			{children}
			<ProgressBar height="2px" options={{ showSpinner: false }} shallowRouting={false} />
		</>
	);
}
