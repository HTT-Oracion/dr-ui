<template>
  <input
    :type="type"
    :value="value"
    :disabled="disabled"
    v-bind="$attrs"
    :class="['dr-input', { 'is-disabled': disabled }]"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  />
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
    disabled: Boolean
  },
  methods: {
    handleInput(evt) {
      this.$emit('input', evt.target.value)
    },
    handleFocus(evt) {
      this.$emit('blur', evt.target.value)
    },
    handleBlur(evt) {
      this.$emit('input', evt.target.value)
    },
    handleChange(evt) {
      this.$emit('change', evt.target.value)
    }
  }
}
</script>

<style></style>
