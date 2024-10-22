import { api } from './index.ts';
import { CommentDto, PostDto, UserDto } from './apiSchemas.ts';

export const getPosts = () => {
	return api.get<PostDto[]>(`/posts`);
};

export const getUsers = () => {
	return api.get<UserDto[]>(`/users`);
};

export const getComments = () => {
	return api.get<CommentDto[]>(`/comments`);
};