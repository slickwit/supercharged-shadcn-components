import { rehypeComponent } from "@/config/rehype-components";
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGFM from "remark-gfm";
import { visit } from "unist-util-visit";
import { type UnistNode } from "types/unist";

export const Doc = defineDocumentType(() => ({
	name: "Doc",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
		},
		demo: {
			type: "string",
			required: false,
		},
		source: {
			type: "string",
			required: false,
		},
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => `/${doc._raw.flattenedPath}`,
		},
		slugAsParams: {
			type: "string",
			resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
		},
	},
}));

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Doc],
	mdx: {
		remarkPlugins: [remarkGFM],
		rehypePlugins: [
			rehypeSlug,
			rehypeComponent,
			() => (tree) => {
				visit(tree, (node) => {
					if (node?.type === "element" && node?.tagName === "pre") {
						const [codeEl] = node.children;
						if (codeEl.tagName !== "code") {
							return;
						}

						node.__rawstring__ = codeEl.children?.[0].value;
						node.__src__ = node.properties?.__src__;
					}
				});
			},
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					onVisitLine(node: UnistNode) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children?.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}
					},
					// onVisitHighlightedLine(node) {
					//   node.properties.className.push("line--highlighted")
					// },
					// onVisitHighlightedWord(node) {
					//   node.properties.className = ["word--highlighted"]
					// },
				},
			],
			() => (tree) => {
				visit(tree, (node) => {
					if (node?.type === "element" && node?.tagName === "div") {
						if (!("data-rehype-pretty-code-figure" in node.properties) || !("data-rehype-pretty-code-fragment" in node.properties)) {
							return;
						}

						const preElement = node.children.at(-1);
						if (preElement.tagName !== "pre") {
							return;
						}

						preElement.properties["__rawstring__"] = node.__rawstring__;

						if (node.__src__) {
							preElement.properties["__src__"] = node.__src__;
						}
					}
				});
			},
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["subheading-anchor"],
						ariaLabel: "Link to section",
					},
				},
			],
		],
	},
});
