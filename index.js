var i ;
var pinkJeannie = 4;
var gameView= document.getElementById("jeannie");
var success = document.getElementById("success");
var range = 200;
var styleTop; 
var styleLeft; 
var img;
var theBody = document.getElementsByTagName("body")[0];
function gamePlay(){

    for (i =0 ; i < pinkJeannie;i++){

        img = document.createElement("img");
        img.src="pinkJeannie2.gif";
        styleTop = generateRandomStyle(range);
        img.style.top=styleTop;
        styleLeft = generateRandomStyle(range);
        img.style.left=styleLeft;
        gameView.appendChild(img);
    }   
    var evilJin = document.createElement("img");
    styleTop = generateRandomStyle(range);
    evilJin.style.top=styleTop;
    styleLeft = generateRandomStyle(range);
    evilJin.style.left=styleLeft;
    evilJin.src="evilJeannie2.gif";
    gameView.appendChild(evilJin)

    gameView.lastChild.onclick = 
            function nextLevel(event) {
                alert("Good Job! \n You caught the evil Jeannie!");//show success msg to user
                while (gameView.firstChild) gameView.removeChild(gameView.firstChild);
                var newHeading = document.createElement("h4");
                newHeading.innerText="You are my new master!";
                success.appendChild(newHeading);
                var newImg = document.createElement("img");
                newImg.src="happyJeannie.gif";
                success.appendChild(newImg);
               theBody.onclick = null; //Nothing should happen when the user clicks the body once game over
                gameView.lastChild.onclick = null;
               
            };


            theBody.onclick = function multiplyJeannie() {
                alert("Oops! \n Try Again !");//show a message to the user
                event.stopPropagation(); //To avoid event bubbling
                pinkJeannie*=2;
                while (gameView.firstChild) gameView.removeChild(gameView.firstChild);
                gamePlay();
            };
}

function generateRandomStyle(range){
    console.log("In function generateRandomStyleTop()");
    var num = Math.random(); //Generate random number
    console.log(num);//ramdom number
    num=num*range; //Multiply by the range
    var randNum =  Math.floor(num);//Round it
    console.log("Random number in range 0 to 400 is " +  randNum);
    var style = randNum.toString() + "px";
    return style;
}