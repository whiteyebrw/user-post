<script setup lang="ts">
import { ref, onBeforeMount, computed } from 'vue';
import { useUserPostTableStore } from '../../store/userPostTableStore/userPostTableStore.ts';
import PostTable from './PostTable.vue';

const userPostTableStore = useUserPostTableStore();
const users = computed(() => userPostTableStore.users);
const collapsedUserId = ref();

const collapseUser = (userId: number) => {
	collapsedUserId.value = userId === collapsedUserId.value ? null : userId;
};

onBeforeMount(() => {
	userPostTableStore.fetchInfo();
});
</script>

<template>
	<div v-for="user in users" :key="user.id">
		<h2 class="user-info" @click="collapseUser(user.id)">
			{{ user.name }} ({{ user.username }}) - {{ user.company.name }} - {{ user.website }}
		</h2>

		<div v-if="collapsedUserId === user.id">
			<post-table :posts="user.posts"/>
		</div>
	</div>
</template>

<style scoped>
.user-info {
	cursor: pointer;
}
</style>
