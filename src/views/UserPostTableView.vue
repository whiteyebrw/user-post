<script setup lang="ts">
import UserPostTable from '../components/UserPostList/UserPostList.vue';
import PostEditDialog from '../components/PostEditDialog/PostEditDialog.vue';
import { usePostEditStore } from '../store/postEditStore/postEditStore.ts';

const postEditStore = usePostEditStore();

const closeDialog = () => {
	postEditStore.resetPost();
};
</script>

<template>
	<UserPostTable/>
	<PostEditDialog v-if="postEditStore.post" :post="postEditStore.post" @close="closeDialog"/>
</template>

<style scoped>

</style>