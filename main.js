const textArray = text.textContent.split("");
let text = document.getElementById("Typewriter");

console.log(textArray);

let timeLooper;

text.innerHTML = "";

console.log(text);

function typewriterEffect() {
  if (textArray.length > 0) {
    text.innerHTML += textArray.shift();
  } else {
    clearTimeout(timeLooper);
  }

  timeLooper = setTimeout(
    "typewriterEffect()",
    Math.floor(Math.random() * (200, 250))
  );
}
typewriterEffect();
