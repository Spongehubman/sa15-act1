

//const question1 = document.getElementById('question1')
//question1.addEventListener.preventDefault()

document.getElementById("submit1").addEventListener("click", question1)
document.getElementById("submit2").addEventListener("click", question2)
document.getElementById("submit3").addEventListener("click", question3)
document.getElementById("submit4").addEventListener("click", question4)
document.getElementById("submit5").addEventListener("click", question5)

function question1() {
    event.preventDefault()
    var real_answer = document.getElementById("html")
    //var c2 = document.getElementById("ruby")
    //c2.checked = true

    if (real_answer.checked == true) {
        console.log("correct")
    }   else    {
        console.log("incorrect")
    }
}

function question2() {
    event.preventDefault()
    var real_answer = document.getElementById("javascript")

    if (real_answer.checked == true) {
        console.log("correct")
    }   else    {
        console.log("incorrect")
    }
}

function question3() {
    event.preventDefault()
    var real_answer = document.getElementById("failtest")

    if (real_answer.checked == true) {
        console.log("correct")
    }   else    {
        console.log("incorrect")
    }
}

function question4() {
    event.preventDefault()
    var real_answer = document.getElementById("minimum2")

    if (real_answer.checked == true) {
        console.log("correct")
    }   else    {
        console.log("incorrect")
    }
}

function question5() {
    event.preventDefault()
    var real_answer = document.getElementById("jaguar")

    if (real_answer.checked == true) {
        console.log("correct")
    }   else    {
        console.log("incorrect")
    }
}