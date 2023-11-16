export function factorial(n) {
// Fonction pour calculer la factorielle
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Demande à l'utilisateur d'entrer un nombre
let choice = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertit le string en number
choice = parseInt(choice)

// Indique que result sera maintenant le resultat de la fonction factorial appliquée au nombre choice
let result = factorial(choice);

// Affiche le résultat dans la console
console.log(`La factorielle de ${choice} est : ${result}`);
}
