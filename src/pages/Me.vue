<template>
	<div>
		<MyHeader class="MyHeader"></MyHeader>
		<Mehead></Mehead>
		<MyFooter class="MyFooter"></MyFooter>
	</div>
	
</template>

<script>
	import Mehead from "../components/Mehead.vue"
	import MyHeader from "../components/MyHeader.vue"
	import MyFooter from "../components/MyFooter.vue"
	export default{
		components:{
			Mehead,MyHeader,MyFooter
		}
	}
</script>

<style>
	
</style>
