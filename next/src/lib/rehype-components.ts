import type { UnistNode, UnistTree } from "types/unist";
import { visit } from "unist-util-visit";
import { u } from "unist-builder";
import { demoComponents } from "./demo-components";
import fs from "fs";

// ----------------------------------------------------------------------

export function rehypeComponent() {
	return async (tree: UnistTree) => {
		visit(tree, (node: UnistNode) => {
			if (node.name === "ComponentPreview" || node.name === "ComponentSource") {
				const name = node.attributes?.find((attribute) => attribute.name === "name")?.value as string;
				if (!name) return null;

				try {
					const demo = demoComponents[name];
					const src = demo?.path;

					let source = fs.readFileSync(src, "utf8");
					node.children?.push(
						u("element", {
							tagName: "pre",
							properties: {
								__src__: src,
								__rawString__: source,
							},
							children: [
								u("element", {
									tagName: "code",
									properties: {
										className: ["language-tsx"],
									},
									children: [
										{
											type: "text",
											value: source,
										},
									],
								}),
							],
						}),
					);
				} catch (error) {
					console.error(error);
				}
			}
		});
	};
}
