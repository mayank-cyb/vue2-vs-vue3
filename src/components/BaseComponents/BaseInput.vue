<template>
    <div>
        <label>{{ label }}</label>
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
        />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        label: {
            type: String,
            default: null
        }
    },
    emits: ['update:modelValue'],
}
</script>
<style lang="scss">
    .base-input,
    input {
        min-width: 10rem;
        height: 2rem;
        border-radius: 0.25rem;
        margin: 0.375rem 0.25rem;
    }
</style>