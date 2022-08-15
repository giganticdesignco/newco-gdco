<template>
	<Transition appear>
		<div class="tw-card">
			<h1 class="tw-heading">Insurance Effective Date?</h1>
			<div class="max-w-sm m-auto text-left">
				<BaseInput type="date" id="insurance_effective_date" label="Date" max="999-12-31" v-model="insurance_effective_date" />
				<button type="button" class="tw-btn mt-5 block m-auto" @click="nextSection">Next</button>
			</div>
		</div>
	</Transition>
</template>

<script>
import { mapState } from 'vuex';
import BaseInput from "@/components/BaseInput.vue";

export default {
	name: 'InsuranceEffectiveDate',
	components: {
		BaseInput,
	},
	computed: {
		...mapState({
			insurance_effective_date: state => state.insurance_effective_date
		}),
		insurance_effective_date: {
			get() {
				return this.$store.state.insurance_effective_date;
			},
			set(value) {
				this.$store.commit('updateInsuranceEffectiveDate', value);
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
		nextSection: function() {
			this.$router.push({name: 'brokerageAuthority'});
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
		},
		createProspect(){
			if(typeof this.$store.state.usdot_data.contactFirstName !== 'undefined') {
				const data = { 
					firstname: this.$store.state.usdot_data.contactFirstName,
					lastname: this.$store.state.usdot_data.contactLastName,
					company: this.$store.state.usdot_data.legalName,
					email: this.$store.state.usdot_data.contactEmail,
					phone: this.$store.state.usdot_data.contactPhone,
					city: this.$store.state.usdot_data.phyCity,
					state: this.$store.state.usdot_data.phyState,
					postal: this.$store.state.usdot_data.phyZipcode,
				};

				
				fetch('http://localhost:4200/create-prospect', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
				.then((response) => response.json())
				.then((data) => {
					console.log('Success:', data);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			}
		}
	},
	mounted() {
		this.setRoutes();
		// this.createProspect();
	}
}
</script>