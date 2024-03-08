function loadMorePizzas() {
  var array1 = document.getElementsByClassName("loadmorepizza");
  for (let i = 0; i < array1.length; i++) {
    array1[i].style.cssText =
      "border:1px solid crimson;display:inline-block;margin:25px 25px;padding:20px 20px;border-radius: 5px;text-align: center";
  }
  document.getElementById("loadmorepizzabtn").style.display = "none";
}

function loadMoreBurgers() {
  var array2 = document.getElementsByClassName("loadmoreburger");
  for (let j = 0; j < array2.length; j++) {
    array2[j].style.cssText =
      "border:1px solid crimson;display:inline-block;margin:25px 25px;padding:20px 20px;border-radius: 5px;text-align: center";
  }
  document.getElementById("loadmoreburgerbtn").style.display = "none";
}

function loadMoreDrinks() {
  var array3 = document.getElementsByClassName("loadmoredrink");
  for (let k = 0; k < array3.length; k++) {
    array3[k].style.cssText =
      "border:1px solid crimson;display:inline-block;margin:25px 25px;padding:20px 20px;border-radius: 5px;text-align: center";
  }
  document.getElementById("loadmoredrinkbtn").style.display = "none";
}
