// ----------------------------------------------------------------------

export function paramCase(str: string) {
	return str
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "");
}

export function snakeCase(str: string) {
	return str
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "_")
		.replace(/[^a-z0-9_]/g, "");
}

export function splitCase(str: string) {
	return str
		.trim()
		.split(/(?=[A-Z])|_/)
		.join(" ");
}

export function slugToTitle(str: string) {
	const words = str.split("-");
	return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
