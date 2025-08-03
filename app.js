let button1 = document.getElementById("buttonyes")

let button2 = document.getElementById("buttonno")

let para1 = document.getElementById("para1")

let para2 = document.getElementById("para2")

let para3 = document.getElementById("para3")

let para5 = document.getElementById("para5")

let input1 = document.getElementById("input1")

let buttonsubmit = document.getElementById("buttonsubmit")

para2.style.display = "none"

para3.style.display = "none"

input1.style.display = "none"

buttonsubmit.style.display = "none"

function functionpara2() {
para2.style.display = "block"

}

function functionpara3() {

para3.style.display = "block"

}



function functionpara2del() {

para2.style.display = "none"

}

function functionpara3del() {

para3.style.display = "none"
      
}

function functioninput1() {

input1.style.display = "block"
buttonsubmit.style.display = "block"
}



button1.onclick = function() {para1.remove(), button1.remove(), button2.remove(),

setTimeout(functionpara2, 1000)
setTimeout(functionpara3, 2500)



let question = ["What is the capital of France? (hint, it's in France)", 
                "Which country has the most people? (hint, it's in Asia)", 
                "What is the longest river in the world? (hint, it's in Africa)", 
                "In which year did World War II end? (hint, it's in the 40s)",
                "Who wrote 'Romeo and Juliet'? (hint, it's by an english guy)",
                "What is the capital of Italy? (hint, it's in Italy)", 
                "What color is the sky? (hint, it's not black)", 
                "who was the first human? (hint, it was a long time ago)",
                "is India cool? (hint, it is)"]


function question1() {

let para4 = document.getElementById("para4")

let ranIndex = Math.floor(Math.random() * question.length)

let randomQuestion = question[ranIndex]

para4.textContent = randomQuestion

}

setTimeout(question1, 3000)

setTimeout(functioninput1, 3000)

buttonsubmit.onclick = function questionresul1() {

if (randomQuestion = question[0] && input1.value === "Paris" || "paris")
{para5.textContent = "That is correct! YOU WIN"}

else if (randomQuestion = question[1] && input1.value === "India" || "india")
{para5.textContent = "That is correct! YOU WIN"}

else if (randomQuestion = question[2] && input1.value === "Nile" || "The Nile" || "The River Nile" || "nile" || "the nile")
{para5.textContent = "That is correct! YOU WIN"}

else if (randomQuestion = question[3] && input1.value === "1945")
{para5.textContent = "That is correct! YOU WIN"}

else if (randomQuestion = question[4] && input1.value === "William Shakespeare" || "william shakespeare" || "shakespeare")
{para5.textContent = "That is correct! YOU WIN"}

else if (randomQuestion = question[5] && input1.value === "Rome")
{para5.textContent = "That is correct! YOU WIN"}

else if (randomQuestion = question[6] && input1.value === "Blue" || "blue")
{para5.textContent = "That is correct! YOU WIN"}

else if (randomQuestion = question[7] && input1.value === "Adam" || "adam")
{para5.textContent = "That is correct! YOU WIN"}

else if (randomQuestion = question[7] && input1.value === "Yes" || "yes" || "maybe" || "YES")
{para5.textContent = "That is correct! YOU WIN"}

else {para5.textContent = "That is incorrect! YOU LOSE"}
}




}

