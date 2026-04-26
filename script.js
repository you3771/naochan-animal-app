const animals = ["cat", "dog", "pig", "cow", "lion", "elephant"];

animals.forEach((animal) => {
    const card = document.getElementById(animal);
    card.addEventListener("click", () => {
        // ズームアニメーション
        card.classList.add("zoomed");
        setTimeout(() => card.classList.remove("zoomed"), 400);

        // 鳴き声を再生
        const sound = new Audio("sounds/" + animal + ".mp3");
        sound.play();
    });
});
