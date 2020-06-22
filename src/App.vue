<template>
  <div id="app">
	 <div class="content">
		 <router-view></router-view>
	 </div>
     
  </div>
</template>

<script>


export default {

  name: 'app'
  // components:{
	 //  MyHeader,MyFooter
  // }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	text-decoration: none;
	list-style: none;
}
html,body{
	height: 100%;
	width: 100%;
}
#app{
	display: flex;
	flex-direction: column;
	height: 100%;
}
#app .content{
	flex:1;
	overflow: auto;
}
.MyFooter{
	position: fixed;
	bottom: 0;
	background: white;
}
.MyHeader{
	position: fixed;
	top: 0;
	background: white;
}
</style>
