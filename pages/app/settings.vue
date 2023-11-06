<script setup lang="ts">
definePageMeta({
  layout: 'app'
})
const { data, pending, error, refresh } = await useFetch('/api/settings')
const user = ref(data);
const items = ['service_account', 'oauth'];

</script>

<template>
  <h1>Settings</h1>
  <div v-if="data">
    <v-text-field
        :model-value="data.name"
        variant="outlined"
        label="Name"
        disabled
    ></v-text-field>
    <v-text-field
        :model-value="user.email"
        variant="outlined"
        label="Email"
        disabled
    ></v-text-field>

    <v-select
        label="Access method"
        v-model="user.access_method"
        :items="items"
    ></v-select>

    <div v-if="user.access_method==='service_account'">
      <v-text-field
          label="Service account"
          v-model="user.service_account"
      ></v-text-field>
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
