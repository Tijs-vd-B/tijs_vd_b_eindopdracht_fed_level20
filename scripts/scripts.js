// initial-test-stuff
// movies.forEach((element) => {
//   console.log(element.Title);
// });
// const names = (array) => array.map((n) => n.Title); // independent of superheroes, could work on all arrays ...
// console.log(names(movies));
const elementMovieList = document.getElementById("movie-list");

// adds elements (with content from array) to movie-list
const addMoviesToDom = function (array) {
  array.forEach((e) => {
    let newObjItem = document.createElement("obj");
    newObjItem.classList.add("movie-list__image");
    // newListItem.class = "movie-container__item";
    let newAItem = document.createElement("a");
    newAItem.href = "https://www.imdb.com/title/" + e.imdbID;
    newAItem.target = "blank";
    newAItem.classList.add("button");
    let newImgItem = document.createElement("img");
    newImgItem.src = e.Poster;
    newImgItem.alt = e.Title;
    let newBtnItem = document.createElement("div");
    newBtnItem.classList.add("button");
    newBtnContent = document.createElement("p");
    // newListItem.classList.add("movie-list-item"); // no longer needed
    elementMovieList.appendChild(newObjItem);
    newObjItem.appendChild(newImgItem);
    // newObjItem.appendChild(newBtnItem);
    // newBtnItem.appendChild(newAItem);
    newObjItem.appendChild(newAItem); // a item with button class > whole area is the link
    newAItem.appendChild(newBtnContent);
    newBtnContent.appendChild(document.createTextNode("Read more"));
  });
};
// console.log(movieTitles(movies)); // test

const radioList = document.querySelectorAll("#radio");
radioList.forEach(function (btn) {
  btn.addEventListener("change", function (e) {
    switch (e.target.value) {
      case "all-movies":
        console.log(e.target.value);
        filterMovieTitle("");
        break;
      case "latest-movies":
        console.log(e.target.value);
        filterMovieAge(2014);
        break;
      case "avengers-movies":
        console.log(e.target.value);
        filterMovieTitle("Avengers");
        break;
      case "batman-movies":
        console.log(e.target.value);
        filterMovieTitle("Batman");
        break;
      case "x-men-movies":
        filterMovieTitle("X-Men");
        break;
      case "princess-movies":
        console.log(e.target.value);
        filterMovieTitle("Princess");
        break;
    }
  });
});
const filterMovieTitle = function (name) {
  clearMovieList();
  addMoviesToDom(
    movies.filter((n) => n.Title.toLowerCase().includes(name.toLowerCase()))
  );
};

const filterMovieAge = function (year) {
  console.log(movies.Year);
  clearMovieList();
  addMoviesToDom(movies.filter((n) => n.Year >= year));
};

// clears the elements added
const clearMovieList = function () {
  let elementMovieListItem = elementMovieList.querySelectorAll("obj");
  elementMovieListItem.forEach(function (e) {
    elementMovieList.removeChild(e);
  });
};

// Adding search functionality
const searchBox = document.getElementById("search-text");
function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = searchBox.value;
  // Using the value
  console.log("searching with:", inputVal);
  filterMovieTitle(inputVal);
}
// pressing enter also works in the input field
searchBox.onchange = function () {
  filterMovieTitle(searchBox.value);
};

//start is all movies anyways
addMoviesToDom(movies);
