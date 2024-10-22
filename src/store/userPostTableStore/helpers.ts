export const countWords = (str: string) => {
	const matches = str.match(/[\w\d\’\'-]+/gi);
	return matches ? matches.length : 0;
};