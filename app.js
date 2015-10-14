////////////////////////CONSTRUCTOR//////////////////////////////////////////////////////

// index starts with 0 to 11
var kittyList = [];  // kittyList Empty Array

var arrayOfZeros = [];

// Constructor variable CuteKitty starts with a CAPITAL Letter
var CuteKitty = function(source) {
  this.source = source; //property
  this.count=0;


  this.addImage=function(){ //method to push images in kittyList Array
    kittyList.push(this);
  }

  this.addAnotherArray=function(){
    arrayOfZeros.push(this.count);
  }

  this.addImage(); //Calling the adddImage Function
  this.addAnotherArray();
}

/////////////////////////////////INSTANCES//////////////////////////////////////////////////////////////////////////
var catCup = new CuteKitty("img/cat-cup.jpg");
var hands = new CuteKitty("img/hands.jpg");
var hangingWood = new CuteKitty("img/hanging-wood-kitten.jpg");
var lookingDown =new CuteKitty("img/looking-down.jpg");
var tiaraKitten =new CuteKitty("img/tiara-kitten.jpg");
var pinkKitten =new CuteKitty("img/pink-kitten.jpg");
var starbucksKitten =new CuteKitty("img/starbucks-kitten.jpg");
var streching =new CuteKitty("img/streching.jpg");
var plzKitten =new CuteKitty("img/plz-kitten.jpg");
var cameraKitten =new CuteKitty("img/camera-kitten.jpg");
var wrapJeans =new CuteKitty("img/wrap-jeans.jpg" );
var specsKitten =new CuteKitty("img/specs-kitten.jpg");
//////////////////////////////Random Two Images/////////////////////////////////////////////////////////////////

// Math.floor chops off after decimal
//Math.rand() - creates 0 to 0.99999999
//kittyList.length) 12

//return index no. for the array
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

    image1.src = kittyList[rand1].source;
    image2.src = kittyList[rand2].source;

    image1.index = rand1;
    image2.index = rand2;

    // image1.innerHTML = kittyList[rand1];
    // image2.innerHTML = kittyList[rand2];
  }
//-----------------------------------------------------------------
// //////////////////////////////Vote/////////////////////////////////////////
this.addCount = function(event){
    //console.log(this);
    //this.arrayOfZeros(source);
    var urlOfImageClicked = this.src;

    for (var i = 0; i < kittyList.length; i++) {
      if (urlOfImageClicked.indexOf(kittyList[i].source) !== -1) {
          kittyList[i].count ++;
          console.log("Image Clicked: "+ kittyList[i].source + ": Vote Count " + kittyList[i].count);
      }
    }
}
//console.log(this.addCount);

// var finalArray= function(){
//   for (var i=0;i<kittyList.length;i++){
//   return 'Index :'[i] + this.addCount;
//   };

// console.log(this.finalArray());
//A reference to the DOM element Node is stored in a variable submit
  var button = document.getElementById("button");
// target.event('user_action', function);
//DOMelement.addEventListener('event',functionName[,Boolean]);
button.addEventListener('click',randomImage);
//'click'-The event name is enclosed in quotation marks
image1.addEventListener('click',this.addCount);
image2.addEventListener('click',this.addCount);

console.log(arrayOfZeros);
//console.log('Total count for'+ indexOf(kittyList[i].source+count));

//------------------------------------------------------------------


