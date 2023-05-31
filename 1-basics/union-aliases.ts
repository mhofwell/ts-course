// custom type alias
type Combineable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combineable,
  input2: Combineable,
  // literal types for resultConversion combined with union type
  resultConversion: ConversionDescriptor
) {
  let result: string | number;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringNumber = combine("30", "26", "as-number");
console.log(combinedStringNumber);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

export default { combine };
