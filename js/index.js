
//grabs the container on the html
const hello = document.getElementById('hello')
const whatUp = document.createElement('h1')
const hola = document.createElement('h2')

document.getElementById('button').addEventListener("click", sayHello)
document.getElementById('removeButton').addEventListener("click", removeHello)
document.getElementById('changeColor').addEventListener("click", backgroundChange)

function sayHello() {
    whatUp.innerText = "hi!"
    hello.append(whatUp)

    hola.innerText = "hola!"
    hello.append(hola)

    document.getElementById("button").removeEventListener("click", sayHello);
}

function removeHello() {
    hola.remove()
    whatUp.remove()

    document.getElementById('button').addEventListener("click", sayHello)
}

function backgroundChange(){
    document.getElementById("hello").style.backgroundColor='white';
}




// hello.remove()

// const message = document.body
// message.innerText = "here's your message"
