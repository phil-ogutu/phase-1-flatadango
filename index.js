document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(data => {
            const movieList = document.querySelector(".films")
            const posterImg = document.querySelector(".poster img");
            const movieTitle = document.querySelector(".buy-tickets.header h3");
            const movieDescription = document.querySelector(
                ".buy-tickets.description p"
            );
            const ticketsRemaining = document.querySelector(
                ".buy-tickets.description span"
            );

            data.forEach((film) => {
                const listItem = document.createElement("li")
                listItem.innerHTML = `${film.title}`;

                //Event Listener
                listItem.addEventListener("click", () => {
                    posterImg.src = film.poster;
                    movieTitle.textContent = film.title;
                    movieDescription.textContent = film.description;
                    ticketsRemaining.textContent = `Tickets Remaining: ${film.capacity - film.tickets_sold
                        }`;

                })

                movieList.appendChild(listItem)
            })

        })
})
