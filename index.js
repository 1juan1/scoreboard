let hScoreEl = document.getElementById("home-score")
let gScoreEl = document.getElementById("guest-score")

let hScore = 0
let gScore = 0

//HOME FUNCTIONS
function p1Home() {
    hScore += 1
    hScoreEl.innerText = hScore
}

function p2Home() {
    hScore += 2
    hScoreEl.innerText = hScore
}

function p3Home() {
    hScore += 3
    hScoreEl.innerText = hScore
}

//GUEST FUNCTIONS 
function p1Guest() {
    gScore += 1
    gScoreEl.innerText = gScore
}

function p2Guest() {
    gScore += 2
    gScoreEl.innerText = gScore
}

function p3Guest() {
    gScore += 3
    gScoreEl.innerText = gScore
}

function resetGame() {
    gScore = 0
    gScoreEl.innerText = gScore

    hScore = 0
    hScoreEl.innerText = hScore
}


