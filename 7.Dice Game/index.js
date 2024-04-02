var rand1=Math.floor(Math.random()*6)+1;
var randDiceimage="dice"+rand1+".png";
var randImgSource="images/"+randDiceimage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randImgSource);

var rand2=Math.floor(Math.random()*6)+1;
var randImgSource2="images/dice"+rand2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randImgSource2);

if(rand1>rand2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";

}

else if(rand1<rand2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";

}
else{
    document.querySelector("h1").innerHTML="It's a Draw";
}