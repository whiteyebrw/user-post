import { defineStore } from 'pinia';
import { Post } from '../../types.ts';
import { ref } from 'vue';

export const usePostEditStore = defineStore('postEditStore', () => {
	const post = ref<Post>();

	const setPost = (newPost?: Post) => {
		post.value = newPost;
	};

	const resetPost = () => {
		post.value = undefined;
	}

	return {
		post,
		setPost,
		resetPost,
	};
});