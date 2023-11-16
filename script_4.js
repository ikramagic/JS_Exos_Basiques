const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

export function business() {
  const hippiesOfThe70 = entrepreneurs
    .filter(
      (entrepreneur) => entrepreneur.year >= 1970 && entrepreneur.year < 1980
    )
    //on récupère seuleument les entrepreneurs ayant une année de naissance entre 1970 inclus et 1980 exclu
    .map(({ first, last, year }) => `${first} ${last}, en ${year}`)
    //remets tout ça dans un tableau qui affichera `xxx`
    .join("\n");
    //joint les éléments par un retour à la ligne pour affichage propre

  console.log(
    "1. Voici les entrepreneurs qui ont vu le jour dans les années 70 :"
  );
  console.log(hippiesOfThe70);

  const namesOfHippies = entrepreneurs.map(
    ({ first, last }) => `${first} ${last}`
  );
  //on scanne et récupère uniquement first+last, dans l'array on voudra qu'un élément soit `xxx`
  console.log(
    "2. Voici une array contenant le prénom et le nom des entrepreneurs :"
  );
  console.log(namesOfHippies);

  const agesOfHippies = entrepreneurs.map(({ first, last, year }) => {
    //on récupère le first, last et le year
    const age = 2023 - year;
    //on utilise une fonction anonyme (age) pour l'utiliser comme résultat du calcul
    return `${first} ${last} aurait aujourd'hui ${age} ans.`
    //self-explanatory, on renvoie ça pour chacun des entrepreneurs
  });

  console.log("3. Voici l'âge qu'auraient ces personnalités aujourd'hui :");
  for (const ageString of agesOfHippies) {
    //ageString est simplement une variable qui prend la valeur de chaque élément de la liste agesOfHippies 
    //ageString représente la phrase définie plus tôt pour donner l'âge
    console.log(ageString);
    //demande affichage qui sera donc ligne par ligne
  }

  const orderInHippies = entrepreneurs
    .slice() 
    //copie le tableau pour qu'on se mette à table (copie indépendante de l'original)
    .sort((firstPick, nextPick) => firstPick.last.localeCompare(nextPick.last, 'en'))
    //récupère un élément firstPick et lastPick, compare last du first au last du next selon l'ordre alphabetique anglais (en), réorganise le tableau en fonction de l'ordre
    .map(({ first, last }) => `${last.toUpperCase()} ${first}`)
    //on crée encore un tableau une fois le tri effectué, on récupère first et last, on met last en majuscule
    .join("\n");
    //on lie tout ça avec un saut à la ligne

  console.log("Voici la liste des entrepreneurs par ordre alphabétique (nom de famille) :");
  console.log(orderInHippies);
}