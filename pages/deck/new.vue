<template>
  <div>
    Content
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("page/setTitle", "Select Cards");
  },
};
</script>
