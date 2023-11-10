<script setup lang="ts">

import {onMounted} from "vue";

definePageMeta({
  layout: 'app',
})
const sheetItems = ref([]);

onMounted(async () => {
  const data = await $fetch('/api/sheets');
  for(let k = data.length-1; k>=0; k-- ) {
    sheetItems.value.push({
      title: data[k].name,
      subtitle: data[k].sheet_id,
      value: data[k].id,
      class: 'ma-3',
      //href: '/app/sheets/'+data.value[k].id,
      onclick: ()=>{
        navigateTo('/app/sheets/'+data[k].id)
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
