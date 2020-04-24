<template>
  <div :class="[$s.Wrapper, { [$s.focused]: isFocused }]" @click="focus()">
    <select
      ref="select"
      v-model="selected"
      :class="[$s.Select, { [$s.unset]: !optionSelected }]"
      v-bind="$attrs"
      v-on="$listeners"
      @focus="onFocus"
      @blur="onBlur"
    >
      <option
        v-if="placeholder"
        :class="$s.Placeholder"
        :value="placeholderValue"
        disabled
      >
        {{ placeholder }}
      </option>
      <slot v-for="(option, idx) in options" v-bind="option" :idx="idx">
        <option :key="idx" :value="option.value" :disabled="option.disabled">
          {{ option.label }}
        </option>
      </slot>
    </select>
    <div :class="$s.Suffix">
      <fe-icon name="carat-down" />
    </div>
  </div>
</template>

<script>
import FeIcon from "Components/Icon.vue";

export default {
  name: "FeSelect",

  components: {
    FeIcon,
  },

  inheritAttrs: false,

  model: {
    event: "select",
  },

  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    value: {
      type: [String, Number],
      default: undefined,
    },
  },

  data() {
    return {
      isFocused: false,
    };
  },

  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("select", val);

        return val;
      },
    },

    optionSelected() {
      return this.options.find((opt) => opt.value === this.value);
    },

    placeholderValue() {
      // This will return the current value if its not a valid option
      return !this.optionSelected ? this.value : null;
    },
  },

  methods: {
    focus() {
      this.$refs.select.focus();
    },

    blur() {
      this.$refs.select.blur();
    },

    onBlur() {
      this.isFocused = false;
    },

    onFocus() {
      this.isFocused = true;
    },
  },
};
</script>

<style module="$s">
@import "Vars";

/* Wrapper
---------------------------------------------- */
.Wrapper {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: var(--box-shadow-border);
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  transition: box-shadow var(--transition);

  &:hover {
    box-shadow: var(--box-shadow-border-hover);
  }

  &.focused {
    box-shadow: var(--box-shadow-border-focus);
    outline: 0;
  }
}

/* Select
---------------------------------------------- */
.Select {
  flex: 1;
  box-sizing: border-box;
  display: block;
  height: var(--space-3x);
  padding: 0 var(--space-md);
  color: var(--text-color);
  font-size: var(--font-size);
  border: 0;
  background-color: transparent;
  outline: 0;
  -webkit-appearance: none;

  &.unset {
    color: var(--color-gray-300);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

/* Suffix
---------------------------------------------- */
.Suffix {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-right: var(--space-md);
  color: var(--text-color);
  font-size: inherit;
  pointer-events: none;
}
</style>
