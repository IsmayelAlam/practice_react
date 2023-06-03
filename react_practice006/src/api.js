import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID TMv22_9DELV4Rfzb2ZPOQPjMAh4hqXGuquw-g0hY7Os",
    },
    params: {
      query: term,
      orientation: "portrait",
    },
  });

  return response.data.results;
};

export default searchImage;
