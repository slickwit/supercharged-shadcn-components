import { Node } from "unist-builder";

export interface UnistNode extends Node {
	type: string;
	name?: string;
	tagName?: string;
	value?: string;
	attributes?: {
		name: string;
		value: unknown;
		type?: string;
	}[];
	children?: UnistNode[];
}

export interface UnistTree extends Node {
	children: UnistNode[];
}
