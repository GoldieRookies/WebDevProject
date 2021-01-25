var heading1 = document.querySelector('.heading1');
var numwidth = window.matchMedia("(max-width: 768px)");
var buttonsubmit = document.querySelector('.buttonsubmit');
var storeinfo = document.querySelector('.storeinfo');
var inputvalue = document.querySelector('.inputvalue');
var deletesubmit = document.querySelector('.deletesubmit');

var submitcadet = document.querySelector('.submitcadet');
var cadetName = document.querySelector('.CadetName').value;

var clickContact = document.querySelector('.clickContact');

//console.log(fetch('https://reqes.in/api/users'));
var text1 = document.querySelector('.text1');
var text2 = document.querySelector('.text2');
var parambutton = document.querySelector('.parambutton');
let twoparam = (a , b) => {
  console.log(a);
  console.log(b);
}

let oneparam = (a) => {
  console.log("Hellloololololo" + a);
}


parambutton.addEventListener('click', () => {
  twoparam(text1.value, text2.value);
  oneparam(text2.value);
});








clickContact.addEventListener('submit', () => {
  var firstName = document.querySelector('.FirstName');
  var lastName = document.querySelector('.lastName');

  console.log("FirstName: " + firstName.value + " lastName: " + lastName.value);
});



function cadet(first) {
    this.firstName = first;

}


submitcadet.addEventListener('click', () => {
  console.log("Submitted");

  var cadet1 = new cadet(cadetName);
  console.log(cadet1);
});




let promise = new Promise((resolve, reject) => {
  let c = 2 + 2;
  if(c == 5) {
    resolve('It equals 5'); // goes to then
  } else {
    reject('Not eqaaauals 5'); // goes to catch
  }
})

promise.then((message) => {
  console.log("This is the then: " + message);
}).catch((messagecatch) => {
  console.log("Catch: " + messagecatch);
})







/*let pro = new Promise((sucess, fail) => {

}*/



/*function ifmedialower600(numwidth) {
  console.log("Hi");
  if(numwidth.matches) {
    heading1.innerHTML = `Hi`;
  }
}
ifmedialower600();*/
buttonsubmit.addEventListener('click', () => {
  var div = document.createElement('div');
  var valueofStoredInfo;
  if(inputvalue.value) {
    console.log("Is integer");
  } else {
    console.log("Is not integer");
  }
  div.innerHTML = `<div class="createbox">` + inputvalue.value + `</div>`;
  storeinfo.appendChild(div);

});



deletesubmit.addEventListener('click', () => {
  storeinfo.removeChild(storeinfo.childNodes[0]);
});

//setInterval(ifmedialower600, 1000);


//4. anonymous function
//document.addEventListener('click', function() {
  //console.log("Click");
//});

//document.addEventListener('click', () => console.log("Click"))
