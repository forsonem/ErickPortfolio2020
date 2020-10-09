// import Clipboard from "clipboard";

// -----------------------------------------home page----------------------------------
var slide = document.getElementById('slide');
var container = document.getElementsByClassName('container')
window.onmousemove = function(e){
  var x = e.clientX;
  slide.style.left = x/1.2 + 'px';
}
// ---------------------------------------------------------------------------
// ------------------------------Recent Projects----------------------------------
// ----------------------------------------------------------------------------------
function fade(event){
	var element = event.currentTarget;
	if (element.className === "rec-proj1-container") {
    document.querySelector(".rec-proj1-container ion-icon").style.opacity = 1;
    document.querySelector(".rec-proj2-container").style.opacity = 0.3;
    document.querySelector(".rec-proj3-container").style.opacity = 0.3;
  }
  else if (element.className === "rec-proj2-container"){
    document.querySelector(".rec-proj2-container ion-icon").style.opacity = 1;
    document.querySelector(".rec-proj1-container").style.opacity = 0.3;
    document.querySelector(".rec-proj3-container").style.opacity = 0.3;
  }
  else if(element.className === "rec-proj3-container"){
    document.querySelector(".rec-proj3-container ion-icon").style.opacity = 1;
    document.querySelector(".rec-proj1-container").style.opacity = 0.3;
    document.querySelector(".rec-proj2-container").style.opacity = 0.3;
  }
};
function fadein(event){
	var element = event.currentTarget;
	if (element.className === "rec-proj1-container") {
    document.querySelector(".rec-proj1-container ion-icon").style.opacity = 0;
    document.querySelector(".rec-proj2-container").style.opacity = 1;
    document.querySelector(".rec-proj3-container").style.opacity = 1;
  }
  else if (element.className === "rec-proj2-container"){
    document.querySelector(".rec-proj2-container ion-icon").style.opacity = 0;
    document.querySelector(".rec-proj1-container").style.opacity = 1;
    document.querySelector(".rec-proj3-container").style.opacity = 1;
  }
  else if(element.className === "rec-proj3-container"){
    document.querySelector(".rec-proj3-container ion-icon").style.opacity = 0;
    document.querySelector(".rec-proj1-container").style.opacity = 1;
    document.querySelector(".rec-proj2-container").style.opacity = 1;
  }
};
// ---------------------------------------------------------------------------
// ------------------------------Projects----------------------------------
// ---------------------------------------------------------------------------------->
function fadeProject(event){
	var element = event.currentTarget;
	if (element.className === "proj-tile-container1") {
    document.querySelector(".proj-tile-container1 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 0.3;
    document.querySelector(".proj-tile-container3").style.opacity = 0.3;
    document.querySelector(".proj-tile-container4").style.opacity = 0.3;
    document.querySelector(".proj-tile-container5").style.opacity = 0.3;
    document.querySelector(".proj-tile-container6").style.opacity = 0.3;
    document.querySelector(".proj-tile-container7").style.opacity = 0.3;
    document.querySelector(".proj-tile-container8").style.opacity = 0.3;
    document.querySelector(".proj-tile-container9").style.opacity = 0.3;
  }
  else if (element.className === "proj-tile-container2"){
    document.querySelector(".proj-tile-container2 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container1").style.opacity = 0.3;
    document.querySelector(".proj-tile-container3").style.opacity = 0.3;
    document.querySelector(".proj-tile-container4").style.opacity = 0.3;
    document.querySelector(".proj-tile-container5").style.opacity = 0.3;
    document.querySelector(".proj-tile-container6").style.opacity = 0.3;
    document.querySelector(".proj-tile-container7").style.opacity = 0.3;
    document.querySelector(".proj-tile-container8").style.opacity = 0.3;
    document.querySelector(".proj-tile-container9").style.opacity = 0.3;
  }
  else if(element.className === "proj-tile-container3"){
    document.querySelector(".proj-tile-container3 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 0.3;
    document.querySelector(".proj-tile-container1").style.opacity = 0.3;
    document.querySelector(".proj-tile-container4").style.opacity = 0.3;
    document.querySelector(".proj-tile-container5").style.opacity = 0.3;
    document.querySelector(".proj-tile-container6").style.opacity = 0.3;
    document.querySelector(".proj-tile-container7").style.opacity = 0.3;
    document.querySelector(".proj-tile-container8").style.opacity = 0.3;
    document.querySelector(".proj-tile-container9").style.opacity = 0.3;
  }
  else if(element.className === "proj-tile-container4"){
    document.querySelector(".proj-tile-container4 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 0.3;
    document.querySelector(".proj-tile-container3").style.opacity = 0.3;
    document.querySelector(".proj-tile-container1").style.opacity = 0.3;
    document.querySelector(".proj-tile-container5").style.opacity = 0.3;
    document.querySelector(".proj-tile-container6").style.opacity = 0.3;
    document.querySelector(".proj-tile-container7").style.opacity = 0.3;
    document.querySelector(".proj-tile-container8").style.opacity = 0.3;
    document.querySelector(".proj-tile-container9").style.opacity = 0.3;
  }
  else if(element.className === "proj-tile-container5"){
    document.querySelector(".proj-tile-container5 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 0.3;
    document.querySelector(".proj-tile-container3").style.opacity = 0.3;
    document.querySelector(".proj-tile-container4").style.opacity = 0.3;
    document.querySelector(".proj-tile-container1").style.opacity = 0.3;
    document.querySelector(".proj-tile-container6").style.opacity = 0.3;
    document.querySelector(".proj-tile-container7").style.opacity = 0.3;
    document.querySelector(".proj-tile-container8").style.opacity = 0.3;
    document.querySelector(".proj-tile-container9").style.opacity = 0.3;
  }
  else if(element.className === "proj-tile-container6"){
    document.querySelector(".proj-tile-container6 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 0.3;
    document.querySelector(".proj-tile-container3").style.opacity = 0.3;
    document.querySelector(".proj-tile-container4").style.opacity = 0.3;
    document.querySelector(".proj-tile-container5").style.opacity = 0.3;
    document.querySelector(".proj-tile-container1").style.opacity = 0.3;
    document.querySelector(".proj-tile-container7").style.opacity = 0.3;
    document.querySelector(".proj-tile-container8").style.opacity = 0.3;
    document.querySelector(".proj-tile-container9").style.opacity = 0.3;
  }
  else if(element.className === "proj-tile-container7"){
    document.querySelector(".proj-tile-container7 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 0.3;
    document.querySelector(".proj-tile-container3").style.opacity = 0.3;
    document.querySelector(".proj-tile-container4").style.opacity = 0.3;
    document.querySelector(".proj-tile-container5").style.opacity = 0.3;
    document.querySelector(".proj-tile-container6").style.opacity = 0.3;
    document.querySelector(".proj-tile-container1").style.opacity = 0.3;
    document.querySelector(".proj-tile-container8").style.opacity = 0.3;
    document.querySelector(".proj-tile-container9").style.opacity = 0.3;
  }
  else if(element.className === "proj-tile-container8"){
    document.querySelector(".proj-tile-container8 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 0.3;
    document.querySelector(".proj-tile-container3").style.opacity = 0.3;
    document.querySelector(".proj-tile-container4").style.opacity = 0.3;
    document.querySelector(".proj-tile-container5").style.opacity = 0.3;
    document.querySelector(".proj-tile-container6").style.opacity = 0.3;
    document.querySelector(".proj-tile-container7").style.opacity = 0.3;
    document.querySelector(".proj-tile-container1").style.opacity = 0.3;
    document.querySelector(".proj-tile-container9").style.opacity = 0.3;
  }
  else if(element.className === "proj-tile-container9"){
    document.querySelector(".proj-tile-container9 ion-icon").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 0.3;
    document.querySelector(".proj-tile-container3").style.opacity = 0.3;
    document.querySelector(".proj-tile-container4").style.opacity = 0.3;
    document.querySelector(".proj-tile-container5").style.opacity = 0.3;
    document.querySelector(".proj-tile-container6").style.opacity = 0.3;
    document.querySelector(".proj-tile-container7").style.opacity = 0.3;
    document.querySelector(".proj-tile-container8").style.opacity = 0.3;
    document.querySelector(".proj-tile-container1").style.opacity = 0.3;
  }
};
function fadeinProject(event){
	var element = event.currentTarget;
	if (element.className === "proj-tile-container1") {
    document.querySelector(".proj-tile-container1 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container2").style.opacity = 1;
    document.querySelector(".proj-tile-container3").style.opacity = 1;
    document.querySelector(".proj-tile-container4").style.opacity = 1;
    document.querySelector(".proj-tile-container5").style.opacity = 1;
    document.querySelector(".proj-tile-container6").style.opacity = 1;
    document.querySelector(".proj-tile-container7").style.opacity = 1;
    document.querySelector(".proj-tile-container8").style.opacity = 1;
    document.querySelector(".proj-tile-container9").style.opacity = 1;
  }
  else if (element.className === "proj-tile-container2"){
    document.querySelector(".proj-tile-container2 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container1").style.opacity = 1;
    document.querySelector(".proj-tile-container3").style.opacity = 1;
    document.querySelector(".proj-tile-container4").style.opacity = 1;
    document.querySelector(".proj-tile-container5").style.opacity = 1;
    document.querySelector(".proj-tile-container6").style.opacity = 1;
    document.querySelector(".proj-tile-container7").style.opacity = 1;
    document.querySelector(".proj-tile-container8").style.opacity = 1;
    document.querySelector(".proj-tile-container9").style.opacity = 1;
  }
  else if(element.className === "proj-tile-container3"){
    document.querySelector(".proj-tile-container3 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container1").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 1;
    document.querySelector(".proj-tile-container4").style.opacity = 1;
    document.querySelector(".proj-tile-container5").style.opacity = 1;
    document.querySelector(".proj-tile-container6").style.opacity = 1;
    document.querySelector(".proj-tile-container7").style.opacity = 1;
    document.querySelector(".proj-tile-container8").style.opacity = 1;
    document.querySelector(".proj-tile-container9").style.opacity = 1;
  }
  else if(element.className === "proj-tile-container4"){
    document.querySelector(".proj-tile-container4 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container1").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 1;
    document.querySelector(".proj-tile-container3").style.opacity = 1;
    document.querySelector(".proj-tile-container5").style.opacity = 1;
    document.querySelector(".proj-tile-container6").style.opacity = 1;
    document.querySelector(".proj-tile-container7").style.opacity = 1;
    document.querySelector(".proj-tile-container8").style.opacity = 1;
    document.querySelector(".proj-tile-container9").style.opacity = 1;
  }
  else if(element.className === "proj-tile-container5"){
    document.querySelector(".proj-tile-container5 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container1").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 1;
    document.querySelector(".proj-tile-container3").style.opacity = 1;
    document.querySelector(".proj-tile-container4").style.opacity = 1;
    document.querySelector(".proj-tile-container6").style.opacity = 1;
    document.querySelector(".proj-tile-container7").style.opacity = 1;
    document.querySelector(".proj-tile-container8").style.opacity = 1;
    document.querySelector(".proj-tile-container9").style.opacity = 1;
  }
  else if(element.className === "proj-tile-container6"){
    document.querySelector(".proj-tile-container6 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container1").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 1;
    document.querySelector(".proj-tile-container3").style.opacity = 1;
    document.querySelector(".proj-tile-container4").style.opacity = 1;
    document.querySelector(".proj-tile-container5").style.opacity = 1;
    document.querySelector(".proj-tile-container7").style.opacity = 1;
    document.querySelector(".proj-tile-container8").style.opacity = 1;
    document.querySelector(".proj-tile-container9").style.opacity = 1;
  }
  else if(element.className === "proj-tile-container7"){
    document.querySelector(".proj-tile-container7 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container1").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 1;
    document.querySelector(".proj-tile-container3").style.opacity = 1;
    document.querySelector(".proj-tile-container4").style.opacity = 1;
    document.querySelector(".proj-tile-container5").style.opacity = 1;
    document.querySelector(".proj-tile-container6").style.opacity = 1;
    document.querySelector(".proj-tile-container8").style.opacity = 1;
    document.querySelector(".proj-tile-container9").style.opacity = 1;
  }
  else if(element.className === "proj-tile-container8"){
    document.querySelector(".proj-tile-container8 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container1").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 1;
    document.querySelector(".proj-tile-container3").style.opacity = 1;
    document.querySelector(".proj-tile-container4").style.opacity = 1;
    document.querySelector(".proj-tile-container5").style.opacity = 1;
    document.querySelector(".proj-tile-container6").style.opacity = 1;
    document.querySelector(".proj-tile-container7").style.opacity = 1;
    document.querySelector(".proj-tile-container9").style.opacity = 1;
  }
  else if(element.className === "proj-tile-container9"){
    document.querySelector(".proj-tile-container9 ion-icon").style.opacity = 0;
    document.querySelector(".proj-tile-container1").style.opacity = 1;
    document.querySelector(".proj-tile-container2").style.opacity = 1;
    document.querySelector(".proj-tile-container3").style.opacity = 1;
    document.querySelector(".proj-tile-container4").style.opacity = 1;
    document.querySelector(".proj-tile-container5").style.opacity = 1;
    document.querySelector(".proj-tile-container6").style.opacity = 1;
    document.querySelector(".proj-tile-container7").style.opacity = 1;
    document.querySelector(".proj-tile-container8").style.opacity = 1;
  }
};


// --------------------------------------------------------------------------------
// Vlog card flip method------------------------------------------------------>
// ------------------------------------------------------------------------------------
function flip(event){
	var element = event.currentTarget;
	if (element.className === "flip-card") {
    if(element.style.transform == "rotateX(180deg)") {
      element.style.transform = "rotateX(0deg)";
    }
    else {
      element.style.transform = "rotateX(180deg)";
    }
  }
};
// ---------------------------------------------------------------------------------
// copt text to clipboard--------------------------------------------------------->
// -------------------------------------------------------------------------------------
// const myEmail= document.querySelector(".email1");
// const emailIcon = document.querySelector(".bye"); 

// emailIcon.onclick = function(){
//   const myEmail= document.querySelector(".email1");
  
//   //select the text
//   myEmail.select();
//   //copy the text
//   document.execCommand("copy");

//   alert("Copied the text: " + myEmail.value);

// }

var clip = new Clipboard(".hello1");

clip.on("success", function(){
  alert("My email was copied to your clipboard");
});
clip.on("error", function(){
  alert("That didn't work, sorry");
});











