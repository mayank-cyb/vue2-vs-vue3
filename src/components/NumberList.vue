<template>
	<ul class="list-number">
		<li v-for="number in arr" :key="number">
			{{ number }}
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		arr: { 
			type: Array
		}
	}
}
</script>
<style lang="scss" scoped>
	.list-number {
		color: $color_secondary;
		font-weight: $bold;
	}
</style>
