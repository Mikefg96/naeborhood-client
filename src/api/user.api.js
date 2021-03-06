import config from "@/../config";
import axios from "axios";

export default {
    createUser(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/user/create`, params)
          .then(onSuccess)
          .catch(onError);
    },
    loginUser(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/user/login`, params)
          .then(onSuccess)
          .catch(onError);
    }
};
