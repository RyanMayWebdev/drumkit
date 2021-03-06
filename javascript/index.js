let buttons = document.querySelectorAll(".drum");

for (let x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", handleClick);
}

document.addEventListener("keydown", keyPressed)

function keyPressed() {
    if (event.key === "w" || event.key === "a" || event.key === "s" || event.key === "d" || event.key === "j" || event.key === "k" || event.key === "l") {
        let fileName = event.key;
        let button = document.querySelector("." + fileName);
        buttonAnim(button)
        playSound(fileName);
    }
}


function handleClick() {
    let fileName = this.innerHTML;
    let button = this;
    buttonAnim(button)
    playSound(fileName);
}

function playSound(fileName) {
    let audio = new Audio('sounds/' + fileName + '.mp3');
    audio.play();
}

function buttonAnim(button) {
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 300);
}