// ===============================
// HACKER MATRIX EFFECT
// ===============================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const text = "I LOVE YOU ❤️";
const letters = text.split("");

const fontSize = 18;
const columns = canvas.width / fontSize;

const drops = [];

for(let i = 0; i < columns; i++){
    drops[i] = 1;
}


function matrix(){

    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle = "#00ff66";
    ctx.font = fontSize + "px monospace";


    for(let i = 0; i < drops.length; i++){

        let letter =
        letters[Math.floor(Math.random()*letters.length)];


        ctx.fillText(
            letter,
            i * fontSize,
            drops[i] * fontSize
        );


        if(
          drops[i]*fontSize > canvas.height
          &&
          Math.random() > 0.975
        ){
            drops[i]=0;
        }

        drops[i]++;
    }

}

setInterval(matrix,40);



// ===============================
// TYPING INTRO
// ===============================


const introText = [
"Initializing Love.exe...",
"Searching for the most beautiful person...",
"Found ❤️",
"Loading feelings..."
];


let line = 0;
let char = 0;

const typing =
document.getElementById("typing");


function type(){

    if(char < introText[line].length){

        typing.innerHTML +=
        introText[line][char];

        char++;

        setTimeout(type,80);

    }

    else{

        setTimeout(()=>{

            typing.innerHTML="";
            char=0;
            line++;

            if(line < introText.length){
                type();
            }
            else{

                document.getElementById("intro")
                .style.display="none";


                document.getElementById("lovePage")
                .style.opacity="1";


                createHeart();

            }

        },1000);

    }

}


type();



// ===============================
// SLOW PERFECT HEART DRAW
// ===============================


function createHeart(){

const heart =
document.getElementById("heart");


let t = 0;

const total = 350;


let timer = setInterval(()=>{


let x =
16 * Math.pow(Math.sin(t),3);


let y =
13*Math.cos(t)
-
5*Math.cos(2*t)
-
2*Math.cos(3*t)
-
Math.cos(4*t);



x *= 12;
y *= -12;



let love =
document.createElement("div");


love.className="love";

love.innerHTML="I LOVE YOU ❤️";


love.style.left =
(300 + x) + "px";


love.style.top =
(300 + y) + "px";


heart.appendChild(love);



t += 0.035;



if(t >= Math.PI*2){

clearInterval(timer);


setTimeout(()=>{

heart.classList.add("complete");


},1000);


}


},40);


}