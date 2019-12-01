import config from "@/../config";
import axios from "axios";

export default {
    createPayment(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/payments/create`, params)
          .then(onSuccess)
          .catch(onError);
    },
    getStallPayments(onSuccess, onError) {
        return axios
          .get(`${config.host}/payments/stall`)
          .then(onSuccess)
          .catch(onError);
    },
    getMonthlyPayments(onSuccess, onError) {
        return axios
          .get(`${config.host}/payments/monthly`)
          .then(onSuccess)
          .catch(onError);
    }
};
