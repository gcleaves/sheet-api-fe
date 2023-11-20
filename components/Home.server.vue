<script setup lang="ts">
import markdown from '@wcj/markdown-to-html';
import * as fs from 'node:fs';
import {join} from 'node:path';

const path = join(__dirname,'home.md');
const h = markdown(fs.readFileSync(path).toString());

</script>

<template>
    <v-container>
      <div v-html="h"></div>
    </v-container>
</template>


