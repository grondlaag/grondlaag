export type StatusTone = 'available' | 'full' | 'soon';

export function getStatusPresentation(status?: string) {
	switch (status?.toLowerCase()) {
		case 'beschikbaar':
			return { label: 'beschikbaar', tone: 'available' as const };
		case 'volzet':
			return { label: 'volzet', tone: 'full' as const };
		case 'voorzien':
		case 'binnenkort':
		case 'in opbouw':
			return { label: 'binnenkort', tone: 'soon' as const };
		default:
			return undefined;
	}
}
