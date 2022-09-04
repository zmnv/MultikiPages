import axios, { AxiosResponse } from 'axios';
import { PageType } from '../types/post.interfase'

const instance = axios.create({
	baseURL: 'http://localhost:4000/api/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Post = {
	getPosts: (): Promise<PageType[]> => requests.get('anime'),
	getAPost: (id: string | undefined): Promise<PageType> => requests.get(`anime/${id}`),
};