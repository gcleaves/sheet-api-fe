<script setup lang="ts">

definePageMeta({
  layout: 'app',
})
const route = useRoute();
const updateSheets = useUpdateSheets();
const { data, pending, error, refresh } = await useFetch('/api/sheets/'+route.params.id);
const sheet = data.value;
updateSheets.value = false;
</script>

<template>
  <div v-if="sheet">
    <h1>{{ sheet.name }}</h1>
    <h3>{{ sheet.sheet_id }}</h3>
  </div>
  <div v-else>
    Sheet not found, error.
  </div>

</template>
