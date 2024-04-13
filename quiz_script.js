

//const question1 = document.getElementById('question1')
//question1.addEventListener.preventDefault()

document.getElementById("submit1").addEventListener("click", question1)

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