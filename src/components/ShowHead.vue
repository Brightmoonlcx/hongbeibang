<template>
	<div class="header">
		<div>
			<div class="imgbox" v-for="img in imgs">
				<img :src="img.image">
			</div>
		</div>
		
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data(){
			return{
				imgs:[]
			}
		},
		created(){
			axios.get("https://api.hongbeibang.com/feed/getCategory?_t=1592467665979&csrfToken=",)
			.then((res)=>{
				this.imgs = res.data.data.category[0].item;
				console.log(res.data.data.category[0].item);
			})
		}
	}
</script>

<style scoped>
	.header{
		overflow-x: auto;
		margin-top: 0.44rem;
	}
	.header>div{
		width: 11.2rem;
		
	}
	.imgbox{
		width: 1.5rem;
		padding: 0.05rem;
	}
	.imgbox{
		display: inline-block;
	}
	img{
		width: 1.5rem;
		height: 0.855rem;
		display: inline-block;
	}
</style>
