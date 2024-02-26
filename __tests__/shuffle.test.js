const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  const input = [1, 2, 3, 4, 5];
  const output = shuffle(input);

  // check if output is an array
  test("return an array type", () => {
    expect(Array.isArray(output)).toBe(true);
  });

  // check if the length is the same
  test("have the same output length as input length", () => {
    expect(output.length).toBe(input.length);
  });

  test("have all the same values in the input as the output", () => {
    // utilize forEach array method and toContain method to check if each element from the input is in the output vector
    input.forEach((element) => {
      expect(output).toContain(element);
    }); 
  });

  test("check values again, with for...of", () => {
    for (element of input){
      expect(output).toContain(element);
    }
  });
});
