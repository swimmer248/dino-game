var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-block.style.width && characterTop>=130){
        block.style.animation = "none"
        block.style.display = "none"
        alert("u lose.")
    }
},10);

var randomSize = setInterval(function(){
    var blockSize = Math.random() * 20 * 4;
    document.querySelector(':root').style.setProperty('--width', blockSize + "px");
},1000)