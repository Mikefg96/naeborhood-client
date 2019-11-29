import userApi from "@/api/user.api";

const state = {

};

const getters = {

};

const mutations = {

};

const actions = {
    createUser({ commit }, data) {
        userApi.createUser(data,
            result => {
                // TODO: '¿Cómo se hace cuando no quieres commitear nada?'
                commit("", result.data);
            },
            error => {
                return error;
            }
        );
    }
};

export default {
    namespaced: true,
    state: {
        ...state
    },
    getters: {
        ...getters
    },
    mutations,
    actions
};
