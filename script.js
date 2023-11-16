import { valdHello } from "./script_1.js";
import { youHello } from "./script_1_bis.js";
import { factorial } from "./script_2.js";
import { pyramid } from "./script_3.js";
import { business } from "./script_4.js";
import { biblioNerd } from "./script_5.js";
import { adn } from "./script_6.js";
import { teenageBot } from "./script_7.js";

//récupère les fonctions depuis script_x.js

const userInput = prompt("Choisis le numéro du script que tu veux tester :");

const scriptNumber = parseInt(userInput);

switch (scriptNumber) {
  case 1:
    console.log(
      "Execution du script 1 : Bonjour monde (simple) & Bonjour monde (avec prénom)."
    );
    valdHello();
    youHello();
    break;
  case 2:
    console.log("Execution du script 2 : Calcul de factorielle.");
    factorial();
    break;
  case 3:
    console.log("Execution du script 3 : Pyramide de Mario.");
    pyramid();
    break;
  case 4:
    console.log("Execution du script 4 : American Dream.");
    business();
    break;
  case 5:
    console.log("Execution du script 5 : Biblio Loco.");
    biblioNerd();
    break;
  case 6:
    console.log("Execution du script 6 : ADN de pangolin.");
    adn();
    break;
  case 7:
    console.log("Execution du script 7 : AdoBot After Espress.");
    teenageBot();
    break;
  default:
    console.log("Oh, oh, le script choisi n'existe pas !");
    break;
}
