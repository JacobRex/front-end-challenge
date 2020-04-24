<template>
  <div :class="$s.Container">
    <div :class="$s.Content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeContainer",
};
</script>

<style module="$s">
@import "Vars";

.Content {
  width: calc(100% - var(--space-3x));
  max-width: var(--max-width-lg);
  margin: auto;
}
</style>
