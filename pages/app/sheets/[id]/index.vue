<script setup lang="ts">

definePageMeta({
  layout: 'app',
})
const route = useRoute();
//const sheets = useSheets();
//const sheet = sheets.value.find(s => s.id==route.params.id)
const { data, pending, error, refresh } = await useFetch('/api/sheets/'+route.params.id);
const sheet = data.value;
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
