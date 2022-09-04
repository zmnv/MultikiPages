interface PageType {
	id: string;
	name: string;
	image: string;
}

interface Api {
	animeList: Array<PageType>;
}

export type {Api, PageType}