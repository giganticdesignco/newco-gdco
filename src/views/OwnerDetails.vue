<template>
<Transition appear>
	<div class="tw-card">
		<h1 class="tw-heading">Owner Details</h1>
		<div class="max-w-sm m-auto text-left">
			<fieldset>
				<div class="field-group">
					<BaseInput type="text" id="owner_first_name" label="First Name" v-model="usdot_data.ownerFirstName" />
					<BaseInput type="text" id="owner_last_name" label="Last Name" v-model="usdot_data.ownerLastName" />
				</div>
				<BaseInput type="text" id="owner_phone" label="Phone" v-model="usdot_data.ownerPhone" />
				<BaseInput type="email" id="owner_email" label="Email" v-model="usdot_data.ownerEmail" />

				<BaseCheckbox id="owner_is_contact" label="Owner is primary contact" v-model="owner_is_contact" />
				
            </fieldset>

			<button type="button" class="tw-btn mt-5 block m-auto" @click="nextSection()">Next</button>
		</div>
	</div>
</Transition>
</template>

<script>
import { mapState } from 'vuex';
import BaseInput from "@/components/BaseInput.vue";
import BaseCheckbox from '@/components/BaseCheckbox.vue';

export default {
	name: 'OwnerDetails',
	components: {
		BaseInput,
		BaseCheckbox
	},
	computed: {
		...mapState({
			usdot_data: state => state.usdot_data,
            owner_is_contact: state => state.owner_is_contact
		}),
		owner_is_contact: {
			get() {
				return 	this.$store.state.owner_is_contact;
			},
			set(value) {
				this.$store.commit('updateOwnerIsContact', value);
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
		nextSection() {
			if(this.owner_is_contact) {
				this.usdot_data.contactFirstName = this.usdot_data.ownerFirstName;
				this.usdot_data.contactLastName = this.usdot_data.ownerLastName;
				this.usdot_data.contactPhone = this.usdot_data.ownerPhone;
				this.usdot_data.contactEmail = this.usdot_data.ownerEmail;
			} else {
				this.usdot_data.contactFirstName = "";
				this.usdot_data.contactLastName = "";
				this.usdot_data.contactPhone = "";
				this.usdot_data.contactEmail = "";
			}
			this.$store.commit('updateDOTData', this.usdot_data);
			console.log(this.owner_is_contact);
			this.owner_is_contact ? this.$router.push({name: 'insuranceEffectiveDate'}) : this.$router.push({name: 'contactDetails'});
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
