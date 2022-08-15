<template> 
<label :for="id" class="text-left block mb-5 flex flex-column items-center">
	<input type="checkbox" :id="id" :name="id" :value="modelValue" @change="updateInput">
	<div class="text-slate-600 font-base pl-3" v-text="label"></div>
</label>
</template>

<script>
export default {
	name: "BaseCheckbox",
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
			type: [String, Number, Boolean],
			default: "",
		}
	},
	methods: {
		updateInput(e) {
			this.$store.dispatch('updateOwnerIsContact', e.target);
			// this.$emit("update:modelValue", event.target.checked);
			this.$store.commit('updateOwnerIsContact', event.target.checked);
		}
	},
	mounted(){
		
	}
};
</script>