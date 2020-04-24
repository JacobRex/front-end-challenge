<template>
  <component
    :is="element"
    :to="to"
    :class="[
      $s.Button,
      $s[`variant_${variant}`],
      { [$s['is-disabled']]: disabled || loading },
    ]"
    @click="handleClick"
  >
    <div :class="[$s.ButtonContent, { [$s['is-loading']]: loading }]">
      <slot />
    </div>
    <fe-loading-indicator
      v-if="loading"
      :class="$s.LoadingIndicator"
    />
  </component>
</template>

<script>
import FeLoadingIndicator from "Components/LoadingIndicator.vue";

export default {
  name: "FeButton",

  components: {
    FeLoadingIndicator,
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    variant: {
      type: String,
      default: "secondary",
      validator: (value) => ["primary", "secondary"].includes(value),
    },
  },

  computed: {
    element() {
      return this.to ? "nuxt-link" : "button";
    },
  },

  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style module="$s">
@import "Vars";

.Button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  min-width: 100%;
  padding: var(--space-md) var(--space-lg);
  font-size: var(--font-size);
  font-weight: bold;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 0;
  border-radius: var(--border-radius);
  cursor: pointer;
  appearance: none;
  user-select: none;
  outline: none;
  text-decoration: none;
  transition: var(--transition);

  @media (--tablet-up) {
    min-width: 120px;
  }

  /* Variants
  ---------------------------------------------- */
  &.variant_primary {
    color: var(--color-white);
    background-color: var(--color-brand);

    &:not(.disabled):hover {
      opacity: 0.85;
    }
  }

  &.variant_secondary {
    color: var(--color-brand);
    box-shadow: inset 0px 0px 0px 2px var(--color-brand);

    &:not(.disabled):hover {
      background-color: var(--color-pink-515);
    }
  }

  /* Disabled
  ---------------------------------------------- */
  &.is-disabled {
    pointer-events: none;
    cursor: default;
    opacity: var(--opacity-disabled);
  }
}

/* Loading
---------------------------------------------- */
.LoadingIndicator {
  position: absolute;
  top: calc(50% - var(--space-sm));
  left: calc(50% - var(--space-sm));
}

.ButtonContent {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--transition);

  &.is-loading {
    opacity: 0;
  }
}
</style>
