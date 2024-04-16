import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "67906f5a097741bcbfb9fafba5ff59b9",
  },
});
