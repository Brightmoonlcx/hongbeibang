import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "../pages/Home.vue"
import Show from "../pages/Show.vue"
import QuestionAndAnswer from "../pages/QuestionAndAnswer.vue"
import Me from "../pages/Me.vue"
import Login from "../pages/Login.vue"
let routes = [
	{path:"/",component:Home},
	{path:"/show",name:"show",component:Show},
	{path:"/questionandanswer",name:"questionandanswer",component:QuestionAndAnswer},
	{path:"/login",name:"login",component:Login},
	{path:"/me",name:"me",component:Me}
]

let router = new Router({
	routes
});

export default router