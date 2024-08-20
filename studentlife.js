document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const controls = document.querySelectorAll(".carousel-dot");
    let currentIndex = 0;
    const totalItems = items.length;
    const visibleItems = 3; // Number of items visible at a time

    function updateCarousel() {
        const offset = currentIndex * -100 / visibleItems;  // Calculate the correct offset based on visible items
        carousel.style.transform = `translateX(${offset}%)`;
        controls.forEach((control, index) => {
            control.classList.toggle("active", index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % Math.ceil(totalItems / visibleItems);
        updateCarousel();
    }

    let autoplay = setInterval(nextSlide, 3000);

    controls.forEach((control, index) => {
        control.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
            clearInterval(autoplay); // Stop autoplay when user manually controls the carousel
        });
    });

    // Modal functionality
    const modal = document.getElementById("club-modal");
    const modalLogo = document.getElementById("modal-logo");
    const modalClubName = document.getElementById("modal-club-name");
    const modalClubDetails = document.getElementById("modal-club-details");

    document.querySelectorAll(".club-logo").forEach(logo => {
        logo.addEventListener("click", function() {
            const club = this.dataset.club;
            modalLogo.src = this.src;
            modalClubName.textContent = club;
            modalClubDetails.textContent = `Details about ${club}...`;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
