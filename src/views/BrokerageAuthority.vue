<template>
	<Transition appear>
		<div class="tw-card">
			<h1 class="tw-heading">Brokerage Authority</h1>
			<div class="max-w-sm m-auto text-left">
				<div class="field-group flex justify-around">
					<label for="yes" class="radio-button">
						<div class="label">Yes</div>
						<input type="radio" id="yes" name="brokerage_authority" value="Yes" v-model="brokerage_authority" tabindex="1">
					</label>
					<label for="no" class="radio-button">
						<div class="label">No</div>
						<input type="radio" id="no" name="brokerage_authority" value="No" v-model="brokerage_authority" tabindex="2">
					</label>
				</div>
				<!-- <div class="field-group">
					<label for="yes" class="radio-button">
						<div class="label">Yes</div>
						<input type="radio" id="yes" name="brokerage_authority" value="Yes" @change="updateRadio('Yes')" tabindex="1">
					</label>
					<label for="no" class="radio-button">
						<div class="label">No</div>
						<input type="radio" id="no" name="brokerage_authority" @change="updateRadio('No')" value="No" tabindex="2">
					</label>
				</div> -->
				<button type="button" class="tw-btn mt-5 block m-auto" @click="nextSection" tabindex="3">Next</button>
			</div>
		</div>
	</Transition>
</template>

<script>
// import { mapState } from 'vuex';

export default {
	name: 'BrokerageAuthority',
	data(){
		return {
			brokerage_authority_options: ["Yes", "No"]
		}
	},
	computed: {
		// ...mapState({
		// 	brokerage_authority: state => state.brokerage_authority
		// }),
		brokerage_authority: {
			get() {
				return this.$store.state.brokerage_authority;
			},
			set(value) {
				this.$store.commit('updateBrokerageAuthority', value);
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
		updateRadio(value) {
			this.brokerage_authority = value;
		},	
		nextSection() {
			this.$router.push({name: 'cargoCarried'})
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