const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

export function biblioNerd() {
  const allRentedAtLeastOnce = books.every((book) => book.rented >= 1);

  if (allRentedAtLeastOnce) {
    console.log("True: tous les livres ont été empruntés au moins une fois.");
  } else {
    console.log(
      "False: il y a un ou plusieurs livres qui n'ont jamais été empruntés."
    );
  }

  const sortedBooks = books.slice().sort((firstPick, nextPick) => nextPick.rented - firstPick.rented);
  //découpe et trie dans l'array du plus grand au plus petit
  const mostRentedBook = sortedBooks[0];
//récupère le premier élément qui sera donc le moins emprunté
}
