const url = "https://newsapi.org/v2/top-headlines?country=us";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "ea403db9f526455aba7beda8873e98c6",
  },
};
console.log("url");

// Fetch data from API
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const mainSection = document.getElementById("cardSection");

    const loader = document.getElementById("loader");

    // Create card for each object
    data.articles.forEach((item) => {
      const card = `
        <div class="col-6 col-md-4 col-lg-3 p-2">
          <div class="card h-100">
            <img class="card-img-top" src="${item.urlToImage}" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
        </div>
      `;

      loader.remove();

      // Append card to main section
      mainSection.innerHTML += card;
    });
  })
  .catch((error) => {
    loader.style.display = "none";
    console.log(error);
  });
