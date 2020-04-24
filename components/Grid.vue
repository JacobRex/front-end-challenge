<template>
  <div :class="$s.Grid">
    <slot />
  </div>
</template>

<script>
import GridItem from "./GridItem.vue";
import Key from "./GridKey.js";

export default {
  name: "FeGrid",

  provide() {
    return {
      [Key]: this.state,
    };
  },

  data() {
    return {
      state: {
        numGridItems: 5,
      },
    };
  },

  computed: {
    gridItems() {
      return this.checkGridItem(this.$slots.default);
    },

    numGridItems() {
      return this.gridItems && this.gridItems.length;
    },
  },

  mounted() {
    this.checkGridItem(this.$slots.default);
  },

  methods: {
    checkGridItem(vnodes) {
      if (!this.$slots.default) {
        return false;
      }

      return vnodes.filter((vnode) => {
        const isGridItem =
          vnode.componentOptions &&
          vnode.componentOptions.Ctor.extendOptions === GridItem;
        if (vnode.tag && !isGridItem) {
          throw new Error("FeGrid: Only GridItem's are allowed in a Grid.");
        }
        return isGridItem;
      });
    },
  },
};
</script>

<style module="$s">
@import "Vars";

.Grid {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: calc(100% + var(--grid-gutter));
  margin-right: calc(var(--grid-gutter) / -2);
  margin-bottom: calc(var(--grid-gutter) * -1);
  margin-left: calc(var(--grid-gutter) / -2);
}
</style>
