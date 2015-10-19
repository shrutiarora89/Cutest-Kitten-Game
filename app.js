// index starts with 0 to 11
var kittyList = [];  // kittyList Empty Array
var skillsChart = undefined;
// Constructor variable CuteKitty starts with a CAPITAL Letter
var CuteKitty = function(source) {
  this.source = source; //property
  this.count = 0;

  this.addImage=function(){ //method to push images in kittyList Array
    kittyList.push(this); //this is the total object(includes source and count)
    // console.log(this);//pushing total object inside the array;so that we access object constructor
  }; //properties

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

var dataChart = [
 {
   value:  catCup.count,
   label: 'Cat in a cup',
   color: '#8bb015 ',
   highlight: '#e3a57c '
 },
 {
   value: hands.count,
   label: 'Hands',
   color: '#c9c46f ',
   highlight: '#e3a57c '
 },
 {
   value: hangingWood.count,
   label: 'Cat Hanging on Wood',
   color: '#a25430 ',
   highlight: '#e3a57c '
 },
{
   value: lookingDown.count,
   label: 'Cat looking down',
   color: '#00020f ',
   highlight: '#e3a57c '
 },
 {
   value: tiaraKitten.count,
   label: 'Cat in a tiara',
   color: '#7a6b28 ',
   highlight: '#e3a57c '
 },
 {
   value: pinkKitten.count,
   label: 'Cat in pink',
   color: '#a04d4c ',
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
   color: '#161904',
   highlight: '#e3a57c '
 },
 {
   value: plzKitten.count,
   label: 'Cat Plz',
   color: '#f09d76 ',
   highlight: '#e3a57c '
 },
 {
   value: cameraKitten.count,
   label: 'Cat with camera',
   color: '#f36913 ',
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
   color: '#0c8d9c ',
   highlight: '#e3a57c '
 },
];


//////////////////////////////Random Two Images/////////////////////////////////////////

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
    var image1 = document.querySelector("#img1");
    var image2 = document.querySelector("#img2");
    console.log(kittyList[0]);
    //src is a property of HTML img tag
    //source is the constructor prop
    image1.src = kittyList[rand1].source;
    image2.src = kittyList[rand2].source;
  };

  // //////////////////////////////Vote/////////////////////////////////////////
// you want to see if the object source is same as urlOfImageClicked
// if yes: increment the count on that object
this.addCount = function(event){
    console.log(this);
    console.log(event);

    var urlOfImageClicked = this.src;

    for (var i=0; i < kittyList.length;i++){


      //The indexOf() method searches the array for the specified item,
      //and returns its position.

      // The search will start at the specified position,
      // or at the beginning if no start position is specified,
      // and end the search at the end of the array.

      // Returns -1 if the item is not found.

      //if its not equal to !== -1 that means it is found.
        if (urlOfImageClicked.indexOf(kittyList[i].source) !== -1){
                kittyList[i].count++;
                console.log(urlOfImageClicked);
               console.log(kittyList[i].source);
        }
      }
      saveKittyListToBrowser();
      updateChart();
};

var updateChart = function() {
    for (var i=0; i < kittyList.length;i++){
      dataChart[i].value = kittyList[i].count;
    }

    var context = document.getElementById('canvas').getContext('2d');

    if (skillsChart != undefined) {
      skillsChart.destroy();
    }

    skillsChart = new Chart(context).Doughnut(dataChart, {
       animationEasing : "easeOutBounce"
    });

};


// -----------------------------------------------------------------
//A reference to the DOM element Node is stored in a variable submit

 $(window).load(function() {
    loadKittyListFromBrowser();
    randomImage();
    updateChart();
});

var button = document.getElementById("button");
var img_1  = document.getElementById("img1");
var img_2  = document.getElementById("img2");

//'click'-The event name is enclosed in quotation marks
button.addEventListener('click',randomImage);
img_1.addEventListener('click',this.addCount);
img_2.addEventListener('click',this.addCount);

//----------------------------------------------------------------
// //////////////////////////////Vote/////////////////////////////////////////


// Check browser support
var loadKittyListFromBrowser = function(){
  var getKitty = localStorage.getItem('jsonKitty');
  if (getKitty != null) {
     // found kitty list in browser store
     kittyList = JSON.parse(getKitty);
  }
}

//Storing it the variable
var saveKittyListToBrowser = function(){
    //kittyList Object converted into Strings;KeyValue
    var jsonObject = JSON.stringify(kittyList);
    //Set it with the KeyName 'jsonKitty'
    localStorage.setItem('jsonKitty',jsonObject);
}
