import housesApi from "@/api/houses.api";

const state = {
    houses: []
};

const getters = {
    availableHouses: state => state.houses
};

const mutations = {
    GET_HOUSES(state, houses) {
        state.houses = houses;
    },
    ADD_HOUSE(state, house) {
        state.houses.push(house);
    }
};

const actions = {
    createHouse({ commit }, data) {
        housesApi.createHouse(data,
            result => {
                commit("ADD_HOUSE", result.data.obj);
            },
            error => {
                return error;
            }
        );
    },
    getHouses({ commit }) {
        housesApi.getHouses(
            result => {
                commit("GET_HOUSES", result.data.obj);
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
