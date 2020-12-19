var nameInput = document.querySelector('.NameInput');
var passwordInput = document.querySelector('.PasswordInput');
var form = document.querySelector('Form');
var output = document.querySelector('.output');
var button = document.querySelector('.buttonthing');

var buttonscrolldown = document.querySelector('buttonscrolldown');

buttonscrolldown.addEventListener('click', function() {
  console.log("Clicked the button");
});

button.addEventListener('click', function(para) {
  para.preventDefault();

  var p = document.createElement('p'); // and then append it into a class
  output.appendChild(p);
  if(nameInput.value == 123) {

  }
  var randomhtml = `<a class="flexbox1 hovering" href="badmintonpage.html">
    <img src="badminton.jpg" class="mountaincontain1">
    <h1 class="textmoon">Badminton</h1>
    <div class="textmoon">
       
    </div>
  </a>`; // using ` <html Tag> ` helps add html code inside javascript

  console.log("Hello");
  output.innerHTML = randomhtml;
  if(messages.length > 0) {
     // this line code prevents the page from refreshing
    //which was my biggest issue
  }

});
