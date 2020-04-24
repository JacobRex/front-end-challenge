<template>
  <div
    :class="[
      $s.GridItem,
      {
        [$s[`span_${span}`]]: span,
        [$s[`tablet_${tabletSpan}`]]: tabletSpan,
        [$s[`desktop_${desktopSpan}`]]: desktopSpan,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script>
const isValidSpan = (value) =>
  ["one-fifth", "one-half", "fullwidth"].includes(value);

import Key from "./GridKey.js";

export default {
  name: "FeGridItem",

  inject: {
    grid: {
      from: Key,
      default: undefined,
    },
  },

  props: {
    span: {
      type: [Number, String],
      default() {
        const span = Math.ceil(10 / this.grid.numGridItems);
        let defaultSpan;
        switch (span) {
          case 10:
            defaultSpan = "fullwidth";
            break;
          case 5:
            defaultSpan = "one-half";
            break;
          case 2:
            defaultSpan = "one-fifth";
            break;
          default:
            defaultSpan = "one-fifth";
        }
        return defaultSpan;
      },
      validator: isValidSpan,
    },
    tabletSpan: {
      type: [Number, String],
      default: undefined,
      validator: isValidSpan,
    },
    desktopSpan: {
      type: [Number, String],
      default: undefined,
      validator: isValidSpan,
    },
  },

  computed: {
    numGridItems() {
      return this.grid ? this.grid.numGridItems : 12;
    },
  },

  mounted() {
    if (!this.grid) {
      throw new Error(
        `FeGridItem: The FeGridItem component must be a child of of a FeGrid.`
      );
    }
  },
};
</script>

<style module="$s">
@import "Vars";

.GridItem {
  box-sizing: border-box;
  padding: 0 calc(var(--grid-gutter) / 2) var(--grid-gutter);

  &.span_one-fifth {
    width: 20%;
  }

  &.span_one-half {
    width: 50%;
  }

  &.span_fullwidth {
    width: 100%;
  }

  @media (--tablet-up) {
    &.tablet_one-fifth {
      width: 20%;
    }

    &.tablet_one-half {
      width: 50%;
    }

    &.tablet_fullwidth {
      width: 100%;
    }
  }

  @media (--desktop-up) {
    &.desktop_one-fifth {
      width: 20%;
    }

    &.desktop_one-half {
      width: 50%;
    }

    &.desktop_fullwidth {
      width: 100%;
    }
  }
}
</style>
