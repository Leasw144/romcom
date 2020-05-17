// Create variables targetting the relevant DOM elements here 👇

//~~~~~~~~~~~Current Cover Variables are here~~~~~~
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLineOne = document.querySelector('.tagline-1')
var tagLineTwo = document.querySelector('.tagline-2')

//~~~~~~~~~~`control` class buttons~~~~~~~~~~~~~~~~
var randomizeButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedSectButton = document.querySelector('.view-saved-button')
var homeButton = document.querySelector('.home-button')
var makeOwnCoverButton = document.querySelector('.make-new-button')

//~~~~~~~~~~~Sections~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var formSection = document.querySelector('.form-view')
var homeSection = document.querySelector('.home-view')
var savedSection = document.querySelector('.saved-view')
var savedCoversDisplaySect = document.querySelector('.saved-covers-section')

//~~~~~~~~~~~Form specific variables~~~~~~~~~~~~~
var makeNewCover = document.querySelector('.create-new-book-button')
var userCoverInput = document.querySelector('.user-cover')
var userTitleInput = document.querySelector('.user-title')
var userDesc1 = document.querySelector('.user-desc1')
var userDesc2 = document.querySelector('.user-desc2')

//~~~~~~~~~~~Misc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var hidden = document.querySelector('.hidden')
var currentCover;


// Add your event listeners here 👇
window.addEventListener('load', createRandomCover)
randomizeButton.addEventListener('click', randomizeImageButton)
makeOwnCoverButton.addEventListener('click', goToForm)
viewSavedSectButton.addEventListener('click', goToSaved)
homeButton.addEventListener('click', goToHome)
makeNewCover.addEventListener('click', makeFormCover)
saveCoverButton.addEventListener('click', saveCover)


// Create your event handlers and other functions here 👇
function createRandomCover() {
  currentCover = new Cover(
   randomizeImage(),
   randomizeTitle(),
   randomizeTag1(),
   randomizeTag2()
  )
  return currentCover
}

function makeFormCover() {
  makeNewCover.type = "button"
  showHomeSect();
  hideFormSect();
  pushInputs();
  displayInputs();
  makeUserCoverObj();
  showSaveCoverButton();
}

function saveCover() {
  // checkForDuplicates();
  renderSavedCovers();
}



function checkForDuplicates(){
  for (var i = 0; i < savedCovers.length; i++){
    if (currentCover === savedCovers[i]){
      return false
    } 
  }
  savedCovers.push(currentCover);
}

function renderSavedCovers() {
  var duplicate = checkForDuplicates();
  if(duplicate === false) {
    return alert('You\'ve already saved this!!!')
  } else { 
    for(var i = 0; i < savedCovers.length; i++) {
      var toBePrinted = `<section class="mini-cover">
          <img class="cover-image" src="${savedCovers[i].cover}">
            <h2 class="cover-title">${savedCovers[i].title}</h2>
            <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
            <img class="price-tag" src="./assets/price.png">
              <img class="overlay" src="./assets/overlay.png">
          </section>`
    }
    
  } 
  savedCoversDisplaySect.insertAdjacentHTML('afterbegin', 
  toBePrinted)
  //needs to access savedCovers array,
  //display all of the saved covers
  //but it needs to have the class of mini-covers 

}

function showSaveCover() {
  //when a user clicks on the saved cover button, these two things will happen
  ////1. it gets pushed to the savedCovers array in data.js.
  ////2. the poster gets replicated and placed in the savedCovers section (.adjacentHMTL?)
  ////2a. Consider using css classes of mini-cover and applying it to the covers in the saved cover section

}

function displayInputs() {
  displayMyCover();
  displayMyTitle();
  displayMyDesc1();
  displayMyDesc2();
}

function pushInputs() {
  pushCoverArray();
  pushTitleArray();
  pushDesc1();
  pushDesc2();
}

function makeUserCoverObj() {
  currentCover = new Cover(
    displayMyCover(),
    displayMyTitle(),
    displayMyDesc1(),
    displayMyDesc2()
  )
  return currentCover
}


function goToForm() {
  showFormSect();
  showHomeButton();
  hideSavedSect();
  hideRandomizeButton();
  hideHomeSect();
  hideSaveCoverButton();
}

function goToSaved() {
  showSavedSectButton()
  hideFormSect();
  hideHomeSect();
  showHomeButton();
  hideRandomizeButton();
  hideSaveCoverButton();
}

function goToHome() {
  hideFormSect();
  hideSavedSect();
  showHomeSect();
  hideHomeButton();
  showRandomizeButton();
  showSavedSectButton();
  showSaveCoverButton();
}
//~~~~~~~~~~~~~~~Navigation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function hideSaveCoverButton() {
  saveCoverButton.classList.add('hidden')
}

function showSaveCoverButton() {
  saveCoverButton.classList.remove('hidden')
}

function showSavedSectButton() {
  savedSection.classList.remove('hidden')
}

function showSaveButton() {
  savedButton.classList.remove('hidden')
}

function showRandomizeButton() {
  randomizeButton.classList.remove('hidden')
}

function showHomeButton() {
  homeButton.classList.remove('hidden')
}

function hideHomeButton() {
  homeButton.classList.add('hidden')
}

function hideRandomizeButton() {
  randomizeButton.classList.add('hidden')
}

function hideHomeSect() {
  homeSection.classList.add('hidden')
}

function hideFormSect() {
  formSection.classList.add('hidden')
}

function showHomeSect() {
  homeSection.classList.remove('hidden');
  hideHomeButton();
  showRandomizeButton();
  showSaveCoverButton();
  //should reveal saved button feature
}

function showFormSect() {
  formSection.classList.remove('hidden')
}

function hideSavedSect() {
  savedSection.classList.add('hidden')
}

//~~~~~~~~~~~~~~~~~~~~~Display~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function displayMyCover() {
  coverImage.src = userCoverInput.value
  return coverImage.src;
}

function displayMyTitle() {
  coverTitle.innerText = userTitleInput.value
  return coverTitle.innerText;
}

function displayMyDesc1() {
  tagLineOne.innerText = userDesc1.value
  return tagLineOne.innerText;
}

function displayMyDesc2() {
  tagLineTwo.innerText = userDesc2.value
  return tagLineTwo.innerText;
}

//~~~~~~~~~~~~~~~~~~~~Randomizers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function randomizeImage() {
  coverImage.src = covers[getRandomIndex(covers)]
  return coverImage.src
}

function randomizeTitle() {
  coverTitle.innerText = titles[getRandomIndex(titles)]
  return coverTitle.innerText
}

function randomizeTag1() {
  tagLineOne.innerText = descriptors[getRandomIndex(descriptors)]
  return tagLineOne.innerText
}

function randomizeTag2() {
  tagLineTwo.innerText = descriptors[getRandomIndex(descriptors)]
  return tagLineTwo.innerText
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizeImageButton() {
createRandomCover()
}

//~~~~~~~~~~~~~~~~~~~~~~~~Push Data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pushCoverArray() {
  covers.push(userCoverInput.value)
  console.log(covers)
}

function pushTitleArray() {
  titles.push(userTitleInput.value)
}

function pushDesc1() {
  descriptors.push(userDesc1.value)
}

function pushDesc2() {
  descriptors.push(userDesc2.value)
}
