var id = "ok3pcm0j2ko5";

window.onload = function(){ //početak rada programa
    gameStartSetter();
    //kada su svi uredjaji spremni započni sa izvršavanjem glavnog programa
    document.addEventListener("deviceReady",function(){

        document.getElementById("btnStartGame").addEventListener("click", startGameClicked);

        document.getElementById("btn1Player").addEventListener("click", onePlayerClicked);

        document.getElementById("btn2Players").addEventListener("click", twoPlayersClicked);



    },false);

    //function for hiding all of the unneaded components before game started
    function gameStartSetter(){
        document.getElementById("game-container").style.display = "none";
        document.getElementById("container_1player").style.display = "none";
        document.getElementById("container_2players").style.display = "none";
        document.getElementById("end-container").style.display = "none";
        document.getElementById("players_select-container").style.display = "none"; 
    }

    //function if "Start game" button clicked
    //hides "start game" button and shows buttons for deciding game mode
    function startGameClicked(){
        document.getElementById("btnStartGame").style.display= "none";
        document.getElementById("players_select-container").style.display = "block";
    }
    function onePlayerClicked(){
        document.getElementById("players_select-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        document.getElementById("container_1player").style.display = "block";
    }
    function twoPlayersClicked(){
        document.getElementById("players_select-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        document.getElementById("container_2players").style.display = "block";
    }
}
