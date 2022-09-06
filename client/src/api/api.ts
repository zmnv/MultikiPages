import axios, { AxiosResponse } from 'axios';
import { PageType } from '../types/post.interfase'

const instance = axios.create({
	baseURL: 'http://localhost:4000/api/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

// FYI: это оверинжениринг лишний, у axios и так это всё есть, 
// это бесмысленный код в данном ключе, только усложняет.
// это может понадобиться для разных инстансов, для очень сложных вещей
// и когда их дохера.
const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Post = {
	// TODO: getAnimeList
	getPosts: (): Promise<PageType[]> => requests.get('anime'),
	// TODO: getAnimeById
	getAPost: (id: string | undefined): Promise<PageType> => requests.get(`anime/${id}`),
};