const bgbody = document.querySelector("body");
const images = [
    "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg"
    ,"15.jpg","16.jpg","17.jpg"
];

const loadImage = images[Math.floor(Math.random() * images.length)];
//(Math.random() * images.length)로 묶어야 한다.
const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");
bgImage.src = `img/${loadImage}`;
// src를 붙여 경로를 표시한다.



bgbody.prepend(bgImage);

