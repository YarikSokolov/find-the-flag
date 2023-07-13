// let data=require("./countries")

let score = document.getElementById("MyScore")
let playerScore = 0
let heart = 3
import { countries } from "./countries.js"
let one = document.getElementById("one")
console.log(countries)
let img = document.getElementById("img")
let counter = 0
let rand, buttons, countriesButtons,randCountry
startGame()
function startGame() {
    rand = Math.floor(Math.random() * 255)
    img.src = "svg/" + Object.keys(countries)[rand].toLowerCase() + ".svg"
    buttons = document.getElementsByClassName("buttons")[0].children
    countriesButtons = [
        countries[Object.keys(countries)[Math.floor(Math.random() * 255)]],
        countries[Object.keys(countries)[Math.floor(Math.random() * 255)]],
        countries[Object.keys(countries)[Math.floor(Math.random() * 255)]],
    ]
    randCountry = Math.floor(Math.random() * 4)
    countriesButtons.splice(randCountry, 0, countries[Object.keys(countries)[rand]])
    counter = 0
    for (let button of buttons) {
        button.innerHTML = countriesButtons[counter]
        counter = counter + 1

        button.onclick = function (event) {
            event.preventDefault();
            document.getElementById(1)
            if (button.innerHTML == countries[Object.keys(countries)[rand]]) {
                console.log("yes");
                playerScore = playerScore + 1
                score.innerHTML = "score = " + playerScore
            }
            else {
                console.log("error")
                document.getElementsByClassName("heart")[0].remove()
                heart = heart - 1
                if (heart == 0) {
                    console.log("game over")
                    location.href = "https://www.youtube.com/shorts/uWGM4uRzC5w"
                }
            }
            document.getElementsByTagName("button")[randCountry].style.backgroundColor = "lightgreen"
            setTimeout(function () {
                document.getElementsByTagName("button")[randCountry].style.backgroundColor = "white"
                startGame()
            }, 2500)

        }
    }
}
document.body.onkeydown=function(event) {
    console.log(event.key)
    if (event.key == 1) {
        if(buttons[0].innerHTML == countries[Object.keys(countries)[rand]]){
            playerScore = playerScore + 1
            score.innerHTML = "score = " + playerScore
        }
        else {
            document.getElementsByClassName("heart")[0].remove()
            heart = heart - 1
        }
        
    }
    if (event.key == 2) {
        if(buttons[1].innerHTML == countries[Object.keys(countries)[rand]]){playerScore = playerScore + 1
            score.innerHTML = "score = " + playerScore}
            else {
                document.getElementsByClassName("heart")[0].remove()
                heart = heart - 1
            }
    }
    if (event.key == 3) {
        if(buttons[2].innerHTML == countries[Object.keys(countries)[rand]]){playerScore = playerScore + 1
            score.innerHTML = "score = " + playerScore}
            else {
                document.getElementsByClassName("heart")[0].remove()
                heart = heart - 1
            }
    }
    if (event.key == 4) {
        if(buttons[3].innerHTML == countries[Object.keys(countries)[rand]]){playerScore = playerScore + 1
            score.innerHTML = "score = " + playerScore}
            else {
                document.getElementsByClassName("heart")[0].remove()
                heart = heart - 1
            }
    }
    if (heart == 0) {
        console.log("game over")
        location.href = "https://www.youtube.com/shorts/uWGM4uRzC5w"
    }
    document.getElementsByTagName("button")[randCountry].style.backgroundColor = "lightgreen"
    //   нужно чтобы сделать паузу      
    setTimeout(function () {
                document.getElementsByTagName("button")[randCountry].style.backgroundColor = "white"
                startGame()
            }, 2500)
}