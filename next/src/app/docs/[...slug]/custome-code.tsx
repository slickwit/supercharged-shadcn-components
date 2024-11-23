import * as React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export async function Code({ code }: { code: string }) {
	const rawCode = ` 
\`\`\`tsx
${code}
\`\`\`
`;
	const highlightedCode = await highlightCode(rawCode);
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: highlightedCode,
			}}
		/>
	);
}

async function highlightCode(code: string) {
	const file = await unified()
		.use(remarkParse) // Parse the Markdown
		.use(remarkRehype) // Convert Markdown AST to HTML AST
		.use(rehypePrettyCode, {
			theme: "github-dark", // Specify the code theme
		})
		.use(rehypeStringify) // Convert the HTML AST to HTML
		.process(code);

	return String(file);
}
