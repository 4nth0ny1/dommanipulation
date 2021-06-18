const drumKit = document.getElementById('drumKit')
const snare = document.querySelector('.snare')
const kick = document.querySelector('.kick')
const hat = document.querySelector('.hat')

document.addEventListener('keyup', playKit)

function playDrum(file){
    let audio = new Audio(file)
    audio.play()
}

function playKit(e){
    switch(e.keyCode) {
        case 50:
            playDrum('./sounds/Snare.wav')
            break
        case 48:
            playDrum('./sounds/Kick.wav')
            break
        case 49:
            playDrum('./sounds/Hat.wav')
            break     
    }
}

