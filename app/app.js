    // higher order function
    function calculateValues(num1, num2, callback) {
      let results = [
        num1 + num2, 
        num1 - num2, 
        num1 * num2, 
        num1 / num2
      ];
      return callback(results);
    }

    // find total and average
    function processResults(results) {
      let total = results.reduce((acc, val) => acc + val, 0);
      let average = total / results.length;
      return { total, average };
    }

    // target elements
    let headings = document.querySelectorAll("h2");
    let paragraphs = document.querySelectorAll("p");
    let inputs = document.querySelectorAll("input");
    let button = document.querySelector("button");

    // static headings
    headings[0].textContent = new Date().toDateString(); // current date
    headings[1].textContent = "Kiersten Foulk";

    // add button listener
    button.addEventListener("click", function () {
      let num1 = parseFloat(inputs[0].value);
      let num2 = parseFloat(inputs[1].value);

      if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter two valid numbers.");
        return;
      }

      let { total, average } = calculateValues(num1, num2, processResults);

      // paragraph output
      paragraphs[1].textContent = `The two numbers are: ${num1} and ${num2}`;
      paragraphs[2].textContent = `The total of all operations is: ${total}`;
      paragraphs[3].textContent = `The average of all operations is: ${average}`;
    });