const images = ["wallpaper_01.jpg", "wallpaper_02.jpg", "wallpaper_03.jpg", "wallpaper_04.jpg", "wallpaper_05.jpg", "wallpaper_06.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgWrap = document.querySelector(".wrap");

bgWrap.style.backgroundImage = `url(./img/${chosenImage})`;