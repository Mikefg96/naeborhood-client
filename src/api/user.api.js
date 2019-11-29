import config from "@/../config";
import axios from "axios";

export default {
    createUser(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/user/create`, params)
          .then(onSuccess)
          .catch(onError);
    }
};
