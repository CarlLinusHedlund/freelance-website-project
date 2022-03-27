document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".blobJs").forEach(function(move){
        var movingValue = move.getAttribute("data-value");
        var x = (e.clientX * movingValue) / 1400;
        var y = (e.clientY * movingValue) / 1400;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
} 


