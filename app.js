import { extractEnteredNumberValue } from "./src/parser.js"; 
import { calculateResult } from "./src/math.js"; 
import { generateResultText } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberValues = extractEnteredNumberValue(form);
  const result = calculateResult(numberValues);
  const resultText = generateResultText(result)

  outputResult(resultText)
console.log(111121)
}

form.addEventListener("submit", formSubmitHandler);
