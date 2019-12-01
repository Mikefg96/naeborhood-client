import housesApi from "@/api/houses.api";

const state = {
    houses: [],
    freeHouses: []
};

const getters = {
    availableHouses: state => state.houses,
    freeHouses: state => state.freeHouses
};

const mutations = {
    GET_HOUSES(state, houses) {
        state.houses = houses;
    },
    GET_FREE_HOUSES(state, freeHouses) {
        state.freeHouses = freeHouses;
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
    },
    getFreeHouses({ commit }) {
        housesApi.getFreeHouses(
            result => {
                commit("GET_FREE_HOUSES", result.data.obj);
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
