<template>
  <div>
    <fe-header :title="pageTitle" />
    <fe-container :class="$s.Container">
      <nuxt />
    </fe-container>
  </div>
</template>

<script>
import FeHeader from "Components/Header.vue";
import FeContainer from "Components/Container.vue";

export default {
  components: {
    FeHeader,
    FeContainer,
  },
  computed: {
    pageTitle() {
      return this.$store.state.page.title;
    },
  },
};
</script>

<style>
@import "Vars";

html,
body {
  margin: 0;
  padding: 0;
}

body {
  color: var(--text-color);
  line-height: var(--line-height);
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
</style>

<style module="$s">
@import "Vars";

.Container {
  padding: var(--space-3x) 0;
}
</style>
