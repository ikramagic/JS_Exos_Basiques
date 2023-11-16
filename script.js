import { valdHello } from './script_1.js'; 
import { youHello } from './script_1_bis.js';
import { factorial } from './script_2.js';

//récupère les fonctions depuis script_x.js

const userInput = prompt("Choisis le numéro du script que tu veux tester :"); //comme gets.chomp en Ruby

const scriptNumber = parseInt(userInput); // comme to_i en Ruby

switch (scriptNumber) {
    case 1:
      console.log("Execution du script 1 : Bonjour monde (simple) & Bonjour monde (avec prénom).");
        valdHello();
        youHello();
      break;
    case 2:
      console.log("Execution du script 2 : Calcul de factorielle.");
        factorial();
      break;
    default:
        console.log("Oh, oh, le script choisi n'existe pas !");
        break;
    }