<template>
<Transition appear>
	<div class="tw-card">
		<h1 class="tw-heading">Contact Details</h1>
		<div class="max-w-sm m-auto text-left">
            <fieldset>
                <div class="field-group">
					<BaseInput type="text" id="contact_first_name" label="First Name" v-model="usdot_data.contactFirstName" />
					<BaseInput type="text" id="contact_last_name" label="Last Name" v-model="usdot_data.contactLastName" />
                </div>
				<BaseInput type="text" id="contact_phone" label="Phone" v-model="usdot_data.contactPhone" />
				<BaseInput type="email" id="contact_email" label="Email" v-model="usdot_data.contactEmail" />
			</fieldset>

			<button type="button" class="tw-btn mt-5 block m-auto" @click="verifyDOTData()">Next</button>
		</div>
	</div>
</Transition>
</template>

<script>
import { mapState } from 'vuex';
import BaseInput from "@/components/BaseInput.vue";

export default {
	name: 'ContactDetails',
	components: {
		BaseInput
	},
	computed: {
		...mapState({
			usdot_data: state => state.usdot_data
		}),
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

			this.$store.commit('updateDOTData', this.usdot_data);

			// Temporary flag to determine elgibility.
			this.$router.push({name: 'insuranceEffectiveDate'});
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
	mounted() {
		this.setRoutes();
	}
}
</script>

<style scoped>
</style>
