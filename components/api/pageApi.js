import axios from "axios";

export const pageApi = async () => {
  const res = await axios.get(
    "https://web-page-b0sx.onrender.com/pages/getPages"
  );
};
