import newRequest from "../utils/newRequest";

const getPostsByCat = async (cat) => {
  const data = await newRequest.get(`/post/cat/${cat}`);
  return data;
};

export default getPostsByCat;
