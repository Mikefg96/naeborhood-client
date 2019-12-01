import config from "@/../config";
import axios from "axios";

export default {
    createVisit(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/visits/create`, params)
          .then(onSuccess)
          .catch(onError);
    },
    getVisits(onSuccess, onError) {
        return axios
          .get(`${config.host}/visits`)
          .then(onSuccess)
          .catch(onError);
    }
};
