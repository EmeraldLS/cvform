// Challenge



function ageInDays(birthYear, currentYear) {
    let result = document.querySelector(".flex-box-result")
    var errResult = document.querySelector(".no-input").remove()
     birthYear = prompt("What year were you given birth?")
     currentYear = 2021

     try{
        if(birthYear < 0 || birthYear > currentYear) {
            var invalid = document.createElement("h1")
            var invalidAnswer = document.createTextNode("Invalid Input Provided")
            invalid.appendChild(invalidAnswer)
            result.appendChild(invalid)
        }
        else{
            
     let age = (currentYear - birthYear) * 365;
     //  result.setAttribute("class", "text-warning")
     //  result.innerHTML = (`You are in ${age} in days`)
     var h1 = document.createElement("h1")
     var textAnswer = document.createTextNode(`You are ${age} days old`)
     h1.setAttribute("id", "ageInDays")
     h1.appendChild(textAnswer)
     result.appendChild(h1)
        }
     }
     catch(err) {
        console.log(err.stack)
     }
}

function reset() {
    try{
        document.querySelector("#ageInDays").remove()
    }
    catch(err){
        var errResult = document.querySelector(".no-input")
        var p = document.createElement("p")
        p.setAttribute("class", "text-danger text-center p-3 m-3 errText")
        var textAnswer = document.createTextNode("No input for Age..... Click the button located on the left")
        p.appendChild(textAnswer) 
    }
   
}

generateCat = () => {
    var imgDiv = document.querySelector(".flex-box-container-2");
    var image = document.createElement('img');
    image.src = "im.jpg";
    imgDiv.appendChild(image);
}