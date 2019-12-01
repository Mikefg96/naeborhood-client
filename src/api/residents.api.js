import config from "@/../config";
import axios from "axios";

export default {
    createResident(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/residents/create`, params)
          .then(onSuccess)
          .catch(onError);
    },
    getResidents(onSuccess, onError) {
        return axios
          .get(`${config.host}/residents`)
          .then(onSuccess)
          .catch(onError);
    }
};
