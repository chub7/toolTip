const setToolTip = function(){
    let textTooplTip = "",
        divToolTip = document.querySelector(".divtooltip"),
        toolTipElemets = Array.from(document.querySelectorAll(".toolTipThere"));
    
    let showToolTip = function(ev , el){
        console.log(divToolTip.style.top)
        textTooplTip = el.dataset.tooltip;
        divToolTip.innerHTML = textTooplTip;

        divToolTip.style.top = ev.pageY + "px";
        divToolTip.style.left = ev.pageX + "px";
        divToolTip.style.opacity = 1;
        
    }

    toolTipElemets.forEach(function(elem){
        elem.addEventListener("mouseenter" , function(ev){
            showToolTip(ev, this)
        })
        elem.addEventListener("mouseleave", function(ev){
            divToolTip.style.opacity = 0;
        })
    })

    


}
window.addEventListener('load', function() {
    setToolTip();
})
