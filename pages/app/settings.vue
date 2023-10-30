<script setup lang="ts">
definePageMeta({
  layout: 'app'
})
const KC = useKC();

</script>

<template>
  <h1>Settings - {{ KC.name }}</h1>
  <p>A bunch of settings</p>
</template>
