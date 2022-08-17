<template>
<Transition appear>
	<div class="tw-card">
		<div class="tw-heading">Let's Get Started!</div>
		<h1 class="mb-8 text-slate-500">Take a few minutes and get a policy started.</h1>
		<label for="usdot" class="block mb-12 relative">
			<input type="text" required id="usdot" class="text-center w-4/5 text-xl font-light pt-4 pb-4 rounded-2xl" autocomplete="off" v-model="usdot_number" @keyup.enter="verifyDOTNumber">
			<div class="tw-label text-xl font-body font-light left-1/2 -translate-x-1/2">Enter your DOT Number</div>
		</label>
		<button type="button" class="tw-btn" @click="verifyDOTNumber">Get Started</button>
	</div>
</Transition>
</template>

<script>

export default {
	name: 'EnterDOT',
	data() {
		return {
			
		}
	},
	computed: {
		usdot_number: {
			get() {
				return this.$store.usdot_number;
			},
			set(value) {
				this.$store.commit('updateDOTNumber', value);
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
		verifyDOTNumber() {
			this.getDOTInformation(this.$store.state.usdot_number);
		},
		abbrState(input, to) {
			var states = [
				['Arizona', 'AZ'],
				['Alabama', 'AL'],
				['Alaska', 'AK'],
				['Arkansas', 'AR'],
				['California', 'CA'],
				['Colorado', 'CO'],
				['Connecticut', 'CT'],
				['District of Columbia', 'DC'],
				['Delaware', 'DE'],
				['Florida', 'FL'],
				['Georgia', 'GA'],
				['Hawaii', 'HI'],
				['Idaho', 'ID'],
				['Illinois', 'IL'],
				['Indiana', 'IN'],
				['Iowa', 'IA'],
				['Kansas', 'KS'],
				['Kentucky', 'KY'],
				['Louisiana', 'LA'],
				['Maine', 'ME'],
				['Maryland', 'MD'],
				['Massachusetts', 'MA'],
				['Michigan', 'MI'],
				['Minnesota', 'MN'],
				['Mississippi', 'MS'],
				['Missouri', 'MO'],
				['Montana', 'MT'],
				['Nebraska', 'NE'],
				['Nevada', 'NV'],
				['New Hampshire', 'NH'],
				['New Jersey', 'NJ'],
				['New Mexico', 'NM'],
				['New York', 'NY'],
				['North Carolina', 'NC'],
				['North Dakota', 'ND'],
				['Ohio', 'OH'],
				['Oklahoma', 'OK'],
				['Oregon', 'OR'],
				['Pennsylvania', 'PA'],
				['Rhode Island', 'RI'],
				['South Carolina', 'SC'],
				['South Dakota', 'SD'],
				['Tennessee', 'TN'],
				['Texas', 'TX'],
				['Utah', 'UT'],
				['Vermont', 'VT'],
				['Virginia', 'VA'],
				['Washington', 'WA'],
				['West Virginia', 'WV'],
				['Wisconsin', 'WI'],
				['Wyoming', 'WY'],
			];
			/* eslint-disable no-undef */
			if (to == 'abbr'){
				input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
				for(let i = 0; i < states.length; i++){
					if(states[i][0] == input){
						return(states[i][1]);
					}
				}    
			} else if (to == 'name'){
				input = input.toUpperCase();
				for(let i = 0; i < states.length; i++){
					if(states[i][1] == input){
						return(states[i][0]);
					}
				}    
			}
		},
		getDOTInformation(usdot) {
			const self = this;
			fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/id/${usdot}?webKey=27b663ed331bff071a9f02ba8d726e3558a665aa`)
			.then(response => response.json())
			.then(function(data) { 
				let obj = data.content;
				obj.phyState = self.abbrState(obj.phyState, 'name');

				// Temporary Values
				obj.ownerFirstName = "Luke";
				obj.ownerLastName = "David";
				obj.ownerEmail = "lucas@giganticdesign.com";
				obj.ownerPhone = "563-580-7440";
				obj.contactFirstName = "";
				obj.contactLastName = "";
				obj.contactEmail = "";
				obj.contactPhone = "";
				obj.vins = ['3ALXA7005JDJP9024', '3BPDLJ0X5KF105195', '2NPNHM6X5BM129425', '3HSNUAPT1GN012442', '1nkzxptx0pj244058', '3ALXA7009GDHD7190', '1HSDJAPR4GH226196', '1FVXA7CG1GLHD7202', '1XKFDP9X4DJ331854', '3HSDGAPN8FN659570'];
	
				self.$store.commit('updateDOTData', obj);
			})
			.then(function(){
				self.$router.push({name: 'verifyDOT'});
			});
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
		localStorage.removeItem('usdot_number')
		localStorage.removeItem('usdot_data')
		localStorage.removeItem('owner_is_contact')
		localStorage.removeItem('brokerage_authority')
		localStorage.removeItem('insurance_effective_date')
		localStorage.removeItem('cargo')
		localStorage.removeItem('plan_selected')
	}
}
</script>