//// if we have something on local storage place that
// if(localStorage.getItem('todos')) {
// $('#todos').html(localStorage.getItem('todos'));
// }
// localStorage.length == 0
if(window.localStorage !== null){
   localStorage.getItem('jsonKitty')
} else{
    localStorage.getItem(kittyList)
}

    // if local storahe.then get it
    //   else get kittyList and new instances
////////////////////////CONSTRUCTOR//////////////////////////////////////////////////////

// index starts with 0 to 11
var kittyList = [];  // kittyList Empty Array

// Constructor variable CuteKitty starts with a CAPITAL Letter
var CuteKitty = function(source) {
  this.source = source; //property
  this.count = 0;

  this.addImage=function(){ //method to push images in kittyList Array
    kittyList.push(this); //this is the total object(includes source and count)
    // console.log(this);//pushing total object inside the array;so that we access object constructor
  } //properties

  this.addImage();
}
/////////////////////////////////INSTANCES//////////////////////////
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
//////////////////////////////Random Two Images/////////////////////////////////////////
//return index no. for the array
var rand1;
var rand2;

var randomImage = function(){
   rand1 =Math.floor(Math.random() * kittyList.length);
   rand2 =Math.floor(Math.random() * kittyList.length);

    while(rand1 === rand2){
     rand2 = Math.floor(Math.random() * kittyList.length) +1;
}

 console.log(rand1);
 console.log(rand2);

    //connecting to the HTML Tags
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    console.log(kittyList[0]);
    //src is a property of HTML img tag
    //source is the constructor prop
    image1.src = kittyList[rand1].source;
    image2.src = kittyList[rand2].source;

  }

  // //////////////////////////////Vote/////////////////////////////////////////

// // add the count to the property of CuteKitty
// for (var i=0; i<kittyList.length; i++){

// you want to see if the object source is same as urlOfImageClicked
// if yes: increment the count on that object



//The indexOf() method searches the array for the specified item,
//and returns its position.

// The search will start at the specified position,
// or at the beginning if no start position is specified,
// and end the search at the end of the array.

// Returns -1 if the item is not found.

//if its not equal to !== -1 that means it is found.
this.addCount = function(event){
    console.log(this);
    console.log(event);

    var urlOfImageClicked = this.src;

for (var i=0; i < kittyList.length;i++){

  if (urlOfImageClicked.indexOf(kittyList[i].source) !== -1){
          kittyList[i].count++;
           console.log(kittyList[i].count++);
          console.log(urlOfImageClicked);
         console.log(kittyList[i].source);
  }
}

var data = [
 {
   value:  catCup.count,
   label: 'Cat in a cup',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: hands.count,
   label: 'Hands',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: hangingWood.count,
   label: 'Cat Hanging on Wood',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
{
   value: lookingDown.count,
   label: 'Cat looking down',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: tiaraKitten.count,
   label: 'Cat in a tiara',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: pinkKitten.count,
   label: 'Cat in pink',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: starbucksKitten.count,
   label: 'Cat in Starbucks',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: streching.count,
   label: 'Cat Stretching',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: plzKitten.count,
   label: 'Cat Plz',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: cameraKitten.count,
   label: 'Cat with camera',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: wrapJeans.count,
   label: 'Cat in jeans',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: specsKitten.count,
   label: 'Cat in specs',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
];

var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Doughnut(data, {
   //Number - Amount of animation steps
   animationSteps : 100,
   //String - Animation easing effect
   animationEasing : "easeOutBounce",
   //Boolean - Whether we animate the rotation of the Doughnut
   animateRotate : true,
   //Boolean - Whether we animate scaling the Doughnut from the centre
   animateScale : true
});

};
// -----------------------------------------------------------------
//A reference to the DOM element Node is stored in a variable submit
  var button = document.getElementById("button");

// target.event('user_action', function);
//DOMelement.addEventListener('event',functionName[,Boolean]);
button.addEventListener('click',randomImage);
//'click'-The event name is enclosed in quotation marks
image1.addEventListener('click',this.addCount);
image2.addEventListener('click',this.addCount);
//------------------------------------------------------------------
// //////////////////////////////Vote/////////////////////////////////////////

// Check browser support
    // // Store

var setStg = function(){
    //kittyList Object converted into Strings;KeyValue
    var jsonObject = JSON.stringify(kittyList);
    //Set it with the KeyName 'jsonKitty'
    localStorage.setItem('jsonKitty',jsonObject);
}//Converted
    // localStorage.getItem('jsonKitty');
    //Storing it the variable
var getStg = function(){
      var getKitty = localStorage.getItem('jsonKitty');
      kittyList = JSON.parse(getKitty);

}
// Converting it back into an Object

button.addEventListener('click',setStg);

button.addEventListener('click',getStg);


