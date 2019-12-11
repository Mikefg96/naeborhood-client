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
    },
    loginUser({ commit }, data) {
        return new Promise((resolve, reject) => {
            userApi.loginUser(data,
                result => {
                    // TODO: '¿Cómo se hace cuando no quieres commitear nada?'
                    commit("", result.data);                  
                    resolve(result);
                },
                error => {
                    reject(error);
                }
            );
        })
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
