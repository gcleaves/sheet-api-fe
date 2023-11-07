<script setup lang="ts">
definePageMeta({
  layout: 'app',

})
const items = ['service_account', 'oauth'];
const { data, pending, error, refresh } = await useFetch('/api/settings')
let temp = "{}";
try {
  temp = JSON.stringify(data.value.service_accounts[0].json);
} catch (e) {}
const saJSON = ref(temp);

</script>

<template>
  <h1>Settings</h1>
  <div v-if="data">
    <v-text-field
        v-model="data.name"
        variant="outlined"
        label="Name"
        disabled
    ></v-text-field>
    <v-text-field
        :model-value="data.email"
        variant="outlined"
        label="Email"
        disabled
    ></v-text-field>

    <v-select
        label="Access method"
        v-model="data.access_method"
        :items="items"
    ></v-select>

    <div v-if="data.access_method==='service_account'">
      <v-textarea
          label="Service account"
          v-model="saJSON"
      ></v-textarea>
    </div>
    <div v-else>
      <v-btn class="mr-6" color="green-darken-2">
        Grant Oauth Permissions
      </v-btn>

      <v-btn color="red-darken-2">
        Revoke Oauth Permissions
      </v-btn>

    </div>
  </div>
  <div v-if="error">
    {{ error }}
    <v-btn color="blue-darken-2" href="/login">
      Log in with Google
    </v-btn>
  </div>

</template>
