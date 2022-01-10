const button = document.querySelector("#button");
const bill = document.querySelector("#bill");
const cash = document.querySelector("#cash");
const table = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-btn");
const divSec = document.querySelector(".div-sec");
const secTwo = document.querySelector(".sec2");


let clickHandler = () => {
    
    let userBill = Number(bill.value);
    let userCash = Number(cash.value);
    let noteNo = 0;
   
    if (userBill>0) {
        if (userCash>=userBill) {
            const notes = [2000, 500, 100, 20, 10, 5, 1];
            let change = userCash-userBill;
            secTwo.style.visibility = "visible";
            for (i=0; i<7; i++){

                noteNo= Math.trunc(change/notes[i]);
                change = change%notes[i];
                table[i].innerText = noteNo;
            }
        }
        else {
            alert("Cash given should be greater than Bill amount")
        }
    }
    else {
        alert("Invalid bill amount");
    }
}


let nextSection = () => {
    
    let userBill = Number(bill.value);

    if (userBill>0) {
        divSec.style.visibility = "visible";
    }
    else {
        alert("Invalid bill amount");
    }
    
}

nextButton.addEventListener("click", nextSection);
button.addEventListener("click", clickHandler);

