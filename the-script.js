

function scrollDown(){
  window.scrollTo(0,document.body.scrollHeight);
}
function scrollUp(){
  document.documentElement.scrollTop = 0;
}

var check = true;

function getPosts(){
  //each facebook
  console.log("getting posts");
  alreadyDeletedOkay();
return document.getElementsByClassName("_4-u2 mbm _4mrt _5jmm _5pat _5v3q _4-u8");
}

function deletePosts(){
alreadyDeletedOkay();
var posts = getPosts();
  // console.log("posts size: "+posts.length);
  if(posts.length>0){
  var postID = posts[0].id; //get first post

  // console.log("opening menu");
  // if(check){
 doTimedThing(openMenu(postID),300); //give 600ms for menu to open and to click delete
doTimedThing(deletePosts,2000); // recursive function, instead of looping because takes time for the post to dissapear from feed.
// }

    // doTimedThing(removeFirstElement,5000);
    // deletePosts();
}else{
  doTimedThing(scrollDown,100);
  doTimedThing(scrollUp,100);
    doTimedThing(deletePosts,3000);
}
}

function alreadyDeletedOkay(){
  //some people have slow internet so we need to click ok on the "post has already been deleted button"
  //check if dialogue is open
  if (document.getElementsByClassName("_42ft _4jy0 layerCancel uiOverlayButton _4jy3 _4jy1 selected _51sy").length > 0) {
    // alert("already open");
    // removeFirstElement();
    console.log("Already clicked dialogue is open! Clicking okay.");
    var button = document.getElementsByClassName("_42ft _4jy0 layerCancel uiOverlayButton _4jy3 _4jy1 selected _51sy");

    if(button.length > 0 ){

      for(var x = 0; x < button.length;x++){
        button[x].click();
      }


    }else{
      button[0].click();
    }



}

}
function openMenu(postID){
  check = false;
  var post = document.getElementById(postID);
  var dropdown = document.getElementsByClassName("_4xev _p")[0]; //the settings class for the post
  dropdown.click(); //dropdown menu is now open
  doTimedThing(clickDelete,600); //give 600ms for menu to open and to click delete
}
function clickDelete(){
  alreadyDeletedOkay();
  var ul = document.getElementsByClassName("_54ni _41t6 __MenuItem");
  for(var x=0; x <ul.length;x++){
    var li = ul[x];
    var txtOption = li.innerText;
    if(txtOption.indexOf('Delete post') >=0){
      var a = li.firstChild;
      a.click(); // this will open confirmation dialogue
      doTimedThing(confirmDelete,400); //confirmation dialogue takes some time to show
    }
  }
}
function confirmDelete(){
      alreadyDeletedOkay();
  //confirmation dialogue class
  check = true;
var button = document.getElementsByClassName("_42ft _4jy0 layerConfirm uiOverlayButton _4jy3 _4jy1 selected _51sy")[0];
button.click();

// doTimedThing(deletePosts,1000);
}
//function that will take a function as an argument and a delay
function doTimedThing( somefunction, time){
    alreadyDeletedOkay();
setTimeout(somefunction, time);
}

deletePosts();
