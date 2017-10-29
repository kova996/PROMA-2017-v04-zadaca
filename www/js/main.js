var id = "ok3pcm0j2ko5";

window.onload = function(){ //početak rada programa
    gameStartSetter();
    //kada su svi uredjaji spremni započni sa izvršavanjem glavnog programa
    document.addEventListener("deviceReady",function(){





    },false);

    //function for hiding all of the unneaded components before game started
    function gameStartSetter(){
        document.getElementById("game-container").style.display = "none";
        document.getElementById("end-container").style.display = "none";
        document.getElementById("players_select-container").style.display = "none"; 
    }
}
