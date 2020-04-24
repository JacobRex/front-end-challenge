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
import FeContainer from 'Components/Container.vue';

export default {
  name: 'FeHeader',

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
  margin-bottom: var(--space-4x);
  background-image: linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.1)),linear-gradient(135deg,#002b66,#46004d 76%);
}

.Title {
  color: var(--color-white);
  font-size: var(--font-size-display);
}
</style>
