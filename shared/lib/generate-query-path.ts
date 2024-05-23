export const generateQueryPath = <T extends Record<string, any>>(paths: T, basePath: string) => {
	return Object.entries(paths).reduce((acc, el) => acc + "/" + el[1], basePath);
};
