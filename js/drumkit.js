const drumKit = document.getElementById('drumKit')
const snare = document.querySelector('.snare')
const kick = document.querySelector('.kick')
const hat = document.querySelector('.hat')

document.querySelector('.snare').addEventListener('click', playSnare)
document.querySelector('.kick').addEventListener('click', playKick)
document.querySelector('.hat').addEventListener('click', playHat)

function playSnare(){
    document.querySelector('.snare').style.backgroundColor = 'red'
    let audio = new Audio("./sounds/snare.wav")
    audio.play()
    document.querySelector('.snare').style.backgroundColor = 'white'
}

function playKick(){
    let audio = new Audio("./sounds/kick.wav")
    audio.play()
}

function playHat(){
    let audio = new Audio("./sounds/hat.wav")
    audio.play()
}