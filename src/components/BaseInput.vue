<template> 
<label :for="id" class="text-left block mb-5 relative">
    <input class="w-full rounded-lg" :type="type" :id="id" :max="max" :value="modelValue" @input="updateInput" required>
    <div class="tw-label" v-text="label"></div>
     <!-- mb-2 text-blue-500 font-micro font-medium uppercase tracking-wide text-sm pl-3 -->
</label>
</template>

<script>
export default {
    name: "BaseInput",
    props: {
        id: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    modelValue: {
        type: [String, Number],
        default: "",
    },
    max: {
        type: String,
        default: "1000000"
    },
    type: {
        type: String,
        default: "text",
    }
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
};
</script>