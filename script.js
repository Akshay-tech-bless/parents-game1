let score = 0;


// Start the game
function startGame(){

    document.getElementById("welcome")
    .classList.remove("active");


    document.getElementById("level1")
    .classList.add("active");


    createHearts();

}



// Create floating hearts for Level 1

function createHearts(){

    const area

    // Open treasure level

function openTreasure(){

    document.querySelectorAll(".screen")
    .forEach(screen=>{

        screen.classList.remove("active");

    });


    document.getElementById("treasure")
    .classList.add("active");

}



// Open treasure box

function openBox(){

    document.getElementById("box")
    .innerHTML="💖";


    document.getElementById("treasure-message")
    .innerHTML=
    `
    ✨ The Greatest Treasure ✨
    <br><br>
    Is having parents like
    <br>
    ❤️ Sarvesh Kumar ❤️
    <br>
    and
    <br>
    ❤️ Gnanalatha ❤️
    <br><br>
    Love Always,
    <br>
    Akshaya ❤️
    `;


    createFireworks();


    setTimeout(()=>{

        document.querySelectorAll(".screen")
        .forEach(screen=>{

            screen.classList.remove("active");

        });


        document.getElementById("final")
        .classList.add("active");


    },5000);

}



// Fireworks effect

function createFireworks(){

    for(let i=0;i<30;i++){

        let fire =
        document.createElement("div");


        fire.innerHTML="✨";


        fire.className="firework";


        fire.style.left =
        Math.random()*100+"vw";


        fire.style.top =
        Math.random()*100+"vh";


        document.body.appendChild(fire);


        setTimeout(()=>{

            fire.remove();

        },2000);

    }

}
