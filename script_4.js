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
    .map(({ first, last, year }) => `${first} ${last}, en ${year}`)
    .join("\n");

  console.log(
    "1. Voici les entrepreneurs qui ont vu le jour dans les années 70 :"
  );
  console.log(hippiesOfThe70);

  const namesOfHippies = entrepreneurs.map(
    ({ first, last }) => `${first} ${last}`
  );
  console.log(
    "2. Voici une array contenant le prénom et le nom des entrepreneurs :"
  );
  console.log(namesOfHippies);

  const agesOfHippies = entrepreneurs.map(({ first, last, year }) => {
    const age = 2023 - year;
    return `${first} ${last} aurait aujourd'hui ${age} ans.`
  });

  console.log("3. Voici l'âge qu'auraient ces personnalités aujourd'hui :");
  for (const ageString of agesOfHippies) {
    console.log(ageString);
  }

  const orderInHippies = entrepreneurs
    .slice()
    .sort((firstPick, nextPick) => firstPick.last.localeCompare(nextPick.last, 'en'));

  console.log("Voici la liste des entrepreneurs par ordre alphabétique (nom de famille) :");
  console.log(orderInHippies);
}

/*

fonction localeCompare() est utilisée pour comparer les noms de famille (last) des objets a et b. 
En fonction du résultat de cette comparaison, la méthode sort() réorganisera les objets dans le tableau.






  console.log("Voici les entrepreneurs nés dans les années 70 :")
  console.log("Voici une array contenant le prénom et le nom des entrepreneurs :")
  console.log("Voici l'âge qu'auraient ces personnalités aujourd'hui :")
  console.log("Voici la liste des entrepreneurs filtrés par ordre alphabétique :")
  */
