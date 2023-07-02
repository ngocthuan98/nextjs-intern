import axios from "axios";

export const blogApi = async () => {
  const res = await axios.get(
    "https://web-page-b0sx.onrender.com/blogs/getBlogs"
    
  );
  return res?.data?.data
};
