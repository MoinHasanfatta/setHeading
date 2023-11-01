let a = document.getElementById('h')
h.textContent = "Mini Project"
h.style.color = "white"
h.style.textAlign = "center"

let b = document.getElementById('p1')

function line(){

b.textContent = "A new line"
}

let z = document.getElementById('d')

function cc(){
    if(z.style.backgroundColor == "black")
    z.style.backgroundColor = "yellow"
    else if (z.style.backgroundColor == "yellow")
        z.style.backgroundColor = "blue"
        else if (z.style.backgroundColor == "blue")
        z.style.backgroundColor = "pink"
        else {
            z.style.backgroundColor = "black"
        }

    }

