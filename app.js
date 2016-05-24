var allImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allImages = [];
console.log(allImageNames);

function FocusImage(name) {
  this.name = name;
  this.path = 'images/' + name + '.jpg';
  this.numclicks = 0;
  this.numshown = 0;
  allImages.push(this);
  // console.log(allImages);
};

for (var i = 0; i < allImageNames.length; i++) {
  // console.log('in the for loop');
  var clickImages = new FocusImage(allImageNames[i]);
  // console.log(clickImages);
};


var imageElementOne = document.getElementById('image1');
console.log(imageElementOne);
imageElementOne.addEventListener('click', handleClickOne);
function handleClickOne(event) {
  document.getElementById('image1').src = allImages[1].path;
  console.log('hey look at me');
};

var imageElementTwo = document.getElementById('image2');
console.log(imageElementTwo);
imageElementTwo.addEventListener('click', handleClickTwo);
function handleClickTwo(event) {
  document.getElementById('image2').src = allImages[i].path;
  console.log('hey look at me 2');
};

var imageElementThree = document.getElementById('image3');
console.log(imageElementThree);
imageElementThree.addEventListener('click', handleClickThree);
function handleClickThree(event) {
  document.getElementById('image3').src = allImages[i].path;
  console.log('hey look at me 3');
};

// var firstRand = Math.floor(Math.random() * (allImages.length - 0));
// console.log(firstRand);

function randomNum() {
  var numberRand = Math.floor(Math.random() * allImages.length);
  return numberRand;
}

function randomPic() {
  var num = randomNum();
  console.log(num);
  document.getElementById('image1').src = allImages[num].path;
  document.getElementById('image2').src = allImages[num].path;
  document.getElementById('image3').src = allImages[num].path;
}
randomPic();
// var secondRand = Math.floor(Math.random() * allImages.length);
// while (firstRand === secondRand){
//   var secondRand = Math.floor(Math.random() * allImages.length);
// }
// console.log(secondRand);
//
// var thirdRand = Math.floor(Math.random() * allImages.length);
// while (firstRand === thirdRand || secondRand === thirdRand){
//   var thirdRand = Math.floor(Math.random() * allImages.length);
// }
// console.log(thirdRand);

// var imageLeft = document.getElementById('image1');
// image1.src = allImages[i].path
