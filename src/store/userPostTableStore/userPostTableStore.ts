import { defineStore } from 'pinia';
import { Post, User } from '../../types.ts';
import { ref } from 'vue';
import { getComments, getPosts, getUsers } from '../../api/apiComponents.ts';
import { CommentDto, PostDto, UserDto } from '../../api/apiSchemas.ts';

export const useUserPostTableStore = defineStore('userPostTableStore', () => {
	const users = ref<User[]>([]);

	const fetchInfo = async () => {
		try {
			const [{ data: usersData }, { data: postsData }, { data: commentsData }] = await Promise.all([getUsers(), getPosts(), getComments()]);

			// as an optimisation option to use map so that it is not O(n^2)
			const postsWithComments: Post[] = postsData.map((post: PostDto) => ({
				...post,
				comments: commentsData.filter((comment: CommentDto) => comment.postId === post.id)
			}));

			const usersWithPosts: User[] = usersData.map((user: UserDto) => ({
				...user,
				posts: postsWithComments.filter((post: Post) => post.userId === user.id)
			}));

			users.value = usersWithPosts;
		} catch (e) {
			console.log(e);
		}
	};

	const setPostOfUser = (newPost: Post) => {
		const user = users.value.find((user) => user.id === newPost.userId);
		if (!user) {
			return;
		}

		const postIdx = user.posts.findIndex((post) => post.id === newPost.id);
		user.posts[postIdx] = newPost;
	};

	return {
		users,
		setPostOfUser,
		fetchInfo,
	};
});