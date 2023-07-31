function buy(store) {
    let cost = parseInt(store.getAttribute("cost"));
    let bank = parseInt(score.innerHTML);
    //break if not enough points to buy
    if (bank < cost) return;

    changeScore(-1 * cost);

    let widget = document.createElement("div");
    widget.className = "widget";
    fillWidget(store, widget);

    widget.onclick = () => {
        harvest(widget)
    }

    document.getElementById("widget-container").appendChild(widget);
    if(widget,getAttribute("auto") == `true`)harvest(widget);

}

function harvest(widget) {
    //onlt run  if currently not harvesting 
    if(widget.hasAttribute("harvesting"))return;

    //set harvesting flag
    widget.setAttribute("harvesting","");

    
    if (widget.getAttribute("auto") != `true`) {
        changeScore(widget.getAttribute("reap"));
        showPoint(widget);
    }
    setTimeout(() => {
        //remove the harvesting flag 
        widget.removeAttribute("harvesting");

        //collect points if automatic
        if (widget.getAttribute("auto") == `true`) {
            changeScore(widget.getAttribute("reap"));
            showPoint(widget);
            harvest(widget);
    
    }}, parseFloat(widget.getAttribute("cooldown"))*1000);
}
function changeScore(amount) {
    score.innerHTML = parseInt(score.innerHTML) + parseInt(amount);

    for (let store of stores) {
        let cost = parseInt(store.getAttribute("cost"));
        let bank = parseInt(score.innerHTML);

        //Display overlay if broke
        if (cost <= bank) {
            store.removeAttribute("broke");
        } else {
            store.setAttribute("broke", "");
        }
    }
}

function showPoint(widget) {
    let number = document.createElement("span");
    number.className = "point";
    number.innerHTML = "+" + widget.getAttribute("reap");
    number.style.left = "50x";
    number.style.top = "50x";
    number.onanimationend = () => {
        widget.removeChild(number);
    }

    widget.appendChild(number);
}

