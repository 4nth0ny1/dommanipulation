const drumKit = document.getElementById('drumKit')
const snare = document.querySelector('.snare')
const kick = document.querySelector('.kick')
const hat = document.querySelector('.hat')

document.querySelector('.snare').addEventListener('click', playSnare)
document.querySelector('.kick').addEventListener('click', playKick)
document.querySelector('.hat').addEventListener('click', playHat)
document.addEventListener('keyup', playKit)

function playSnare(){
    let audio = new Audio("./sounds/snare.wav")
    audio.play()
}

function playKick(){
    let audio = new Audio("./sounds/kick.wav")
    audio.play()
}

function playHat(){
    let audio = new Audio("./sounds/hat.wav")
    audio.play()
}

function playKit(e){
    switch(e.keyCode) {
        case 50:
            playSnare()
            break
        case 48:
            playKick()
            break
        case 49:
            playHat()
            break     
    }
}

