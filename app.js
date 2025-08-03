let button1 = document.getElementById("buttonyes")

let button2 = document.getElementById("buttonno")

let para1 = document.getElementById("para1")

let para2 = document.getElementById("para2")

let para3 = document.getElementById("para3")



para2.style.display = "none"

para3.style.display = "none"



function functionpara2() {
para2.style.display = "block"

}

function functionpara3() {

para3.style.display = "block"

}

function functionpara4() {

para4.style.display = "block"

}

function functionpara2del() {

para2.style.display = "none"

}

function functionpara3del() {

para3.style.display = "none"
      
}

button1.onclick = function() {para1.remove(), button1.remove(), button2.remove(),

setTimeout(functionpara2, 1000)
setTimeout(functionpara3, 2500)



let question = ["What is the capital of France?", "Which country has the most people?", "What is the longest river in the world?", "In which year did World War II end?",
"Who wrote 'Romeo and Juliet'?", "What is the capital of Italy?", "What color is the sky?", "who was the first ever black slave?", "is India cool?"]


function question1() {

let para4 = document.getElementById("para4")

let ranIndex = Math.floor(Math.random() * question.length)

let randomQuestion = question[ranIndex]

para4.textContent = randomQuestion

}

setTimeout(question1, 3000)


}

