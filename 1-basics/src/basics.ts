function adding(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const num1 = 5;
const num2 = 12;
const printResult = true;
const phrase = "Result is: ";

adding(num1, num2, printResult, phrase);

export { adding };
