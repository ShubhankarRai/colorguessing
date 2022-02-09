var numSquares = 6;
var colors = RandomColor(numSquares);

var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#cdi");
var displayMessage = document.querySelector("#message");
var easyB = document.querySelector("#easybtn");
var hardB = document.querySelector("#hardbtn");



easyB.addEventListener("click", function(){
  hardB.classList.remove("selected");
  easyB.classList.add("selected");
  numSquares= 3;
  colors = RandomColor(3);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  for(var i = 0; i< squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } 
    else{
      squares[i].style.display = "none";
      
    } 
  }
})

hardB.addEventListener("click", function(){
  hardB.classList.add("selected");
  easyB.classList.remove("selected");
  numSquares = 6;
  colors = RandomColor(6);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  for(var i = 0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
})

var goalColor = pickColor();

reset.addEventListener("click", function(){
  colors = RandomColor(numSquares);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  this.textContent = "New Color";
  displayMessage.textContent = "";
  for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";

})

colorDisplay.textContent = goalColor;

for(var i=0; i<squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === goalColor){
      reset.textContent = "Play Again";
      displayMessage.textContent = "Correct";
      h1.style.backgroundColor= clickedColor;
      change(clickedColor);
    }
    else{
      this.style.backgroundColor = "black";
      displayMessage.textContent = "Try Again";
    }
  })
}

function change(color){
  for( var i = 0; i< squares.length; i++){
    squares[i].style.backgroundColor = color ;
  }
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function RandomColor(num){
  var arr=[];
  for(var i=0; i<num ; i++){
    arr.push(randomColor());

  }
  return arr;

}

function randomColor(){
  var r = Math.floor(Math.random()* 256);
  var g = Math.floor(Math.random()* 256);
  var b = Math.floor(Math.random()* 256);
  return "rgb("+ r +", "+ g +", "+ b +")";
}






// var pickColor = pickColor();








