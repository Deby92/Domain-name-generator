/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#Random-domain").innerHTML = generateDomain();
  document.getElementById('Generate').addEventListener("click", set.random-button)
  console.log("Hello World");
};

const pronoun = ["The", "Our", "I", "You", "He", "It", "We", "They"];
const adjetive = ["great", "sweet", "hot", "cold", "warm", "dry", "ligth", "clean"];
const noun = ["book", "baloon", "chair", "popcorn", "falafel", "camera", "lady", "library", "puppy", "fly"];
const suffix = [".com", ".co", ".es", ".cl", ".au", ".nz", ".ar", ".hu"];

let generateDomain = () => {
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjetiveIndex = Math.floor(Math.random() * adjetive.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let suffixIndex = Math.floor(Math.random() * suffix.length);
  return (
    pronoun[pronounIndex] +
    " " +
    adjetive[adjetiveIndex] +
    " " +
    noun[nounIndex] +
    " " +
    suffix[suffixIndex] +
    
  );};
domain(pronoun, adjetive, noun, suffix);