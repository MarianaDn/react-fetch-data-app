import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kdaa2MfYJay7MyiBxFcjAMBzWfR8Krm1KYi1GH3PypA",
  },
});
