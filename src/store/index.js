import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import user from "@/store/modules/user.store";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user: user
	},
	store: store,
	mutations: mutations,
	actions: actions
});
