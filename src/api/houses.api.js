import config from "@/../config";
import axios from "axios";

export default {
    createHouse(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/houses/create`, params)
          .then(onSuccess)
          .catch(onError);
    },
    getHouses(onSuccess, onError) {
        return axios
          .get(`${config.host}/houses`)
          .then(onSuccess)
          .catch(onError);
    },
    getFreeHouses(onSuccess, onError) {
      return axios
        .get(`${config.host}/houses/free`)
        .then(onSuccess)
        .catch(onError);
  }
};
