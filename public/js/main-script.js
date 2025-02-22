document.addEventListener("DOMContentLoaded", function () {
    const cards = [
        document.getElementById("tawarkan-1"),
        document.getElementById("tawarkan-2"),
        document.getElementById("tawarkan-3")
    ];

    const blurCards = [
        document.getElementById("tawarkan-blur-1"),
        document.getElementById("tawarkan-main"),
        document.getElementById("tawarkan-blur-2")
    ];

    const indicators = [
        document.getElementById("tawarkan-1-list"),
        document.getElementById("tawarkan-2-list"),
        document.getElementById("tawarkan-3-list")
    ];

    const previousBtn = document.getElementById("tawarkan-previous");
    const nextBtn = document.getElementById("tawarkan-next");

    let autoSlide;

    function updateCards() {
    blurCards.forEach((card, index) => {
        card.innerHTML = "";
        card.appendChild(cards[index]);
    });

    indicators.forEach((indicator, index) => {
        if (index === 1) {
            indicator.classList.remove("bg-secondary");
            indicator.classList.add("bg-clr4");
        } else {
            indicator.classList.remove("bg-clr4");
            indicator.classList.add("bg-secondary");
        }
    });

    document.querySelectorAll("#tawarkan-main .card").forEach(card => {
        card.classList.add("border-clr4");
    });

    ["#tawarkan-blur-1 .card", "#tawarkan-blur-2 .card"].forEach(selector => {
        document.querySelectorAll(selector).forEach(card => {
            card.classList.remove("border-clr4");
        });
    });
}

    function nextSlide() {
        cards.push(cards.shift());
        indicators.push(indicators.shift());
        updateCards();
        resetAutoSlide();
    }

    function prevSlide() {
        cards.unshift(cards.pop());
        indicators.unshift(indicators.pop());
        updateCards();
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    nextBtn.addEventListener("click", nextSlide);
    previousBtn.addEventListener("click", prevSlide);

    updateCards();
    startAutoSlide();
});