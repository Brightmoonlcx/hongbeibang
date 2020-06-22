<template>
	<div style="margin-top: 0.44rem;">
		<div v-for="q in question">
			<h3>{{q.title}}</h3>
			<div class="pictext">
				<img :src="q.recipe.image">
				<div class="text">
					<p>{{q.recipe.title}}</p>
					<p>作者：{{q.recipe.clientName}}</p>
				</div>
			</div>
			<div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name:'Question',
		data(){
			return{
				question:[]
			}
		},
		created(){
			axios.get("https://api.hongbeibang.com/question/getNew?_t=1592536614815&csrfToken=&pageIndex=0&pageSize=10")
			.then((res)=>{
				this.question = res.data.data.content.data;
				console.log(res.data.data.content.data);
			})
		}
	}
</script>

<style scoped>
	.section{
		margin-top: 0.44rem;
		display: flex;
		flex-direction: column;
	}
	.pictext{
		display: flex;
		justify-content: space-around;
		/* width: 80%; */
		margin: 0 auto;
		background: #F5F7F9;
	}
	.pictext img{
		width: 0.7rem;
		height: 0.7rem;
	}
	.text{
		font-size: 12px;
		width: 2.6rem;
	}
</style>
