import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Houses from '../views/Houses.vue'
import Residents from '../views/Residents.vue'
import Visits from '../views/Visits.vue'
import Payments from '../views/Payments.vue'
import Activities from '../views/Activities.vue'

import Toasted from 'vue-toasted'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: Dashboard,
		children: [
			{
				path: '/dashboard/casas',
				name: 'houses',
				component: Houses
			},
			{
				path: '/dashboard/residentes',
				name: 'residents',
				component: Residents
			},
			{
				path: '/dashboard/visitas',
				name: 'visits',
				component: Visits
			},
			{
				path: '/dashboard/pagos',
				name: 'payments',
				component: Payments
			},
			{
				path: '/dashboard/actividades',
				name: 'activities',
				component: Activities
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

Vue.use(Toasted, {
	router
});

export default router
