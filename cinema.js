const movieButtons = document.querySelectorAll(".movie");
const selectedMovie = document.getElementById("selected-movie");

movieButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const movie = button.dataset.movie;
        selectedMovie.textContent = "you selected " + movie;
    });
});