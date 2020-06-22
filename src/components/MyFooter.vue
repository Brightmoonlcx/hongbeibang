<template>
	<div>
		<ul>
			<li><router-link to="/" exact>学烘焙</router-link></li>
			<li><router-link to="/show">烘焙圈</router-link></li>
			<li><router-link to="/questionandanswer">问答</router-link></li>
			<li><router-link to="/me">我</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	div{
		width: 100%;
	}
	ul{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 0.49rem;
		border-top: 0.01rem solid gray;
	}
	ul li{
		width: 25%;
		height: 100%;
		text-align: center;
		line-height: 0.49rem;
	}
	ul li a{
		color: #999999;
	}
	.router-link-active{
		color: black;
	}
</style>
