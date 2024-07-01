
function showNav() {
    
    let CurrentStyle = document.getElementById("myTopnav");
    if (CurrentStyle.classList.contains("responsive")) {
        CurrentStyle.classList.remove("responsive");
    } else {
        CurrentStyle.classList.add("responsive");
    }
}
