import axios from "axios";

export const collectionApi = async () => {
  const res = await axios.get(
    "https://web-page-b0sx.onrender.com/collections/getCollections"
  );
};
