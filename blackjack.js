let FirstP = document.getElementById("firstp")

let Hit = document.getElementById("hit")
let Play = document.getElementById("play")
let Stand = document.getElementById("stand")

let Clearbet = document.getElementById("clearbet")
let ADD5 = document.getElementById("add5")
let ADD10 = document.getElementById("add10")
let ADD20 = document.getElementById("add20")

let BankEl = document.getElementById("bank")
let BetEl = document.getElementById("bet")

let Dealerhandsum = document.getElementById("dealerhandsum")
let Myhandsum = document.getElementById("myhandsum")

let Div2El = document.getElementById("div2")
let Div5El = document.getElementById("div5")

let bet = 0
let bank = 100


let cardvalue = 0

ADD5.addEventListener("click", function () {
    if (bank > 0 && bet < 100) {
        bet += 5
        BetEl.textContent = "BET : " + bet
        BankEl.textContent = "BANK : " + bank
    }
})

ADD10.addEventListener("click", function () {
    if (bank >= 10 && bet < 100) {
        bet += 10
        BetEl.textContent = "BET : " + bet
        BankEl.textContent = "BANK : " + bank
    }
})

ADD20.addEventListener("click", function () {
    if (bank >= 20 && bet < 100) {
        bet += 20
        BetEl.textContent = "BET : " + bet
        BankEl.textContent = "BANK : " + bank
    }
})

Clearbet.addEventListener("click", function () {
    bet = 0
    BetEl.textContent = "BET : " + bet
    BankEl.textContent = "BANK : " + bank
})

Play.addEventListener("click", function () {
    Div5El.innerHTML = ""
    Div2El.innerHTML = ""
    Dealerhandsum.textContent = ""
    Myhandsum.textContent = ""
    Play.textContent = 'PLAY'
    Play.style.width = '80px'

    if (bet === 0) {
        FirstP.textContent = "You must place a bet!"
    } else {
        FirstP.style.opacity = "0"
        Play.style.opacity = "0"
        Hit.style.opacity = "1"
        Stand.style.opacity = "1"

        Playing()
    }
})


function NumberGenerator() {
    let x = Math.floor(Math.random() * 13 + 1)
    return x
}

function ImageGenerator() {

    let x = NumberGenerator()
    let image = ""
    if (x === 1) {
        image = "1.png"
        cardvalue = 1
    } else if (x === 1) {
        image = "1.png"
        cardvalue = 1
    } else if (x === 2) {
        image = "2.png"
        cardvalue = 2
    } else if (x === 3) {
        image = "3.png"
        cardvalue = 3
    } else if (x === 4) {
        image = "4.png"
        cardvalue = 4
    } else if (x === 5) {
        image = "5.png"
        cardvalue = 5
    } else if (x === 6) {
        image = "6.png"
        cardvalue = 6
    } else if (x === 7) {
        image = "7.png"
        cardvalue = 7
    } else if (x === 8) {
        image = "8.png"
        cardvalue = 8
    } else if (x === 9) {
        image = "9.png"
        cardvalue = 9
    } else if (x === 10) {
        image = "10.png"
        cardvalue = 10
    } else if (x === 11) {
        image = "jack.png"
        cardvalue = 11
    } else if (x === 12) {
        image = "queen.png"
        cardvalue = 11
    } else if (x === 13) {
        image = "king.png"
        cardvalue = 11
    } return image
}

console.log(ImageGenerator())
console.log(cardvalue)


function Playing() {
    dealerhand()
    myhand()
    myhand()
}

let Dealerhand = 0

function dealerhand() {
    let x = ImageGenerator()
    if (x === "1.png") {
        Dealerhand += 1
    } else if (x === "2.png") {
        Dealerhand += 2
    } else if (x === "3.png") {
        Dealerhand += 3
    } else if (x === "4.png") {
        Dealerhand += 4
    } else if (x === "5.png") {
        Dealerhand += 5
    } else if (x === "6.png") {
        Dealerhand += 6
    } else if (x === "7.png") {
        Dealerhand += 7
    } else if (x === "8.png") {
        Dealerhand += 8
    } else if (x === "9.png") {
        Dealerhand += 9
    } else {
        Dealerhand += 10
    }

    Dealerhandsum.textContent = "Dealer Hand value: " + Dealerhand
    Div2El.innerHTML += `<img src="${x}">`
}

