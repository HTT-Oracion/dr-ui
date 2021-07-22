<template>
  <div
    :class="[
      'dr-input',
      {
        'is-disabled': disabled
      }
    ]"
    @mousemove="hovering = true"
    @mouseleave="hovering = false"
  >
    <template>
      <input
        class="dr-input__inner"
        :type="type"
        :value="value"
        :disabled="disabled"
        v-bind="$attrs"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <span class="dr-input__suffix" v-if="getSuffixVisible()"> </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'dr-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    disabled: Boolean,
    clearabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hovering: false,
      focused: false
    }
  },
  computed: {
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ''
        : String(this.value)
    },
    showClear() {
      return this.clearabled && !this.disabled && (this.focused || this.hovering) && 
    }
  },
  methods: {
    handleInput(evt) {
      this.$emit('input', evt.target.value)
    },
    handleFocus(evt) {
      this.focused = true
      this.$emit('blur', evt.target.value)
    },
    handleBlur(evt) {
      this.focused = false
      this.$emit('input', evt.target.value)
    },
    handleChange(evt) {
      this.$emit('change', evt.target.value)
    }
  }
}
</script>

<style></style>
