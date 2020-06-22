<template>
	<div>
		<MyHeader class="MyHeader"></MyHeader>
		<Question></Question>
		<MyFooter class="MyFooter"></MyFooter>
	</div>
</template>

<script>
	import Question from "../components/Question.vue"
	import MyHeader from "../components/MyHeader.vue"
	import MyFooter from "../components/MyFooter.vue"
	export default {
		components:{
			Question,MyHeader,MyFooter
		}
	}
</script>

<style>
	
</style>
