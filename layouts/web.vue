<script setup lang="ts">
const router = useRouter();

</script>

<template>
  <v-app>
    <v-container>
      <v-app-bar :elevation="0" title="Free Sheets API">
        <v-list class="d-flex">
          <v-list-item to="/">
            Home
          </v-list-item>
          <v-list-item href="/#pricing">
            Pricing
          </v-list-item>
          <v-list-item to="/docs">
            Documentation
          </v-list-item>
          <v-list-item>
            <v-btn
                color="blue-darken-2"
                :href="'/login'"
                variant="flat"
            >Log in with Google</v-btn>
          </v-list-item>
        </v-list>
      </v-app-bar>

      <v-main>

        <div v-if="router.currentRoute.value.name!=='docs'">
          <v-sheet>
            <h1>API access to your Google Sheets</h1>
            <h3>With (some) Privacy!</h3>
            <p>Open source code that coverts your Google Sheet into an easy-to-consume REST API.</p>
          </v-sheet>
          <v-sheet class="mt-8">
            <h2 id="pricing">Pricing</h2>
            Free! For now...
          </v-sheet>
        </div>
        <slot v-else />
      </v-main>

    </v-container>
  </v-app>
</template>
