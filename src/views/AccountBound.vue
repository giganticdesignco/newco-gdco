<template>
<Transition appear>
	<div class="tw-card">
		<h1 class="tw-heading">Account Binding</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas accusamus deserunt animi quam deleniti magnam accusantium asperiores odit id dolorum praesentium ipsum rerum, atque aut ex voluptates repudiandae earum!</p>
	</div>
</Transition>
</template>

<script>
	export default {
		name: 'AccountBound',
		methods: {
			createClient() {
				fetch(`https://flywheel.giganticdesign.com/swagger/create-client.php?firstname=${this.$store.state.usdot_data.ownerFirstName}&lastname=${this.$store.state.usdot_data.ownerLastName}&company=${this.$store.state.usdot_data.legalName}`)
				.then((response) => response.json())
				.then((data) => console.log(data));
			}
		},
		mounted(){
			this.createClient();
		}
	}
</script>