const form = document.querySelector("#form");
const searchArea = document.querySelector(".searchArea");
const resultsArea = document.querySelector(".resultsArea");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  try {
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = "";
  } catch (error) {
    console.log("Error: ", error);
  }
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const showImage = document.createElement("img");
      showImage.src = result.show.image.medium;
      resultsArea.append(showImage);
    }
  }

