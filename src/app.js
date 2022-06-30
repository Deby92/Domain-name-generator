/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "super"];
  let noun = ["jogger", "racoon"];
  let suffix = [".com", ".ca", "nz", ".es", ".cl", ".ar"];

  let pagesNames = () => {
    for (let pronouns of pronoun) {
      for (let adjs of adj) {
        for (let nouns of noun) {
          for (let suffixes of suffix) {
            console.log(pronouns + adjs + nouns + suffixes);
          }
        }
      }
    }
  };
};
pagesNames();
