var button = document.querySelector("#button");
var bill = document.querySelector("#bill");
var cash = document.querySelector("#cash");
var table = document.querySelectorAll(".no-of-notes");

button.addEventListener("click", clickHandler);



function clickHandler (){
    var userBill = 0;
    var userCash = 0;
    var userBill = Number(bill.value);
    var userCash = Number(cash.value);
    var noteNo = 0;
   
     
    console.log(userBill, userCash);
    if (userBill>0) {
        if (userCash>=userBill) {
            var notes = [2000, 500, 100, 20, 10, 5, 1];
            var change = userCash-userBill;
    
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

