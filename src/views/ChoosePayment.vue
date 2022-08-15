<template>
	<Transition appear>
		
		<div class="questionset card">
			<h1 class="tw-heading text-center">Payment</h1>
			<div class="content">
				<div id="mywidget"></div>
			</div>
		</div>
	</Transition>
</template>

<script>
import { mapState } from 'vuex';
	
	export default {
		name: 'ChoosePayment',
		computed: {
			...mapState({
				plan_options: state => state.plan_options,
				plan_selected: state => state.plan_selected
			}),
			plan_selected: {
				get(){
					return this.$store.state.plan_selected;
				},
				set(value){
					this.$store.commit('updatePlans', value);
				}
			},

		},
		methods: {
			createOrder(amount) {
				// Fetching the data from  your server
				const self = this;
				const title = `Title-${ new Date().toUTCString() }`;
				fetch("http://localhost:4200/create-payment-intent", {
				// await fetch("https://anddone.giganticdesign.com/create-payment-intent", {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
						amount: amount,
						title: title,
						shortDescription: "shortDescription",
						paymentDescription: "paymentDescription",
						invoiceNumber: "invoiceNumber-005",
						expiresIn: "3000",
						intent: { 
							paymentTypes: [
								"DebitCard",
								"CreditCard",
								"ACH"
							]
						}
					}),
				}).then(res=> res.json()).then((res) => {
					
					const pluginOption ={
						theme : "classic",  // classic, modern, minimal, vibrant
						container: "mywidget",  // id of the div to render the widget
					}

					//Assigning the payment token received from your server
					const paymentIntentToken=res.paymentIntentToken;
					
					// Initialize the plugin with token and options
					// eslint-disable-next-line no-undef
					const andDone = new AndDone(paymentIntentToken, pluginOption); 

					let checkPayment = setInterval(() => {
						fetch(`https://flywheel.giganticdesign.com/ipfs/check-payment.php?token=${paymentIntentToken}`)
						.then(response => response.text())
						.then(result => {
							if(result == 'success'){
								clearInterval(checkPayment);
								self.$router.push({name: 'accountBound'});
							}
						})
						.catch(error => console.log('error', error));
					}, 500);
					// Using onload function to perform some action after the widget is loaded  and ready
					// eslint-disable-next-line no-unused-vars
					andDone.onload = (plugin) => {}
				})
			}
		},
		mounted(){
			const plan = this.plan_options.filter(function(opt){
				return opt.selected;
			})[0]
			this.createOrder(plan.premium.amount);
		}
	}
</script>