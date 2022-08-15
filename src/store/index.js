import { createStore } from 'vuex';

const store = createStore({
	state: {
		usdot_number: Number,
		usdot_data: {},
		page_valid: false,
		owner_is_contact: false,
		insurance_effective_date: "",
		brokerage_authority: String,
		plan_selected: 0,
		vin_data: [],
		show_payment: false,
		prev_route: Object,
		curr_route: Object,
		next_route: Object,
		prev_route_index: Number,
		curr_route_index: Number,
		next_route_index: Number,
		plan_options: [
			{
				selected: true,
				deductible: {
					label: "No Deductible",
					amount: 0
				},
				premium: {
					label: '$12,000',
					amount: 12000
				}
			},
			{
				selected: false,
				deductible: {
					label: "$1,000",
					amount: 1000
				},
				premium: {
					label: '$10,000',
					amount: 10000
				}
			},
			{
				selected: false,
				deductible: {
					label: "$5,000",
					amount: 5000
				},

				premium: {
					label: '$9,000',
					amount: 9000
				}
			}
		],
		cargo: [
			{
				carried: false,
				name: 'General Freight',
				percentage: 0
			},
			{
				carried: false,
				name: 'Bulk Liquid',
				percentage: 0
			},
			{
				carried: false,
				name: 'Furniture',
				percentage: 0
			},
			{
				carried: false,
				name: 'Beer',
				percentage: 0
			},
			{
				carried: false,
				name: 'Live Animals',
				percentage: 0
			},
			{
				carried: false,
				name: 'Refrigerated Goods',
				percentage: 0
			}
		]
	},
	mutations: {
		initializeStore(state) {
			console.log('asdf');
			if (localStorage.getItem('usdot_number')) {
				state.usdot_number = localStorage.getItem('usdot_number')
			}
			if (localStorage.getItem('usdot_data')) {
				state.usdot_data = JSON.parse(localStorage.getItem('usdot_data'))
			}
			if (localStorage.getItem('owner_is_contact')) {
				state.owner_is_contact = localStorage.getItem('owner_is_contact')
			}
			if (localStorage.getItem('brokerage_authority')) {
				state.brokerage_authority = localStorage.getItem('brokerage_authority')
			}
			if (localStorage.getItem('insurance_effective_date')) {
				state.insurance_effective_date = localStorage.getItem('insurance_effective_date')
			}
			if (localStorage.getItem('cargo')) {
				state.cargo = JSON.parse(localStorage.getItem('cargo'))
			}
			if (localStorage.getItem('plan_selected')) {
				state.plan_options.forEach(function(opt){
					if(opt.deductible.amount == parseInt(localStorage.getItem('plan_selected'))) {
						opt.selected = true;
					} else {
						opt.selected = false;
					}
				});		
				state.plan_selected = parseInt(localStorage.getItem('plan_selected'))
			}
		},
		updateRouteIndex(state, index) {
			state.prev_route_index = index - 1;
			state.curr_route_index = index;
			state.next_route_index = index + 1;
		},
		updatePrevRoute(state, route) {
			state.prev_route = route;
		},
		updateCurrentRoute(state, route) {
			state.curr_route = route;
		},
		updateNextRoute(state, route) {
			state.next_route = route;
		},
		updateShowPayment(state, show_payment){
			state.show_payment = show_payment;
		},
		updateDOTNumber(state, usdot_number) {
			localStorage.setItem('usdot_number',usdot_number);
			state.usdot_number = usdot_number;
		},

		updateDOTData(state, usdot_data) {
			localStorage.setItem('usdot_data', JSON.stringify(usdot_data));
			state.usdot_data = usdot_data;
		},

		addVin(state, vin_data) {
			state.vin_data.push(vin_data);
		},

		updateOwnerIsContact(state, owner_is_contact) {
			localStorage.setItem('owner_is_contact', owner_is_contact)
			state.owner_is_contact = owner_is_contact;
		},

		updateBrokerageAuthority(state, brokerage_authority) {
			localStorage.setItem('brokerage_authority', brokerage_authority)
			state.brokerage_authority = brokerage_authority;
		},

		updateInsuranceEffectiveDate(state, insurance_effective_date) {
			localStorage.setItem('insurance_effective_date', insurance_effective_date)
			state.insurance_effective_date = insurance_effective_date;
		},

		updateCargo(state, cargo) {
			localStorage.setItem('cargo', JSON.stringify(cargo))
			state.cargo = cargo;
		},
		
		updatePlans(state, plan_selected) {
			
			state.plan_options.forEach(function(opt){
				if(opt.deductible.amount == plan_selected) {
					opt.selected = true;
				} else {
					opt.selected = false;
				}
			});
			localStorage.setItem('plan_selected', plan_selected)
			state.plan_selected = plan_selected;
			
		},

		updatePageValid(state, page_valid) {
			state.page_valid = page_valid;
		}
	},
	actions: {
		updateOwnerIsContact(state, owner_is_contact) {
			state.owner_is_contact = owner_is_contact;
		}
	},
});

export default store;