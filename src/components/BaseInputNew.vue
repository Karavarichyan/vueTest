<template>
   <div class="field-container">
        <span>
            {{ props.componentData.label }}
        </span>
        <input
        class="field-input"
        :type="props.componentData.type"
        :placeholder="componentData.placeholder"
        @input="onInput"
        >
        <span class="field-error" v-if="props.componentData.errorMessage || localError">
            {{ props.componentData.errorMessage || localError }}
        </span>
   </div>
</template>
<script setup>
import { DefineProps, defineEmits, ref } from 'vue';
const props = defineProps(props:{
    modelValue: {
        required: true,
    },
    componentData: {
        type: Object,
        default: () => {
            return {
                type: 'text',
                placeholder: 'placeholder',
                label: 'Label',
                errorMessage: null,
                pattern: '',
                minLenght: null,
                maxLenght: null,
            }
        }
    }
})
const emit = defineEmits(emitOptions: ['update:modelValue','form-validata'])
</script>