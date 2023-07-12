let score1 = document.getElementById("score1-el")
let score2 = document.getElementById("score2-el")

let home = 0
let guest = 0

function add1() {
    home += 1
    score1.textContent = home
}

function add2() {
    home += 2
    score1.textContent = home
}

function add3() {
    home += 3
    score1.textContent = home
}

function reset1() {
    home = 0
    score1.textContent = home
}

function add11() {
    guest += 1
    score2.textContent = guest
}

function add22() {
    guest += 2
    score2.textContent = guest
}

function add33() {
    guest += 3
    score2.textContent = guest
}

function reset2() {
    guest = 0
    score2.textContent = guest
}