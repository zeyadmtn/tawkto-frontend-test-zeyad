import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import HomePage from './views/HomePage.vue';
import CategoryPage from './views/CategoryPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/category/:categoryID',
			name: 'category',
			component: CategoryPage,
			props: true,
		},
	],
});

new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
