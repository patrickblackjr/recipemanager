<template>
  <div>
    <div class="form-group my-3">
      <label class="form-label">{{ label }}</label>
      <input
        :value="value"
        :type="type"
        class="form-control"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
      <div v-if="description" class="form-text">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    description: {
      type: [String, Boolean],
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      description: 'Optionally declare a different input type other than text.',
    },
    value: {
      type: String,
      required: true,
    },
  },
}
</script>
