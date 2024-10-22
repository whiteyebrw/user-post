<script setup lang="ts">
import { ref } from 'vue';
import PostCommentList from './PostCommentList/PostCommentList.vue';
import { useUserPostTableStore } from '../../store/userPostTableStore/userPostTableStore.ts';
import { Post } from '../../types.ts';

interface Props {
	post: Post;
}

const props = defineProps<Props>();
const emit = defineEmits(['close']);

const userPostTableStore = useUserPostTableStore();

const title = ref(props.post.title);
const body = ref(props.post.body);

const close = () => {
	emit('close');
};

const handleSubmitSavePost = () => {
	userPostTableStore.setPostOfUser({
		...props.post,
		title: title.value,
		body: body.value,
	});

	close();
};
</script>

<template>
	<div
		class="overlay"
		@click.self="close"
	>
		<div class="modal">
			<h3>Edit Post #{{ post.id }}</h3>
			<form @submit.prevent="handleSubmitSavePost">
				<div>
					<label for="title">Title</label>
					<input v-model="title" type="text"/>
				</div>
				<div>
					<label for="body">Body</label>
					<textarea v-model="body"></textarea>
				</div>
				<h4>Comments</h4>
				<post-comment-list :comments="post.comments"/>
				<button type="submit">Save</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
}

.modal {
	max-width: 600px;
	background-color: #242424;
	margin: auto;
}

textarea {
	resize: none;
}
</style>