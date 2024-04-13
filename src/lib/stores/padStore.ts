import { writable } from "svelte/store";

export type EditorStore = {
	answerId: string;
	answerTitle: string;
	answerHtml: string;
	isPublic: boolean;
	owner: string | null;
	hasChanged: boolean;
	lineNumber: number;
	pageNumber: number;
};

const defaultValue = {
	answerId: "",
	answerTitle: "",
	answerHtml: "",
	isPublic: false,
	owner: null,
	hasChanged: false,
	lineNumber: 1,
	pageNumber: 1,
	mode: "view",
};

export const isCharOpen = writable(false);
export const zoomLevel = writable("16");
export const editorStore = writable<EditorStore>(defaultValue);
