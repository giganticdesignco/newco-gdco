<template>
<Transition appear>
	<div class="tw-card">
		<h1 class="tw-heading">Verify DOT Information</h1>
		<div class="max-w-sm m-auto text-left">
			<fieldset>
				<legend>Company Details</legend>
				<BaseInput type="text" id="company_name" label="Company Name" v-model="company_name" />
				<BaseInput type="text" id="address_street" label="Address" v-model="usdot_data.phyStreet" />
				<BaseInput type="text" id="address_city" label="City" v-model="usdot_data.phyCity" />
				<div class="field-group">
					<BaseInput type="text" id="address_state" label="State" v-model="usdot_data.phyState" />
					<BaseInput type="text" id="address_zip" label="Zip Code" v-model="usdot_data.phyZipcode" />
				</div>
			</fieldset>

			<fieldset>
				<legend>Equipment Details</legend>
				<BaseInput type="text" id="total_power_units" label="Total Power Units" v-model="usdot_data.totalPowerUnits" />
			</fieldset>

			<button type="button" class="tw-btn mt-7 m-auto block" @click="verifyDOTData()">Verify</button>
		</div>
	</div>
</Transition>
</template>

<script>
import { mapState } from 'vuex';
import BaseInput from "@/components/BaseInput.vue";
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
	setup () {
		return { v$: useVuelidate() }
	},
	name: 'VerifyDOT',
	components: {
		BaseInput
	},
	data() {
		return {
			form: {
				company_name: ''
			}
		}
	},
	validations() {
		return {
			form: {
				company_name: {
					required
				}
			}
		}
	},
	computed: {
		...mapState({
			usdot_data: state => state.usdot_data
		}),
		usdot_data: {
			get(){
				return this.$store.state.usdot_data;
			},
			set(value) {
				this.$store.commit('updateDOTData', value);
			}
		},
		company_name: {
			get(){ return this.usdot_data.legalName },
			set(value) {
				this.$store.commit('updateCompanyName', value);
			}
		},
		route_index: {
			get() {
				return this.$store.state.curr_route_index;
			},
			set(value) {
				this.$store.commit('updateRouteIndex', value);
			}
		}
	},
	methods: {
		verifyDOTData() {
			// Temporary flag to determine elgibility.
			if(this.usdot_data.totalPowerUnits > 10) {
				this.$router.push({name: 'notEligible'});
			} else {
				this.$router.push({name: 'ownerDetails'});
			}


		},
		setRoutes() {
			const self = this;
			const routes = this.$router.getRoutes();
			let route_index = 0;

			this.curr_route = this.$router.currentRoute.value;
				
			routes.forEach(function(route, index){
				if(route.name === self.curr_route.name) {
					route_index = index;
				}
			});

			this.route_index = route_index;
		}
	},
	mounted(){
		this.setRoutes();
	}
}
</script>

<style scoped>
</style>
