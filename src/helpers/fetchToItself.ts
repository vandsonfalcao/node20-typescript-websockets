import { BASE_URL } from "../config/constants.ts";
export function fetchToItself(url: string, options?: RequestInit) {
	const verifiendUrl = url[0] === "/" ? url : `/${url}`;
	return fetch(BASE_URL + verifiendUrl, options);
}
