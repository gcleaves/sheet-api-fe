<script setup lang="ts">
definePageMeta({
  layout: 'app',
})

const sheetItems = ref([]);
const updateSheets = useUpdateSheets();
const sheets = useSheets();

onMounted(async () => {
  if(updateSheets.value) {
    sheets.value = await $fetch('/api/sheets');
  } else {
    updateSheets.value = true;
  }

  for(let k = sheets.value.length-1; k>=0; k-- ) {
    sheetItems.value.push({
      title: sheets.value[k].name,
      subtitle: sheets.value[k].sheet_id,
      value: sheets.value[k].id,
      class: 'ma-3',
      //href: '/app/sheets/'+data.value[k].id,
      onclick: ()=>{
        navigateTo('/app/sheets/'+sheets.value[k].id)
      }
    });
    if(k) sheetItems.value.push({type:'divider'});
  }

})

</script>

<template>
  <h1>Sheets</h1>
  <v-card>
    <v-list lines="'two'" :items="sheetItems" item-props></v-list>
    <!--NuxtLink v-for="i in sheetItems" :to="'/app/sheets/'+i.value">{{ i.title }}</NuxtLink-->
  </v-card>


</template>
