<template>
  <ScreenAdapter>
    <router-view />
  </ScreenAdapter>
</template>
<script>
import { defineComponent } from "vue";
import ScreenAdapter from "./components/ScreenAdapter.vue";

export default defineComponent({
  components: {
    ScreenAdapter,
  },
  setup() {
    return {};
  },
});
</script>
