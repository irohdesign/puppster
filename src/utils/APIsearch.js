import axios from "axios";
const SUBMITURL = "https://dog.ceo/api/breed/";

export default {
    search: function(query) {
      return axios.get(SUBMITURL + query + "/image");
    }
  };
  