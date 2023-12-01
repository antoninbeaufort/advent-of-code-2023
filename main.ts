export const splitIntoWords = (input: string): string[] => {
  return input.split(/\s/);
};

export const assembleNumberFrom = (word: string): number => {
  const onlyDigits = word.replaceAll(/\D+/g, "");
  if (onlyDigits.length === 0) {
    return 0;
  }

  return Number(`${onlyDigits.at(0)}${onlyDigits.at(-1)}`);
};

export const solve = (input: string): number => {
  const words = splitIntoWords(input);
  const numbersToAddition = words.map(assembleNumberFrom);

  return numbersToAddition.reduce((acc, curr) => acc + curr, 0);
};

const puzzleInput = await Deno.readTextFile("./input.txt");

const result = solve(puzzleInput);
console.log(result);
