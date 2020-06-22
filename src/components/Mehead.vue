<template>
	<div class="container">
		<div class="person">
			<img src="../assets/img/b8.jpg">
			<div>
				<p>烘培帮</p>
				<p>Lv1</p>
			</div>
			<span>></span>
		</div>
		<div class="social">
			<div>
				<p>0</p>
				<p>关注</p>
			</div>
			<div>
				<p>0</p>
				<p>粉丝</p>
			</div>
			<div>
				<p>0</p>
				<p>帮贡</p>
			</div>
		</div>
		<p class="trends">这个人很懒~什么都没留下~</p>
		<div class="mytask">
			<div>
				<div></div>
				<p>我的收藏</p>
			</div>
			<div>
				<div></div>
				<p>我的收藏</p>
			</div>
			<div>
				<div></div>
				<p>我的收藏</p>
			</div>
			<div>
				<div></div>
				<p>我的收藏</p>
			</div>
		</div>
		<div class="mywork">
			<ul>
				<li>食谱—0</li>
				<li>作品—0</li>
			</ul>
			<div>
				<img src="../assets/img/b8.jpg">
				<p>分享是一种美德</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.container{
		/* background: #F5F7F9; */
		margin-top: 0.44rem;
	}
	.person{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.1rem;
		margin-top: 0.2rem;
	}
	.person>div{
		margin-right: 2rem;
	}
	.person img{
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
	}
	.social{
		display: flex;
		justify-content: flex-start;
		margin-top: 0.1rem;
	}
	.social>div{
		width: 1rem;
		text-align: center;
	}
	.trends{
		display: block;
		font-size: 0.14rem;
		height: 0.5rem;
		line-height: 0.5rem;
		padding-left: 0.1rem;
	}
	.mytask{
		display: flex;
		justify-content: space-around;
		height: 1rem;
		align-items: center;
		border-bottom: 0.1rem solid #F5F7F9;
	}
	.mywork ul{
		display: flex;
		justify-content: center;
		width: 100%;
		
	}
	.mywork ul li{
	    padding: 0.1rem;
	}
	.mywork > div{
		text-align: center;
	}
	.mywork > div > img{
		width: 80%;
	}
</style>
