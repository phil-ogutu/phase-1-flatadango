document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(data => {
            const movieList = document.querySelector(".films");
            const posterImg = document.querySelector(".poster img");
            const movieTitle = document.querySelector(".buy-tickets.header h3");
            const movieDescription = document.querySelector(
                ".buy-tickets .description p"
            );
            const ticketsRemaining = document.querySelector(
                ".buy-tickets .description span"
            );
            const movieShowtime = document.querySelector(".buy-tickets .description button")
            let selectedFilm = null;
            const buyButton = document.querySelector(".buy-tickets .btn")

            data.forEach((film) => {
                const listItem = document.createElement("li")
                listItem.innerHTML = `${film.title}`;

                //Update poster and film when li is selected
                listItem.addEventListener("click", () => {
                    selectedFilm = film;
                    posterImg.src = film.poster;
                    movieTitle.textContent = film.title;
                    movieDescription.textContent = film.description;
                    ticketsRemaining.textContent = `Tickets Remaining: ${film.capacity - film.tickets_sold}`;
                    movieShowtime.textContent = film.showtime
                })

                movieList.appendChild(listItem);
            })

            buyButton.addEventListener("click", (event) => {
                event.preventDefault()
                let remainingTickets = selectedFilm.capacity - selectedFilm.tickets_sold;
                if(remainingTickets>0){
                    selectedFilm.tickets_sold+=1;
                    ticketsRemaining.textContent = `Tickets Remaining: ${film.capacity - film.tickets_sold}`;
                }else{
                    buyButton.textContent = "Sold Out"
                }
            })

        })
})
