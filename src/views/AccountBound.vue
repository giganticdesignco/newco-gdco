<template>
<Transition appear>
	<main>
		<div class="tw-card" v-if="account.uniqueEntity.length === 1">
			<h1 class="tw-heading mb-2">Binding Account</h1>
			<p>Please wait while we bind your account.</p>
			<img src="@/assets/images/loading.svg" class="loading"/>
		</div>

		<div class="tw-card" v-else>
			<h1 class="tw-heading mb-2">Hooray!</h1>
			<p class="text-2xl mb-8">We've bound your account!</p>
			<p><strong>Policy Number</strong></p>
			<p v-text="account.uniqueEntity" class="font-bold text-7xl"></p>
		</div>

	</main>
</Transition>
</template>

<script>
import confetti from 'canvas-confetti';
	export default {
		name: 'AccountBound',
		data(){
			return {
				account: {
					accountName: String,
					agencyCode: String,
					branchCode: String,
					contactFirstName: String,
					contactLastName: String,
					invoiceLayout: String,
					isPersonal: Boolean,
					OptionName: String,
					serviceRoles: Array,
					statementLayout: String,
					statementPageBreak: String,
					uniqueEntity: Number
				}
			}
		},	
		methods: {
			createClient() {
				const self = this;
				fetch(`https://flywheel.giganticdesign.com/swagger/create-client.php?firstname=${this.$store.state.usdot_data.ownerFirstName}&lastname=${this.$store.state.usdot_data.ownerLastName}&company=${this.$store.state.usdot_data.legalName}`)
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					self.account = data;
					self.fireConfetti()
				});
			},
			fireConfetti(){
				var count = 200;
				var defaults = {
				origin: { y: 0.3 }
				};

				function fire(particleRatio, opts) {
				confetti(Object.assign({}, defaults, opts, {
					particleCount: Math.floor(count * particleRatio)
				}));
				}

				fire(0.25, {
					spread: 26,
					startVelocity: 55,
				});
				fire(0.2, {
					spread: 60,
				});
				fire(0.35, {
					spread: 100,
					decay: 0.91,
					scalar: 0.8
				});
				fire(0.1, {
					spread: 120,
					startVelocity: 25,
					decay: 0.92,
					scalar: 1.2
				});
				fire(0.1, {
					spread: 120,
					startVelocity: 45,
				});
			}
		},
		mounted(){
			console.log(this.account.uniqueEntity.length);
			this.createClient();
		}
	}
</script>

<style lang="scss" scoped>
.loading {
	margin: 0 auto;
}
</style>