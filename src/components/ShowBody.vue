<template>
	<div>
		<div v-for="item in content" class="container">
			<div class="header">
				<img :src="item.clientImage">
				<div>
					<div>{{item.clientName}}</div>
					<div>{{item.createTime}}</div>
				</div>
			</div>
			<div class="tag">
				
			</div>
			<div class="cont">
				<div>
					<div></div>
					<p>{{item.introduce}}</p>
					<div>
						<img :src="item.image">
					</div>
					<div class="contfooter">
						<div>点赞</div>
						<div>礼物</div>
						<div>评论</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import axios from "axios"
	export default {
		data(){
			return {
				content:[]
			}
		},
		created(){
			axios.get("https://api.hongbeibang.com/v2/feed/getNew?_t=1592446501205&csrfToken=&pageIndex=0&pageSize=10")
			.then((res)=>{
				this.content = res.data.data.content;
				
				
				// console.log(res.data.data.content);
			})
		}
		// methods(){
			
		// }
		
	}
</script>

<style scoped>
	.container{
		/* border: 1px solid #808080; */
		border-bottom: 10px solid #F5F7F9;
		padding: 0.1rem;
	}
	.header{
		display: flex;
		
	}
	.header>img{
		display: block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
	}
	.cont img{
		width: 50%;
	}
	.contfooter{
		display: flex;
		justify-content: space-around;
		margin-top: 0.15rem;
		height: 0.3rem;
		font-size: 12px;
		color: #999999;
		align-items: center;
	}
</style>
