<template>
  <div class="detail">{{ query.id }}</div>
</template>

<script lang="ts" setup>
const query = defineProps<{ id: string }>()
</script>

<style scoped></style>