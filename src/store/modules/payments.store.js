import paymentsApi from "@/api/payments.api";

const state = {
    stallPayments: [],
    monthlyPayments: []
};

const getters = {
    availableStallPayments: state => state.stallPayments,
    availableMonthlyPayments: state => state.monthlyPayments
};

const mutations = {
    GET_STALL_PAYMENTS(state, stallPayments) {
        state.stallPayments = stallPayments;
    },
    GET_MONTHLY_PAYMENTS(state, monthlyPayments) {
        state.monthlyPayments = monthlyPayments;
    },
    ADD_STALL_PAYMENT(state, stallPayment) {
        state.stallPayments.push(stallPayment);
    },
    ADD_MONTHLY_PAYMENT(state, monthlyPayment) {
        state.monthlyPayments.push(monthlyPayment);
    }
};

const actions = {
    createPayment({ commit }, data) {
        paymentsApi.createPayment(data,
            result => {
                result.data.obj.type == "Caseta" ?  commit("ADD_STALL_PAYMENT", result.data.obj) :  commit("ADD_MONTHLY_PAYMENT", result.data.obj);
            },
            error => {
                return error;
            }
        );
    },
    getStallPayments({ commit }) {
        paymentsApi.getStallPayments(
            result => {
                commit("GET_STALL_PAYMENTS", result.data.obj);
            },
            error => {
                return error;
            }
        );
    },
    getMonthlyPayments({ commit }) {
        paymentsApi.getMonthlyPayments(
            result => {
                commit("GET_MONTHLY_PAYMENTS", result.data.obj);
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
