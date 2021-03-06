var container = document.getElementById('container');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var counter = 0;

var allImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allImages = [];
// console.log(allImageNames);
var clicksData = [];


function FocusImage(name) {
  this.name = name;
  this.path = 'images/' + name + '.jpg';
  this.numclicks = 0;
  this.numshown = 0;
  // console.log(allImages);
};



for (var i = 0; i < allImageNames.length; i++) {
  // console.log('in the for loop');
  allImages.push(new FocusImage(allImageNames[i]));
  // console.log(clickImages);
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomPic() {
  if(counter < 26) {
    //show all images
    var leftImage = randomNum(0, allImages.length);
    image1.src = allImages[leftImage].path;
    image1.alt = allImages[leftImage].name;
    allImages[leftImage].numshown += 1;

    var centerImage = randomNum(0, allImages.length);
    while (centerImage === leftImage) {
      centerImage = randomNum(0, allImages.length);
    }
    image2.src = allImages[centerImage].path;
    image2.alt = allImages[centerImage].name;
    allImages[centerImage].numshown += 1;

    var rightImage = randomNum(0, allImages.length);
    while (rightImage === leftImage || rightImage === centerImage) {
      rightImage = randomNum(0, allImages.length);
    }
    image3.src = allImages[rightImage].path;
    image3.alt = allImages[rightImage].name;
    allImages[rightImage].numshown += 1;

  //increment counter
    counter++;

  } else {
    document.getElementById('show-chart').addEventListener('click', function(){
      drawChart();});
    counter = 0;
    console.log('reached 25 counts');
    //show chart
    //0 counter
  }
}

function handleClick() {
  if(event.target.id === 'container') {
    return alert('Click On A Picture');
  }

  for (var i = 0; i < allImages.length; i++) {
    if (event.target.alt === allImages[i].name) {
      allImages[i].numshown += 1;
      console.log(allImages[i].name + ' has ' + allImages[i].numshown + ' views.');
      allImages[i].numclicks += 1;
      clicksData[i] = allImages[i].numclicks;
      console.log(allImages[i].name + ' has ' + allImages[i].numclicks + ' clicks.');
    }
  }
  randomPic();
}


container.addEventListener('click', handleClick);


randomPic();


var data = {
  labels: allImageNames,
  datasets: [
    {
      label: 'Number Of Clicks',
      data: clicksData,
      backgroundColor:
      'seagreen',

      hoverBackgroundColor:
      'lightblue'
    }
  ]

};

function drawChart() {
  var ctx = document.getElementById('product').getContext('2d');
  productChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsive: false
    }

  });
  chartDrawn = true;
}

function hideChart() {
  document.getElementById('chart').hidden = true;
}

// document.getElementById('show-chart').addEventListener('click', function(){
//   drawChart();
