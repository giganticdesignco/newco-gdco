<template>
	<Transition appear>
		<div class="tw-card">
			<h1 class="tw-heading">Select a Plan</h1>
			<div class="max-w-sm m-auto text-left">
				<div class="flex justify-center mb-10">
					<div class="w-2/4">
						<span class="text-4xl font-bold">{{premium}}</span>
						<div class="font-bold text-gray-400 text-sm uppercase tracking-wider">Premium Amount</div>
					</div>
					<div class="w-2/4">
						<label class="flex items-center mb-2" v-for="plan in plan_options" :key="plan.deductible.label">
							<input type="radio" name="deductible" :value="plan.deductible.amount" v-model="plan_selected">
							<div class="ml-2" v-text="plan.deductible.label"></div>
						</label>
					</div>
				</div>
				<button type="button" class="tw-btn mt-5 block m-auto"  @click="goToSignNow()">Next</button>
			</div>
		</div>
	</Transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'SelectPlan',
	computed: {
		...mapState({
			plan_options: state => state.plan_options,
			plan_selected: state => state.plan_selected,
			contact_email: state => state.usdot_data.contactEmail,
			contact_first_name: state => state.usdot_data.contactFirstName,
			contact_last_name: state => state.usdot_data.contactLastName
		}),
		show_payment: {
			get() {
				return this.$store.show_payment;
			},
			set(value) {
				this.$store.commit('updateShowPayment', value);
			}
		},
		plan_selected: {
			get(){
				return this.$store.state.plan_selected;
			},
			set(value){
				this.$store.commit('updatePlans', value);
			}
		},
		route_index: {
			get() {
				return this.$store.state.curr_route_index;
			},
			set(value) {
				this.$store.commit('updateRouteIndex', value);
			}
		},
		premium() {
			const self = this;
			const selected_deductible = this.plan_options.filter(function(plan){
				return plan.deductible.amount === self.plan_selected;
			});
			return selected_deductible[0].premium.label;
		}
	},
	methods: {
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
		goToSignNow(){
			
			console.log(`https://flywheel.giganticdesign.com/signnow/?email=${this.contact_email}&first_name=${this.contact_first_name}&last_name=${this.contact_last_name}&return_uri=${window.location.protocol}//${window.location.host}/payment`);
			// window.location = `https://flywheel.giganticdesign.com/signnow/?email=${this.contact_email}&first_name=${this.contact_first_name}&last_name=${this.contact_last_name}&return_uri=${window.location.protocol}//${window.location.host}/payment`;
		}
	},
	mounted(){
		this.setRoutes();
		this.show_payment = false;
	}
}
</script>

<style lang="scss" scoped>
</style>