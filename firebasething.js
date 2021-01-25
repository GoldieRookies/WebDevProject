var info = document.querySelector('.inputinfo');
var inputform = document.querySelector('#people-form');
// get data tutorial
function renderCafe(doc) {
  var name = document.createElement('div');

  name.textContent = doc.data().name;
  info.appendChild(name);


}
// the function to actually get the data
data.collection('People').get().then((snapshot) => { // parameter is the representation of the different data in the datatbase
  snapshot.docs.forEach(doc => {
    renderCafe(doc);
  })
}) // this is asynchronous so no putting it on varaible


// how to save data using the submit click event. Something I've always wanted to learn
inputform.addEventListener('submit', (eventobject) => {
  eventobject.preventDefault(); // prevents from refreshing the page
  data.collection('People').add({
    name: inputform.Cafe.value
  })
});
