const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        console.log(res.data)
    } catch (error) {
        console.log("Error: ", err);
    }
})

 