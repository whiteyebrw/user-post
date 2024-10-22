<script setup lang="ts">
import { Post } from '../../types.ts';
import { usePostEditStore } from '../../store/postEditStore/postEditStore.ts';
import { countWords } from '../../store/userPostTableStore/helpers.ts';

const headersOfTable = ['ID', 'Title', 'Words', 'Chars', 'Edit'];

interface Props {
	posts: Post[];
}

defineProps<Props>();

const postEditStore = usePostEditStore();
</script>

<template>
	<table>
		<thead>
		<tr>
			<th v-for="header of headersOfTable" :key="header">{{ header }}</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="post in posts" :key="post.id">
			<td>{{ post.id }}</td>
			<td>{{ post.title }}</td>
			<td>{{ countWords(post.body) }}</td>
			<td>{{  post.body.length }}</td>
			<td>
				<button @click="postEditStore.setPost(post)">Edit</button>
			</td>
		</tr>
		</tbody>
	</table>
</template>

<style scoped>

</style>