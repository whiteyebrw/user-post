<script setup lang="ts">
import { CommentDto } from '../../../api/apiSchemas.ts';

interface Props {
	comment: CommentDto;
}

defineProps<Props>();
</script>

<template>
	<li>
		<strong>{{ comment.email }}</strong> - {{ comment.name }}
		<p>{{ comment.body }}</p>
	</li>
</template>

<style scoped>

</style>