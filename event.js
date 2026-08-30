const searchInput = document.getElementById("eventSearch");

const eventCards = document.querySelectorAll(".event-card");

const filterButtons = document.querySelectorAll(".filter-btn");


function filterEvents() {

    const searchText =
        searchInput.value.toLowerCase();

    const activeButton =
        document.querySelector(".filter-btn.active");

    const category =
        activeButton.dataset.category;


    eventCards.forEach(function(card) {

        const eventName =
            card.querySelector("h3").textContent.toLowerCase();

        const eventCategory =
            card.dataset.category;


        const matchesSearch =
            eventName.includes(searchText);

        const matchesCategory =
            category === "all" ||
            eventCategory === category;


        if (matchesSearch && matchesCategory) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

}


searchInput.addEventListener(
    "input",
    filterEvents
);


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterEvents();

    });

});


function registerEvent(eventName) {

    alert(
        "You have selected to register for " +
        eventName +
        "!"
    );

}