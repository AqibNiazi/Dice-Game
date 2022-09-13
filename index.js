
var randomNumber1=Math.floor(Math.random() * 6)+1; //select random number between 1-6
var randomDiceImage="dice"+randomNumber1+".png"; //select images between dice1.png-dice6.png
var randomImageSource="Images/"+randomDiceImage; //select Images/dice1.png to dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="Images/dice"+randomNumber2+".png";

var Image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML="Draw";

}
