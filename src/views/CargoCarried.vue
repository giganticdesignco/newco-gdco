<template>
	<Transition appear>
		<div class="tw-card">
			<h1 class="tw-heading">Cargo Carried</h1>
			<div class="max-w-sm m-auto text-left">

				<div class="flex items-center mb-4" v-for="(item, index) in cargo" :key="item.name">
					<label v-text="item.name" class="text-xl"></label>
					<label :for="'cargo_carried_'+index+'_percentage'" class="relative w-24  ml-auto">
						<input type="number"
								max="100" 
								:name="'cargo_carried_'+index+'_percentage'" 
								:id="'cargo_carried_'+index+'_percentage'" 
								v-model="item.percentage"
								class="text-right w-full rounded-lg">
						<div class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">%</div>
					</label>
				</div>
				
				<button type="button" class="tw-btn mt-5 block m-auto" @click="$router.push({name: 'tractorVINs'})">Next</button>
			</div>
		</div>
	</Transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'CargoCarried',
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			cargo: state => state.cargo
		}),
		cargo: {
			get() {
				return this.$store.state.cargo;
			},
			set(value) {
				this.$store.commit('updateCargo', value);
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
	watch: {
		cargo: {
			deep: true,
			handler() {
				this.$store.commit('updateCargo', this.cargo)
			}
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
		}
	},
	mounted() {
		this.setRoutes();
	}
}
</script>