let Myhand = 0

function myhand() {
    let x = ImageGenerator()
    if (x === "1.png") {
        Myhand += 1
    } else if (x === "2.png") {
        Myhand += 2
    } else if (x === "3.png") {
        Myhand += 3
    } else if (x === "4.png") {
        Myhand += 4
    } else if (x === "5.png") {
        Myhand += 5
    } else if (x === "6.png") {
        Myhand += 6
    } else if (x === "7.png") {
        Myhand += 7
    } else if (x === "8.png") {
        Myhand += 8
    } else if (x === "9.png") {
        Myhand += 9
    } else {
        Myhand += 10
    }

    Myhandsum.textContent = "Your Hand value: " + Myhand
    Div5El.innerHTML += `<img src="${x}">`
}

Hit.addEventListener("click", function () {
    myhand()
    if (Myhand < 21) {
        FirstP.style.opacity = "1"
        FirstP.textContent = "Hmm Hit or Stand ?"
    } else if (Myhand === 21) {
        win()
    } else {
        lose()
    }
})

function win() {
    bank += bet
    FirstP.style.opacity = "1"
    FirstP.textContent = "Congrats ! You Won"

    AnotherMatch()
}

function lose() {
    bank -= bet
    FirstP.style.opacity = "1"
    FirstP.textContent = "Oops ! The Dealer Won"

    AnotherMatch()
}

function AnotherMatch() {
    Hit.style.opacity = "0"
    Stand.style.opacity = "0"
    Play.style.opacity = "1"
    Play.style.width = '140px'
    Play.textContent = "Another Match"
    bet = 0
    BankEl.textContent = "BANK : " + bank
    BetEl.textContent = "BET : " + bet
    Myhand = 0
    Dealerhand = 0
}

Stand.addEventListener("click", function () {

    if (Dealerhand > Myhand) {
        lose()
    } else if (Dealerhand > 21) {
        win()
    } else {
        dealerhand() //first
        if (Dealerhand > 21) {
            win()
        } else if (Dealerhand > Myhand) {
            lose()
        } else {
            dealerhand() //first
            if (Dealerhand > 21) {
                win()
            } else if (Dealerhand > Myhand) {
                lose()
            } else {
                dealerhand() //first
                if (Dealerhand > 21) {
                    win()
                } else if (Dealerhand > Myhand) {
                    lose()
                } else {
                    dealerhand() //first
                    if (Dealerhand > 21) {
                        win()
                    } else if (Dealerhand > Myhand) {
                        lose()
                    } else {
                        dealerhand() //first
                        if (Dealerhand > 21) {
                            win()
                        } else if (Dealerhand > Myhand) {
                            lose()
                        } else {
                            dealerhand() //first
                            if (Dealerhand > 21) {
                                win()
                            } else if (Dealerhand > Myhand) {
                                lose()
                            } else {
                                dealerhand() //first
                                if (Dealerhand > 21) {
                                    win()
                                } else if (Dealerhand > Myhand) {
                                    lose()
                                } else {
                                    dealerhand() //first
                                    if (Dealerhand > 21) {
                                        win()
                                    } else if (Dealerhand > Myhand) {
                                        lose()
                                    } else {
                                        dealerhand() //first
                                        if (Dealerhand > 21) {
                                            win()
                                        } else if (Dealerhand > Myhand) {
                                            lose()
                                        } else {
                                            dealerhand() //first
                                            if (Dealerhand > 21) {
                                                win()
                                            } else if (Dealerhand > Myhand) {
                                                lose()
                                            } else {
                                                dealerhand()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})