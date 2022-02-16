var bill = document.querySelector("#bill")
var cash = document.querySelector("#cash")
var btn = document.querySelector("#btn")
var noOfNotes = document.querySelectorAll(".no-of-notes")

function calc(diff) {
    var output = [0,0,0,0,0,0,0]
    var notes = [2000,500,100,20,10,5,1]
    for(var i = 0; i < notes.length; i++){
        output[i] = Math.trunc(diff / notes[i])
        diff = diff % notes[i]
    }
    return output
}


btn.addEventListener('click', () => {
    var b = Number(bill.value)
    var c = Number(cash.value)
    if(b > 0){
        if(c >= b){
            var diff = c - b
            var notes = calc(diff)
            for(var i=0; i<notes.length;i++){
                noOfNotes[i].innerText = notes[i]
            }
        }else{
            alert('Error in the cash amount')
        }
    }else{
        alert('Error in the bill amount')
    }
})
