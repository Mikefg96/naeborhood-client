import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import user from "@/store/modules/user.store";
import houses from "@/store/modules/houses.store";
import residents from "@/store/modules/residents.store";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user: user,
		houses: houses,
		residents: residents
	},
	store: store,
	mutations: mutations,
	actions: actions
});
