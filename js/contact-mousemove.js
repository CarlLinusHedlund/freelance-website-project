document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".green-blob").forEach(function(move){
        var movingValue = move.getAttribute("data-value");
        var x = (e.clientX + movingValue) / 1400;
        var y = (e.clientY + movingValue) / 1400;
        console.log(movingValue)

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
} 
