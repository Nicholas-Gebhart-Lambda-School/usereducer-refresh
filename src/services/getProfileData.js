import axios from "axios";

export default async () => {
  const result = await axios.get("url");

  return result.data;
};
