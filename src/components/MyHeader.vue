<template>
	<div class="header">
		<div>
			<img src="../assets/img/headicon.png">
			<div class="search">
				<span>搜索食谱/食材，烘焙/家常菜一应俱全</span>
				<input type="text">
			</div>
			
			<img src="../assets/img/headicon2.png">
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.header{
		height: 0.44rem;
		width: 100%;
	}
	.header > div{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100%;
	}
	.search{
		height: 0.35rem;
		width: 2.49rem;
		border-radius: 5px;
		background: #F5F7F9;
		text-align: center;
		line-height: 0.35rem;
	}
	.search span{
		color: #999999;
		font-size: 0.12rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		
	}
	.search input{
		width: 0;
		height: 0;
		border: none;
	}
	.header img{
		width: 0.27rem;
		height: 0.27rem;
	}
</style>
