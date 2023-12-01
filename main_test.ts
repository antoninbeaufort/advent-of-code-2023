import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { assembleNumberFrom, solve, splitIntoWords } from "./main.ts";

Deno.test("should split by whitespaces", () => {
  // Given
  const puzzleInput = "1abc2 pqr3stu8vwx a1b2c3d4e5f treb7uchet";

  // When
  const result = splitIntoWords(puzzleInput);

  // Then
  assertEquals(result, ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]);
});

const testCases = [["1abc2", 12], ["pqr3stu8vwx", 38], ["a1b2c3d4e5f", 15], [
  "treb7uchet",
  77,
]] as const;
for (const [word, expectedNumber] of testCases) {
  Deno.test("should assemble first and last digit of a word", () => {
    // When
    const result = assembleNumberFrom(word);

    // Then
    assertEquals(result, expectedNumber);
  });
}

Deno.test("should calculate the sum of the calibration values", () => {
  // Given
  const puzzleInput = "1abc2 pqr3stu8vwx a1b2c3d4e5f treb7uchet";

  // When
  const result = solve(puzzleInput);

  // Then
  assertEquals(result, 142);
});
