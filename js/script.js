//Marlus fazer html e CSS
//Equipe os 3 pessoas a fazer desafio JavaScript (JS) 



//Lucas 
$(function(){

    var vez = 1;
    var vencedor = "";

    function casastodos(a, b, c){
    var quadroA = $("#quadro"+a);
    var quadroB = $("#quadro"+b);
    var quadroC = $("#quadro"+c);
    var bgA = $("#quadro"+a).css("background-image");
    var bgB = $("#quadro"+b).css("background-image");
    var bgC = $("#quadro"+c).css("background-image");
    if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != ".png")){
        if(bgA.indexOf("1.png") >= 0)
            vencedor = "1";
        else
            vencedor = "2";
        return true;
    }
    else{
        return false;
    }
}

//Renata 
$(".quadro").click(function(){
    var bg = $(this).css("background-image");
    if(bg == "none" || bg == "")
    {           
        var fig = "url(" + vez.toString() + ".png)";
        $(this).css("background", fig);
        vez = (vez == 1? 2:1);  
        verificarFimDeJogo();
    }
});

//Diamila
function verificarFimDeJogo(){
    if( casastodos(1, 2, 3) || casastodos(4, 5, 6) || casastodos(7, 8, 9) ||
        casastodos(1, 4, 7) || casastodos(2, 5, 8) || casastodos(3, 6, 9) ||
        casastodos(1, 5, 9) || casastodos(3, 5, 7)
        ){
        $("#resultado").html("<h1>O jogador " + vencedor + " venceu! </h1>");
        $(".quadro").off("click");
    }
}
    });

    
