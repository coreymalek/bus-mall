var allImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allImages = [];

function FocusImage(name) {
  this.name = name;
  this.path = '../images/' + name + '.jpg';
  this.numclicks = 0;
  this.numshown = 0;
  allImageNames.push(this);
}

for (i = 0; i < allImageNames.length; i++);{
  var clickImages = new FocusImage(allImageNames[i]);
};


var imageElementOne = document.getElementById('image1');
console.log(imageElementOne);
imageElementOne.addEventListener('click', handleClickOne);
function handleClickOne(event) {
  console.log('hey look at me');
};

var imageElementTwo = document.getElementById('image2');
console.log(imageElementTwo);
imageElementTwo.addEventListener('click', handleClickTwo);
function handleClickTwo(event) {
  console.log('hey look at me 2');
};

var imageElementThree = document.getElementById('image3');
console.log(imageElementThree);
imageElementThree.addEventListener('click', handleClickThree);
function handleClickThree(event) {
  console.log('hey look at me 3');
};


var allImages = Math.random(allImageNames.length - 1);
