const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps perdu", id: 237634, rented: 28 },
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
    console.log("Tous les livres ont été empruntés au moins une fois.");
  } else {
    console.log(
      "Il y a un ou plusieurs livres qui n'ont jamais été empruntés."
    );
  }

  const mostRentedBook = books.reduce((prev, current) =>
    prev.rented > current.rented ? prev : current
  );

  const leastRentedBook = books.reduce((prev, current) =>
    prev.rented < current.rented ? prev : current
  );

  console.log("Le livre le plus emprunté est :", mostRentedBook.title);
  console.log("Le livre le moins emprunté est :", leastRentedBook.title);

  const thisBook = books.find(book => book.id === 873495);
  console.log("Le livre avec l'ID 873495 est :", thisBook)

  const censoredBookList = books.filter(book => book.id !== 133712);
  console.log("Liste de livres après la censure de l'histoire de Gatsby :");
  censoredBookList.forEach(book => {
    console.log(`${book.title}`);
  });

  const sortedCensoredBooks = censoredBookList
  .slice()
  .sort((firstPick, nextPick) => firstPick.title.localeCompare(nextPick.title, 'fr'))
  .map(book => `${book.title}`)
  .join("\n");

console.log("Liste de livres post-censure triée par ordre alphabétique :");
console.log(sortedCensoredBooks);
}


  /*.reduce : 
   scanne et vire un par un (jusqu'à n'avoir qu'une seule valeur qu'il gardera)
        selon un critère qui ici est 
        notre if/else : (prev.rented < current.rented)
        ↓                                          ↓
        if prev.rented est inf/sup à current.rented
        on garde prev 
        else 
        on garde current
        end
*/