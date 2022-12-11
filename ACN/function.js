function checkNum() {
    
    let num = document.getElementById("numval").value;

    if (0 < num && num <= 100) {
        alert("Number valid");
    } else {

        alert("Number invalid");
    }
}
