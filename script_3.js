export function pyramid() {
  console.log(
    "Salut, bienvenue dans ma super pyramide à base de larmes ! Que de bons souvenirs ! Combien d'étages veux-tu mousssaillon ?"
  );

  const rows = parseInt(prompt("Mets le nombre d'étages ici :"));

  for (let row = 0; row < rows; row++) {
    let line = " ".repeat(rows - row - 1) + "#".repeat(row + 1);
    console.log(line);
  }
}