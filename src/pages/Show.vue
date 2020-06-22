<template>
	<div>
		<MyHeader class="MyHeader"></MyHeader>
		<ShowHeader></ShowHeader>
		<ShowBody></ShowBody>
		<MyFooter class="MyFooter"></MyFooter>
	</div>
</template>

<script>
	import ShowBody from "../components/ShowBody.vue"
	import ShowHeader from "../components/ShowHead.vue"
	import MyHeader from "../components/MyHeader.vue"
	import MyFooter from "../components/MyFooter.vue"
	
	export default{
		components:{
			ShowBody,ShowHeader,MyHeader,MyFooter
		}
	}
</script>

<style scoped>
	
</style>
