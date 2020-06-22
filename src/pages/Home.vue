<template>
	<div>
		<MyHeader class="MyHeader"></MyHeader>
		<div>首页</div>
		<MyFooter class="MyFooter"></MyFooter>
	</div>
</template>

<script>
	import MyHeader from "../components/MyHeader.vue"
	import MyFooter from "../components/MyFooter.vue"
	
	export default {
		components:{
			MyHeader,MyFooter
		}
	}
</script>

<style>
</style>
