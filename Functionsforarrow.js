// this is the concise code for functions


// 1.
function twoparam(a, b) {
  return a + b;
}

let param2 = (a, b) => a + b;
// this is the most simplified. It is assumed
// that the function returns something when
// formatted without brackets





//2.
function oneparam(number) {
  return number % 2 == 1;
}

let param1 = num =>  num % 2 == 1;
let param3 = (num) =>  num % 2 == 1;





//3.
function zeroParam() {
  return "Hello World";
}

let zeroParam = () => "Hello World";
// add the bracket there to denote that it is
// zero param





//4. anonymous function
document.addEventListener('click', function() {
  console.log("Click");
});

document.addEventListener('click', () => console.log("Click"))
