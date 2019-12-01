import residentsApi from "@/api/residents.api";

const state = {
    residents: []
};

const getters = {
    availableResidents: state => state.residents
};

const mutations = {
    GET_RESIDENTS(state, residents) {
        state.residents = residents;
    },
    ADD_RESIDENT(state, resident) {
        state.residents.push(resident);
    }
};

const actions = {
    createResident({ commit }, data) {
        residentsApi.createResident(data,
            result => {
                commit("ADD_RESIDENT", result.data.obj);
            },
            error => {
                return error;
            }
        );
    },
    getResidents({ commit }) {
        residentsApi.getResidents(
            result => {
                commit("GET_RESIDENTS", result.data.obj);
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
