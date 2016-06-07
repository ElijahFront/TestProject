var js = document.getElementById('js');
var block = document.getElementsByClassName('passed');
var mask = document.getElementsByClassName('mask');
var jquery = document.getElementById('jquery');
var basic = document.getElementById('basic');
var responsive = document.getElementById('resp');
var respCSS = document.getElementById('resp-css');
var adaptCSS = document.getElementById('adapt-css');

js.onclick = function(){
  mask[0].style.backgroundColor = "rgba(111, 212, 44, 0.37)";
    setTimeout(function() {
      mask[0].style.display = "none", block[0].style.display = "none", hide();
    }, 1000);

  };

jquery.onclick = function() {
  mask[1].style.backgroundColor = "rgba(111, 212, 44, 0.37)";
    setTimeout(function() {
      mask[1].style.display = "none", block[1].style.display = "none", hide();
    }, 1000);
};
basic.onclick = function() {
  mask[2].style.backgroundColor = "rgba(111, 212, 44, 0.37)";
    setTimeout(function() {
      mask[2].style.display = "none", block[2].style.display = "none", hide();
    }, 1000);
};

resp.onclick = function () {
  mask[3].style.backgroundColor = "rgba(111, 212, 44, 0.37)";
    setTimeout(function() {
      mask[3].style.display = "none", block[3].style.display = "none", hide();
    }, 1000);
};
respCSS.onclick = function () {
  mask[4].style.backgroundColor = "rgba(111, 212, 44, 0.37)";
    setTimeout(function() {
      mask[4].style.display = "none", block[4].style.display = "none", hide();
    }, 1000);
};
adaptCSS.onclick = function () {
  mask[5].style.backgroundColor = "rgba(111, 212, 44, 0.37)";
    setTimeout(function() {
      mask[5].style.display = "none", block[5].style.display = "none", hide();
    }, 1000);
};
function hide(){
  if ((mask[0].style.display == "none") && (block[0].style.display == "none") && mask[1].style.display == "none" && block[1].style.display == "none" &&
mask[2].style.display == "none" && block[2].style.display == "none" && mask[3].style.display == "none" && block[3].style.display == "none" &&
mask[4].style.display == "none" && block[4].style.display == "none" && mask[5].style.display == "none"&& block[5].style.display == "none"){
    console.log('hide');
     document.getElementById('all-over').style.display = "block";
     document.getElementsByClassName('passed-wrapper')[0].style.justifyContent = "center";
   }
}
