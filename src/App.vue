<template>
	<NavigationHeader/>
	<div class="pl-5 pr-5">
	<router-view></router-view>
	</div>
</template>

<script>
import NavigationHeader from '@/components/NavigationHeader.vue';
import { mapState } from 'vuex';

export default {
	name: 'App',
	components: {
		NavigationHeader,
	},
	computed: {
		...mapState({
			usdot_data: state => state.usdot_data
		}),
	},
	mounted(){

		// Redirect the user back to the beginning if there is no USDOT data.
		if(Object.keys(this.usdot_data).length === 0) {
			// this.$router.push({name: 'enterDOT'});
		}
	}
}

</script>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number]{
    -moz-appearance: textfield;
}
</style>
