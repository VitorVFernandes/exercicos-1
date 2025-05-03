const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let A = Number(prompt("Digite o lado A:"));
let B = Number(prompt("Digite o lado B:"));
let C = Number(prompt("Digite o lado C:"));

if (A + B > C && A + C > B && B + C > A) {
    console.log("Os lados formam um triângulo.");
  
    if (A === B && B === C) {
      console.log("Triângulo Equilátero.");
    } else if (A === B || A === C || B === C) {
      console.log("Triângulo Isósceles.");
    } else {
      console.log("Triângulo Escaleno.");
    }
  } else {
    console.log("Os lados não formam um triângulo.");
  }