<template>
	<div class="flex justify-between items-center pl-11 pr-11 pt-6 pb-6 mb-16 bg-white border-b border-slate-300">
		<div class="text-xl uppercase font-sans font-bold">Flywheel</div>
		<div class="actions"></div>
	</div>
	<BreadCrumbs/>
</template>

<script>
import BreadCrumbs from './BreadCrumbs.vue';

export default {
	name: 'NavigationHeader',
	components: {
		BreadCrumbs
	}
}
</script>

<style lang="scss">
</style>