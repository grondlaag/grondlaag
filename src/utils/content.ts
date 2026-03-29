export function getExcerpt(body: string, fallback: string, maxLength = 180) {
	const cleaned = body
		.replace(/[#>*_`[\]]/g, '')
		.replace(/\((.*?)\)/g, '')
		.replace(/\s+/g, ' ')
		.trim();

	if (!cleaned) {
		return fallback;
	}

	if (cleaned.length <= maxLength) {
		return cleaned;
	}

	return `${cleaned.slice(0, maxLength).trim()}...`;
}

export function sortByManualOrder<T extends { data: { order?: number } }>(items: T[]) {
	// Handmatige volgorde uit frontmatter krijgt voorrang; items zonder order komen onderaan.
	return [...items].sort((a, b) => {
		const left = a.data.order;
		const right = b.data.order;

		if (left === undefined && right === undefined) {
			return 0;
		}

		if (left === undefined) {
			return 1;
		}

		if (right === undefined) {
			return -1;
		}

		return left - right;
	});
}
