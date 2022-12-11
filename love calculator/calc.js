window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click",calculateLove);
}

    function calculateLove() {
        let yourName = document.getElementById("your-Name").value;
        let crushName = document.getElementById("crush-Name").value;
    
    
    if (yourName !="" && crushName !="") {
        let percentage = Math.floor(Math.random() * 101); //0-.999999 * 101  -> 0- 100.999999
        document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love: "
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }  
}