<template>
	<Transition appear>
		<div class="tw-card">
			<h1 class="tw-heading">Your Vehicles</h1>
			<div class="max-w-lg m-auto text-left">
				<div class="pb-9">
					<div class="p-4 flex justify-between items-center border-b border-slate-300" v-for="vehicle in vin_data" :key="vehicle">
						<div class="text-lg tracking-wider">
							<div class="font-display text-xl text-slate-800 tracking-wider font-semibold" v-text="`${vehicle.year} ${vehicle.make} ${vehicle.model}`"></div>
							<div class="tracking-widest text-slate-400 text-base uppercase font-medium" v-text="vehicle.vin"></div>
						</div>
						<button class="tw-btn tw-btn-small bg-red-400 text-white" @click="removeVIN(vehicle.vin)">Remove</button>
					</div>
					<label for="add_vin" class="mt-4 text-left flex items-center pl-4 pr-4 relative">
						<input type="text" name="add_vin" id="add_vin" class="mr-4 grow uppercase rounded-xl" :disabled="vin_data.length > 9" v-model="added_vin" required>
						<div class="tw-label">Enter a VIN</div>
						<button class="tw-btn tw-btn-small bg-green-400 text-white whitespace-nowrap" :disabled="added_vin.length === 0 || vin_data.length > 9" @click="addVIN()">Add VIN</button>
					</label>
				</div>
				<button type="button" class="tw-btn mt-5 block m-auto" @click="$router.push({name: 'selectPlan'})">Next</button>
			</div>
		</div>
	</Transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'TractorVINs',
	data(){
		return {
			added_vin: ''
		}
	},
	computed: {
		...mapState({
			usdot_data: state => state.usdot_data
		}),
		vin_data: {
			get(){
				return this.$store.state.vin_data;
			},
			set(value){
				this.$store.commit('updateVinData', value);
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
		addVIN(){
			if(this.added_vin.length > 0 && !this.vinIsDuplicate(this.added_vin)) {
				this.vinLookup(this.added_vin);
				this.added_vin = '';
			}				
		},
		vinIsDuplicate(vin){
			const matches = this.vin_data.filter(vechicle => {
				return vechicle.vin === vin
			});
			return matches.length > 0 ? true : false;
		},
		removeVIN(vin) {
			this.vin_data.forEach((vehicle, index) => {
				if (vehicle.vin === vin) {
					index > -1 ? this.vin_data.splice(index, 1) : false;
				}
			});			
		},
		vinIsValid(vin){
			const v = vin;
			var re = new RegExp("^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$");
			return v.match(re);
		},
		vinLookup(vin){
			const self = this;
			const vin_data = {
				vin: vin,
				make: String,
				model: String,
				year: String
			};
			fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`)
			.then(response => response.json())
			.then(function(data){
				console.log(data);
				data.Results.forEach(element => {
					if(element.Variable === 'Make') vin_data.make = element.Value;
					if(element.Variable === 'Model') vin_data.model = element.Value;
					if(element.Variable === 'Model Year') vin_data.year = element.Value;
				});
				if(vin_data.make !== null && vin_data.model !== null && vin_data.year !== null)
					self.$store.commit('addVin', vin_data);
			});
		}, 
		getAllVinData(){
			const self = this;
			this.usdot_data.vins.forEach(vin => self.vinLookup(vin));
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
		// if(this.$store.state.usdot_data.vins.length === 0) {
			this.getAllVinData();
		// } 
	}
}
</script>

<style lang="scss">
</style>