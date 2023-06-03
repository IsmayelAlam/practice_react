import axios from "axios";

const searchImage = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client - ID TMv22_9DELV4Rfzb2ZPOQPjMAh4hqXGuquw-g0hY7Os",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

export default searchImage;
