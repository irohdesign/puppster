import axios from "axios";
const RANDOMURL = "https://dog.ceo/api/breeds/image/random/1";

export default {
    search: function(query) {
      return axios.get(RANDOMURL);
    }
  };
  