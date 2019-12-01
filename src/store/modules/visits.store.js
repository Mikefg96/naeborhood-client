import visitsApi from "@/api/visits.api";

const state = {
    visits: []
};

const getters = {
    availableVisits: state => state.visits
};

const mutations = {
    GET_VISITS(state, visits) {
        state.visits = visits;
    },
    ADD_VISIT(state, visit) {
        state.visits.push(visit);
    }
};

const actions = {
    createVisit({ commit }, data) {
        visitsApi.createVisit(data,
            result => {
                commit("ADD_VISIT", result.data.obj);
            },
            error => {
                return error;
            }
        );
    },
    getVisits({ commit }) {
        visitsApi.getVisits(
            result => {
                commit("GET_VISITS", result.data.obj);
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
