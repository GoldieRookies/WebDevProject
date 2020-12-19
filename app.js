window.onload = function() {
  var textinput = document.querySelector('.textinput');
  var inputbutton = document.querySelector('.buttonpressforinput');
  var buttonscrolldown = document.querySelector('.buttonscrolldown');
  var list = document.querySelector('.list');
  var thisclass = document.querySelector('.thisclass');

  // sliding image
  var backgroundheader = document.querySelector('#backgroundheader');

  var leftbuttonclick = document.querySelector('.leftbuttons');
  var rightbuttonclick = document.querySelector('.rightbutton');
  var colorIndex = 0;

  var badminton;
  var violin;
  var coding;
  var aircadets;
  var imageindex = 0;

  function imageindexing() {
    badminton = document.querySelector('.badminton');
    violin = document.querySelector('.violin');
    coding = document.querySelector('.coding');
    aircadets = document.querySelector('.aircadets');
    if(imageindex == 0) {
      backgroundheader.className = 'violin';
      console.log("Image index is" + imageindex);
    } else if(imageindex == 1) {
      backgroundheader.className = 'badminton';
      console.log("Image index is" + imageindex);
    } else if(imageindex == 2) {
      backgroundheader.className = 'coding';
      console.log("Image index is" + imageindex);
      console.log("Clicked til here");
    } else if(imageindex == 3) {
      backgroundheader.className = 'aircadets';
      console.log("Image index is" + imageindex);
    }

    /*if(imageindex < 4) {
      imageindex++;
    } else {
      imageindex = 0;
    }*/

  }
  imageindexing();



  //setInterval(imageindexloop, 5000);
  leftbuttonclick.addEventListener('click', function() {
    if(imageindex > 0) {
      imageindex--;
      console.log("Clicked left" + imageindex);
    }
    imageindexing();
  });
  rightbuttonclick.addEventListener('click', function() {

    if(imageindex < 4) {
      imageindex++;
      console.log("Clicked right" + imageindex);
    }
    imageindexing();
  });
  /*inputbutton.addEventListener('click', function() {
    console.log(textinput.value);
  });
  */

  list.addEventListener('click', function() {

    console.log("Button scrolls down");
    window.scrollTo(0, 1000);
    thisclass.style.visibility = "visible";
    thisclass.innerHTML = `
    <div class="blue-X">X</div>
    <h1 class="h1decor">Contact Form</h1>
    <p class="boxtext">Telephone Number: 647-787-8468</p>
    <p class="boxtext">Email: tangg2005@gmail.com</p>
    `;
    var blueX = document.querySelector('.blue-X');
      blueX.addEventListener('click',function() {
        thisclass.style.visibility = 'hidden';
        console.log("Click to close");
      });
  });
}
/* foreach loop example:
var array = [1,2,3,4,5,6,7];
array.forEach(function(whatever parameters){
  console.log(parameters);
})


*/
function storeCommentsHere() {
  //Primitives vs Objects
  /*

  //primitives these values don't get passed on when you create another same variable
  var a = 23;
  var b = a;
  a = 43;
  console.log(a);
  console.log(b);


  // objects these values get passed when you create an instance of an object
  var billy = {
    name: "Billy"
  };
  var obj2 = billy;
  billy.name = "Hello";
  console.log(billy.name);
  console.log(obj2.name);

  //functions Same applies here in that the obj's values get passed while normal
  //variables do not
  var age = 30;
  var obj = {
    name: 'hi'
  }
  function changethis (a, b) {
    a = 15;
    b.name = 'WhatisUp';
  }
  changethis(age, obj);

  console.log(age);
  console.log(obj.name);

  // Passing Functions as arguments

  var age = [20, 30];

  function arrayCalc(arry, fn) {
    var arrResult = [];
    for(var i = 0; i < arry.length; i++) {
      arrResult.push(fn(arry[i]));
    }
    return arrResult;
  }
  function yearofBirthCalc(ages) {
    return 2020 - ages;
  }
  function isabove18(ag) {
    return ag > 18;
  }
  var yearofBirth = arrayCalc(age, yearofBirthCalc);
  var above18 = arrayCalc(age, isabove18);
  console.log(yearofBirth);
  console.log(above18);



  ////////////////////////
  // Lecture: Functions returning Functions

  function interviewQuestion(job) {
    if(job === 'builder') {
      return function(name) { // anonymous function
        console.log(name + ', you are a loser being a builder. ');
      }
    }else if (job === 'sportsplayer') {
        return function(name) {
          console.log('Dude, you are a failure being a: sportsplayer, ' + name);
        }
      }else {
          return function(name) {
            console.log('Hello ' + name + ' ,wtf is that');
          }
        }
      }

  var teacherQues = interviewQuestion('builder'); // job

  var designQues = interviewQuestion('sportsplayer');

  interviewQuestion('asd')('Bob');

  designQues('Bob');
  teacherQues('Billy'); // name

  /////////////////////
  // Lecture: iife
  /*
  function game() {
    var score = Math.random() * 20;
    console.log(score >= 10);
  }
  game();
  */
  /*
  (function (badluck) {
    {
      var score = Math.random() * 20;
      console.log(score);
      console.log(score >= 10 + badluck);
  }(3); // the badluck parameter is 3. Or the thing that is in the number

  */

}
