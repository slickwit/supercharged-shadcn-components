import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BuyMeCoffeeProps {
	className?: string;
	width?: number;
	height?: number;
	src?: string;
}
const BuyMeCoffee = ({ className, width = 145, height = 45, src = "/assets/bmc-button.png" }: BuyMeCoffeeProps) => {
	return (
		<Link href="https://www.buymeacoffee.com/dykennethrx" target="_blank" className={className}>
			<Image src={src} alt="Buy Me A Coffee" width={width} height={height} />
		</Link>
	);
};

export default BuyMeCoffee;
