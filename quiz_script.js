

//const question1 = document.getElementById('question1')
//question1.addEventListener.preventDefault()

document.getElementById("submit1").addEventListener("click", question1)
document.getElementById("submit2").addEventListener("click", question2)
document.getElementById("submit3").addEventListener("click", question3)
document.getElementById("submit4").addEventListener("click", question4)
document.getElementById("submit5").addEventListener("click", question5)
document.getElementById("submit6").addEventListener("click", question6)
document.getElementById("submit7").addEventListener("click", question7)

function question1() {
    event.preventDefault()
    var real_answer = document.getElementById("html")
    const responseElement = document.createElement("p")

    //var c2 = document.getElementById("ruby")
    //c2.checked = true

    if (real_answer.checked == true) {
        var result = `Correct!`
    }   else    {
        var result = `Incorrect...`
    }

    responseElement.innerText = result
    const loc = document.getElementById("one_answer")
    loc.insertAdjacentElement("afterend", responseElement)
}

function question2() {
    event.preventDefault()
    var real_answer = document.getElementById("javascript")
    const responseElement = document.createElement("p")

    if (real_answer.checked == true) {
        var result = `Correct!`
    }   else    {
        var result = `Incorrect...`
    }

    responseElement.innerText = result
    const loc = document.getElementById("two_answer")
    loc.insertAdjacentElement("afterend", responseElement)
}

function question3() {
    event.preventDefault()
    var real_answer = document.getElementById("failtest")
    const responseElement = document.createElement("p")

    if (real_answer.checked == true) {
        var result = `Correct!`
    }   else    {
        var result = `Incorrect...`
    }

    responseElement.innerText = result
    const loc = document.getElementById("three_answer")
    loc.insertAdjacentElement("afterend", responseElement)
}

function question4() {
    event.preventDefault()
    var real_answer = document.getElementById("minimum2")
    const responseElement = document.createElement("p")

    if (real_answer.checked == true) {
        var result = `Correct!`
    }   else    {
        var result = `Incorrect...`
    }

    responseElement.innerText = result
    const loc = document.getElementById("four_answer")
    loc.insertAdjacentElement("afterend", responseElement)
}

function question5() {
    event.preventDefault()
    var real_answer = document.getElementById("jaguar")
    const responseElement = document.createElement("p")

    if (real_answer.checked == true) {
        var result = `Correct!`
    }   else    {
        var result = `Incorrect...`
    }

    responseElement.innerText = result
    const loc = document.getElementById("five_answer")
    loc.insertAdjacentElement("afterend", responseElement)
}

function question6() {
    event.preventDefault()
    var real_answer = document.getElementById("gloga")
    const responseElement = document.createElement("p")

    if (real_answer.checked == true) {
        var result = `Correct!`
    }   else    {
        var result = `Incorrect...`
    }

    responseElement.innerText = result
    const loc = document.getElementById("six_answer")
    loc.insertAdjacentElement("afterend", responseElement)
}

function question7() {
    event.preventDefault()
    var real_answer = document.getElementById("staged")
    const responseElement = document.createElement("p")

    if (real_answer.checked == true) {
        var result = `Correct!`
    }   else    {
        var result = `Incorrect...`
    }

    responseElement.innerText = result
    const loc = document.getElementById("seven_answer")
    loc.insertAdjacentElement("afterend", responseElement)
}