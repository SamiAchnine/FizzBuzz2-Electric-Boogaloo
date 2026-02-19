const numberInput = document.getElementById("numberInput");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result")
let output; 


document.addEventListener("submit", function() {
    event.preventDefault();
    output = fizzBuzz(numberInput.value);
    result.textContent = output;
});


function fizzBuzz(inp) {
    if (inp % 3 === 0 && inp % 5 === 0) {
        return "FizzBuzz";
    }
    else if (inp % 5 === 0){
        return "Buzz";
    }
    else if (inp % 3 === 0){
        return "Fizz";
    }
    else {
        return inp;
    }
}


