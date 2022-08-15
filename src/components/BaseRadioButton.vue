<template>
  <label :for="option">
    <input
      type="radio"
      :value="option"
      :id="option"
      @change="radioUpdate($event.target.value)"
      name="radio-input"
    />
    {{ option }}
  </label>
</template>

<script>
export default {
  props: {
    option: {
      required: true,
      type: String,
    },
  },
  methods: {
    radioUpdate(val){
      console.log(val);
      this.$emit('capture-input',val);
    }
  }
};
</script>

<style scoped>
label {
  cursor: pointer;
}
</style>