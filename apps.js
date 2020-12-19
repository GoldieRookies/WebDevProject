const button = document.querySelector('.buttonscrolldown');
var headerfont = document.querySelector('.headertextfont');
var headercontent = headerfont.textContent;
headercontent = "";
const splitText = headercontent.split(''); // splits the text into arrays

button.addEventListener('click', function() {
  console.log("Hello");
  window.scrollTo(0, 800);
  button.style.borderStyle = "dotted";
});

for(let i = 0; i < headercontent.length; i++) {
  headerfont.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;

function onTick() {

  char++;
  if(char === splitText.length) {
    complete();
    return
  }
}

let timer = setInterval(onTick, 200); // the 2nd parameter is the milliseconds


function complete() {
  clearInterval(timer);
}
