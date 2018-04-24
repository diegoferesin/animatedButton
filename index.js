// 1. Que cuando me apoye sobre el botón pase algo
var buttonNode = document.querySelector(".button")
var lettersNodes = document.querySelectorAll(".button span")


buttonNode.addEventListener("mouseover", funtion(){
    for (var i = 0; i <lettersNodes.length; i++) {
    // 2. Que algunas letras se muevan hacia arriba
        if (i % 2 === 0){
            lettersNodes[i].style.transform = "traslateY(10px) rotate(5deg)"
    }   else {
        // 3. Y otras hacia abajo
        lettersNodes[i].style.transform = "traslateY(-10px) rotate(-5deg)"
        }
    }  
})

// 4. Que cuando me voy del botón las letras vuelvan a su lugar
buttonNode.addEventListener("mouseout"; function(){
    for (var i = 0; i <lettersNodes.length; i++) {
        lettersNodes[i].style.transform = "traslateY(0px)"
    }   
})

