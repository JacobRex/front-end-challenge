<template>
  <header :class="$s.Header">
    <fe-container>
      <h1 :class="$s.Title">
        {{ title }}
      </h1>
    </fe-container>
  </header>
</template>

<script>
import FeContainer from "Components/Container.vue";

export default {
  name: "FeHeader",

  components: {
    FeContainer,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style module="$s">
@import "Vars";

.Header {
  padding: var(--space-xl) 0;
  background-image: linear-gradient(
    135deg,
    var(--color-blue-700),
    var(--color-purple-500) 76%
  );
}

.Title {
  text-align: center;
  color: var(--color-white);
  font-size: var(--font-size-display);
}
</style>
