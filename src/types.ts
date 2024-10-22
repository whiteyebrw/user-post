import { CommentDto, PostDto, UserDto } from './api/apiSchemas.ts';

export interface Post extends PostDto {
	comments: CommentDto[];
}

export interface User extends UserDto {
	posts: Post[];
}