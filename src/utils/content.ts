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
