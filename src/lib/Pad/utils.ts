export const getPageNumber = (lineNumber: number) => {
	let pageNumber = 0;
	pageBreakLineNs.forEach((v, i) => {
		if (lineNumber >= v) {
			pageNumber = i + 1;
		}
	});
	return pageNumber;
};

export const pageBreakLineNs = [
	1, 31, 65, 99, 133, 163, 197, 231, 265, 295, 329,
];
