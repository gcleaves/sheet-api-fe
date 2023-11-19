<script setup lang="ts">
import { useDisplay } from 'vuetify'
const router = useRouter();
const display = useDisplay();
const showDrawer = ref(false);
</script>

<template>
  <v-app>
    <v-app-bar location="top" :elevation="0" title="Free Sheets API">
      <v-list class="d-flex">
        <div v-if="display.smAndUp.value" class="d-flex">
          <v-list-item to="/">
            Home
          </v-list-item>
          <v-list-item href="/#pricing">
            Pricing
          </v-list-item>
          <v-list-item to="/docs">
            Docs
          </v-list-item>
        </div>
        <v-list-item>
          <v-btn
              color="blue-darken-2"
              :href="'/login'"
              variant="flat"
          >Log in<span v-if="display.mdAndUp.value">&nbsp;with Google</span></v-btn>
        </v-list-item>
      </v-list>
      <v-app-bar-nav-icon
          v-if="!display.smAndUp.value"
          @click.stop="showDrawer = !showDrawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="showDrawer" :width="213" location="end">

      <v-list-item to="/" title="Home"></v-list-item>
      <v-list-item href="/#pricing" title="Pricing"></v-list-item>
      <v-list-item link to="/docs" title="Docs"></v-list-item>
    </v-navigation-drawer>

    <v-main>
      <div v-if="router.currentRoute.value.name!=='docs'">
        <v-sheet>
          <h1>API access to your Google Sheets</h1>
          <h3>With (some) Privacy!</h3>
          <p><a href="https://github.com/gcleaves/sheet-api-be">Open source</a> code that converts your Google Sheet into an easy-to-consume REST API.</p>
        </v-sheet>
        <v-sheet class="mt-8">
          <h2 id="pricing">Pricing</h2>
          Free! For now...
        </v-sheet>
      </div>
      <slot v-else />
    </v-main>


  </v-app>
</template>
