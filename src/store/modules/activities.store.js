import activitiesApi from "@/api/activities.api";

const state = {
    activities: []
};

const getters = {
    availableActivities: state => state.activities
};

const mutations = {
    ADD_ACTIVITY(state, activity) {
        state.activities.push(activity);
    },
    GET_ACTIVITIES(state, activities) {
        state.activities = activities;
    }
};

const actions = {
    createActivity({ commit }, data) {
        activitiesApi.createActivity(data,
            result => {
                commit("ADD_ACTIVITY", result.data.obj);
            },
            error => {
                return error;
            }
        );
    },
    getActivities({ commit }) {
        activitiesApi.getActivities(
            result => {
                commit("GET_ACTIVITIES", result.data.obj);
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
