import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import user from "@/store/modules/user.store";
import houses from "@/store/modules/houses.store";
import residents from "@/store/modules/residents.store";
import visits from "@/store/modules/visits.store";
import payments from "@/store/modules/payments.store";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user: user,
		houses: houses,
		residents: residents,
		visits: visits,
		payments: payments
	},
	store: store,
	mutations: mutations,
	actions: actions
});
