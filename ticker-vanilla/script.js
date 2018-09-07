(function() {
    var headLines = document.getElementById("headLines");
    var left = headLines.offsetLeft;
    var links = headLines.getElementsByTagName("a");
    var stop;

    headLines.addEventListener("mouseover", function(){
      cancelAnimationFrame(stop);
    })

    headLines.addEventListener("mouseout", function(){
      tick();
    })

    function swap() {
        left += links[0].offsetWidth;
        headLines.appendChild(links[0]);
        headLines.style.left = left + "px";
    }

    function tick() {
        left--;
        if (left < -links[0].offsetWidth) {
            swap();
        }
        headLines.style.left = left + "px";
        stop = requestAnimationFrame(tick);
    }

    tick();
})();
