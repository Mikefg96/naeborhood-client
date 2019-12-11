import config from "@/../config";
import axios from "axios";

export default {
    createActivity(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/activities/create`, params)
          .then(onSuccess)
          .catch(onError);
    },
    getActivities(onSuccess, onError) {
        return axios
          .get(`${config.host}/activities`)
          .then(onSuccess)
          .catch(onError);
    }
};
