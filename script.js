const animals = {
    cat:      { sound: "sounds/cat.mp3",      ja: "ネコ",     en: "Cat",      zh: "猫"   },
    dog:      { sound: "sounds/dog.mp3",      ja: "イヌ",     en: "Dog",      zh: "狗"   },
    pig:      { sound: "sounds/pig.mp3",      ja: "ブタ",     en: "Pig",      zh: "猪"   },
    cow:      { sound: "sounds/cow.mp3",      ja: "ウシ",     en: "Cow",      zh: "牛"   },
    lion:     { sound: "sounds/lion.mp3",     ja: "ライオン", en: "Lion",     zh: "狮子" },
    elephant: { sound: "sounds/elephant.mp3", ja: "ゾウ",     en: "Elephant", zh: "大象" },
};

const tapCounts = {};

function speak(text, lang) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

Object.keys(animals).forEach((animal) => {
    const data = animals[animal];
    tapCounts[animal] = 0;

    const card = document.getElementById(animal);
    card.addEventListener("click", () => {
        // ズームアニメーション
        card.classList.add("zoomed");
        setTimeout(() => card.classList.remove("zoomed"), 400);

        // タップ回数を 1→2→3→4→1→... と循環
        tapCounts[animal] = (tapCounts[animal] % 4) + 1;
        const count = tapCounts[animal];

        if (count === 1) {
            const sound = new Audio(data.sound);
            sound.play();
        } else if (count === 2) {
            speak(data.ja, "ja-JP");
        } else if (count === 3) {
            speak(data.en, "en-US");
        } else if (count === 4) {
            speak(data.zh, "zh-CN");
        }
    });
});
