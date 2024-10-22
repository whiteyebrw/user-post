<script setup lang="ts">

import PostCommentItem from './PostCommentItem.vue';
import { CommentDto } from '../../../api/apiSchemas.ts';

interface Props {
	comments: CommentDto[];
}

defineProps<Props>();
</script>

<template>
	<ul class="comment__list">
		<post-comment-item v-for="comment in comments" :key="comment.id" :comment="comment"/>
	</ul>
</template>

<style scoped>
.comment__list {
	max-height: 300px;
	overflow-y: auto;
	overscroll-behavior: none;
}
</style>