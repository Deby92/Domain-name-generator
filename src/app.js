/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomain();
  });
  //write your code here
  document.querySelector("#domain").innerHTML = generateDomain();
  console.log("hello World");
};

const generateDomain = () => {

  var pronoun = ["the", "our", "your", "her"];
  var adj = ["great", "big", "sweet", "hot", "ligth", "dirty"];
  var noun = ["jogger", "racoon", "puppy", "chair", "camera", "fly", "popcorn"];
  let suffix = [".com", ".ca", "nz", ".es", ".cl", ".ar"];

  generateDomain[0]
    for(let i = 0; i < generateDomain.length; i++){
      console.log(generateDomain[i]); ["the", "our", "your", "her"];
      for
    }


/*   var pronoun = ["the", "our", "your", "her"];
  var adj = ["great", "big", "sweet", "hot", "ligth", "dirty"];
  var noun = ["jogger", "racoon", "puppy", "chair", "camera", "fly", "popcorn"];
  let suffix = [".com", ".ca", "nz", ".es", ".cl", ".ar"];

  let domain = (pronoun, adj, noun) => {
    for (var p = 0; i < pronoun.length; p++) {
      for (var a = 0; i < adj.length; a++) {
        for (var n = 0; i < noun.length; n++)
          for (x = 0; i < suffix.length; x++) {
            console.log(pronoun[p] + adj[a] + noun[n] + suffix[x]);
          }
      }
    }
  };
};
domain(pronoun, adj, noun); */