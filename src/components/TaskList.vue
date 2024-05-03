<script setup>
import PureTaskList from './PureTaskList.vue'
import { computed } from 'vue'
import { useTaskStore } from '..stores/store'

const store = useTaskStore()
const tasks = computed(() => store.getFilteredTasks)

const archiveTask = (task) => store.archiveTask(task)
const pinTask = (task) => store.pinTask(task)
</script>
<template>
	<PureTaskList :tasks="tasks" @archive-task="archiveTask" @pin-task="pinTask" />
</template>
<style scope></style>
