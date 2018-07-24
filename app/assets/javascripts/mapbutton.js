var mapMenuChecker = 0;

function showMapMenu() {
      document.getElementById("myDropdown").classList.toggle("show");
      mapMenuChecker++;
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#mapMenu')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show') && mapMenuChecker%2==0) {
        //openDropdown.classList.remove('show');
      }
    }
  }
}

var leftInfoChecker = 0;
var lefInfoSizeChange = "300px";
var lefInfoSizeBack = "calc(100% - "+lefInfoSizeChange+")";

function showLeftInfo() {
  if(leftInfoChecker == 0){
    document.getElementById("leftInfo").style.width = lefInfoSizeChange;
    document.getElementById("kakaomap").style.width = lefInfoSizeBack;
    //document.getElementById("leftInfo").style.backgroundColor="rgb(255, 204, 204)"; 
    leftInfoChecker = 1;
  }else if(leftInfoChecker == 1){
    
    document.getElementById("leftInfo").style.width = "0px";
    document.getElementById("kakaomap").style.width = "100%";
    leftInfoChecker = 0;
  }
}

var messengerChecker = 0;
var messengerSizeChange = "400px";
var messengerSizeBack ="calc(100% - "+messengerSizeChange+")";

function showMessenger() {
  if(messengerChecker == 0){
    document.getElementById("kakaomap").style.width = messengerSizeBack;
    document.getElementById("messenger").style.width = messengerSizeChange;
    document.getElementById("messenger").style.backgroundColor="blue"; 
    messengerChecker = 1;
  }else if(messengerChecker == 1){
    
    document.getElementById("messenger").style.width = "0px";
    document.getElementById("kakaomap").style.width = "100%";
    messengerChecker = 0;
  }
}

var bottomInfoChecker = 0;
var bottomnfoSizeChange = "300px";
var bottomInfoSizeBack = "calc(100% - "+bottomnfoSizeChange+")";

function showBottomInfo() {
  if(bottomInfoChecker == 0){
    document.getElementById("bottomInfo").style.height = bottomnfoSizeChange;
    document.getElementById("map").style.height = bottomInfoSizeBack;
    document.getElementById("bottomInfo").style.backgroundColor="yellow"; 
    bottomInfoChecker = 1;
  }else if(bottomInfoChecker == 1){
    
    document.getElementById("bottomInfo").style.height = "0px";
    document.getElementById("map").style.height = "100%";
    bottomInfoChecker = 0;
  }
}