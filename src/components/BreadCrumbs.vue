<template>
	<div class="progress">
		<!-- <div class="prev">{{prev_route.name}}</div>
		{{curr_route.name}}
		<div class="next">{{next_route.name}}</div> -->
	</div>
</template>

<script>
import { mapState } from 'vuex'


	export default {
		name: 'BreadCrumbs',
		data() {
			return {
			}
		},
		computed: {
			...mapState({
				prev_route_index: state => state.prev_route_index,
				curr_route_index: state => state.prev_route_index,
				next_route_index: state => state.next_route_index
			}),
			prev_route() {
				if(this.$store.state.prev_route_index >= 0) {
					return this.$router.getRoutes()[this.$store.state.prev_route_index];
				} else {
					return '';
				}
			},
			curr_route() {
				return this.$router.getRoutes()[this.$store.state.curr_route_index];
			},
			next_route() {
				if(this.$store.state.prev_route_index < this.$router.getRoutes().length) {
					return this.$router.getRoutes()[this.$store.state.next_route_index];
				} else {
					return '';
				}
			}
		},
		mounted(){
		}
	}
	
	
</script>