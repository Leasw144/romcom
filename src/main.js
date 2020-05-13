// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine = document.querySelector('.tagline')
var tagLineOne = document.querySelector('.tagline-1')
var tagLineTwo = document.querySelector('.tagline-2')
var randomizeButton = document.querySelector('.random-cover-button')


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomizeCover)
//randomizeButton.addEventListener('click', createRandomCover)
// Create your event handlers and other functions here 👇

function randomizeCover() {
  randomizeImage()
  randomizeTitle()
  randomizeTag1()
  randomizeTag2()
}

function randomizeImage() {
  coverImage.src = covers[getRandomIndex(covers)]
}

function randomizeTitle() {
  coverTitle.innerText = titles[getRandomIndex(titles)]
}

function randomizeTag1() {
  //var tag1 = descriptors[getRandomIndex(descriptors)]
  tagLineOne.innerText = descriptors[getRandomIndex(descriptors)]
}

function randomizeTag2() {
  //var tag2 = descriptors[getRandomIndex(descriptors)]
  tagLineTwo.innerText = descriptors[getRandomIndex(descriptors)]
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//function createRandomCover(){
//  var newCover = new Cover(
  //  this.cover = randomizeImage(),
    //this.tile = randomizeTitle(),
  //}
