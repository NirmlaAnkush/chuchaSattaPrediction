
// const input = document.getElementById("input").value;

function showNumber() {
    const input = document.getElementById("input").value ;
    const yourNumber = document.getElementById("yourNumber");
    yourNumber.innerText = "You have chosen: " + input;
    
}

function hiName() {
    const input = document.getElementById("yourName").value ;
    const hiName = document.getElementById("hiName");
    hiName.innerText = "Hi " + input + " welcome to Chucha Satta Prediction.";
}

function dob() {
    const input = document.getElementById("dob").value;
    const yourDob = document.getElementById("yourDob");
    const date = "Your Date Of Birth: " + input;
    yourDob.innerText = date;
}

function getCurrentDateAndTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString();
  }
  
  // Target an HTML element to display the current date and time
  const dateDisplay = document.getElementById("date-container");
  
  // Set the innerHTML of the element to the current date and time returned by the function
  dateDisplay.innerHTML = getCurrentDateAndTime();

function sattaName() {
    const input = document.getElementById("inputSattaName").value ;
    const sattaName = document.getElementById("sattaName");
    sattaName.innerText = "$ " + input + " $";
}


function luckyNumber() {
   
    const h = document.querySelector("#luckyNumber");
    const random = Math.floor(Math.random() * 99)
    h.innerHTML = `₹ The jackpot Number is "${random}"`;
    // return random;
}
// const b = luckyNumber;
// function result() {
// if ( a === b) {
//     document.getElementById("paragraph").innerHTML = "Hurrah! You have Won."
// } else {
//     document.getElementById("paragraph").innerHTML = "Opps! better luck next time"
// }
// }

// function hit() {
//     luckyNumber();
//     result();
// }