
////////////////////////CONSTRUCTOR//////////////////////////////////////////////////////

// index starts with 0 to 11
var kittyList = [];  // kittyList Empty Array

// Constructor variable CuteKitty starts with a CAPITAL Letter
var CuteKitty = function(images) {
  this.images = images; //property

  this.addImage=function(){ //method to push images in kittyList Array
    kittyList.push(this.images);
  }

  this.addImage(); //Calling the adddImage Function
}

/////////////////////////////////INSTANCES//////////////////////////
var catCup = new CuteKitty('<img src="img/cat-cup.jpg" id="cat-cup"class="size">');
var hands = new CuteKitty('<img src="img/hands.jpg" id="hands" class="size">');
var hangingWood = new CuteKitty('<img src="img/hanging-wood-kitten.jpg" id="hanging-wood-kitten" class="size">');
var lookingDown =new CuteKitty('<img src="img/looking-down.jpg" id="looking-down" class="size">');
var tiaraKitten =new CuteKitty('<img src="img/tiara-kitten.jpg" id="tiara-kitten" class="size">');
var pinkKitten =new CuteKitty('<img src="img/pink-kitten.jpg" id="pink-kitten" class="size">');
var starbucksKitten =new CuteKitty('<img src="img/starbucks-kitten.jpg" id="starbucks-kitten" class="size">');
var streching =new CuteKitty('<img src="img/streching.jpg" id="streching" class="size">');
var plzKitten =new CuteKitty('<img src="img/plz-kitten.jpg" id="plz-kitten" class="size">');
var cameraKitten =new CuteKitty('<img src="img/camera-kitten.jpg" id="camera-kitten" class="size">');
var wrapJeans =new CuteKitty('<img src="img/wrap-jeans.jpg" id="wrap-jeans" class="size">');
var specsKitten =new CuteKitty('<img src="img/specs-kitten.jpg" id="specs-kitten" class="size">');
//////////////////////////////Random Two Images/////////////////////////////////////////

//A reference to the DOM element Node is stored in a variable submit
  var button = document.getElementById("button");

var randomImage = function(){
    var rand1 =Math.floor(Math.random() * kittyList.length);
    var rand2 =Math.floor(Math.random() * kittyList.length);

    while(rand1 === rand2){
     rand2 = Math.floor(Math.random() * kittyList.length) +1;
}

 console.log(rand1);
 console.log(rand2);

    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    console.log(kittyList)
    image1.innerHTML = kittyList[rand1];
    image2.innerHTML = kittyList[rand2];
  }
//--------------------------------------------------------------
// target.event('user_action', function);
//DOMelement.addEventListener('event',functionName[,Boolean]);
button.addEventListener('click',randomImage);
//'click'-The event name is enclosed in quotation marks

//--------------------------------------------------------------

// else if(rand1 || rand2 === undefined){

// }

// //////////////////////////////Vote/////////////////////////////////////////
// var carCupCount = 0;
// var voteCount = function(){
//   carCupCount = carCupCount +1;
// }
//  catCup.addEventListener('click',voteCount);
//  console.log(carCupCount);
// // ----------------------------------------------------------
// var handsCount = 0;
// var voteCount1 = function(){
//   handsCount = handsCount +1;
// }
//  hands.addEventListener('click',voteCount);
// // ----------------------------------------------------------
// var hangingWoodCounts = 0;
// var voteCount2 = function(){
//   hangingWoodCounts = hangingWoodCounts +1;
// }
//  hands.addEventListener('click',voteCount);
// // ----------------------------------------------------------
// var lookingDownCount=0;
// var voteCount3 = function(){
//   lookingDownCount = lookingDownCount +1;
// }
//  hands.addEventListener('click',voteCount);
// ----------------------------------------------------------
