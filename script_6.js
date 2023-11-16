export function adn() {
  const arn = prompt("Donne moi un ARN à traduire ?");
  const codons = arn.match(/.{1,3}/g);
  const proteins = codons.map((codon) => {
    if (["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"].includes(codon)) {
      return "Sérine";
    } else if (["CCU", "CCC", "CCA", "CCG"].includes(codon)) {
      return "Proline";
    } else if (["UUA", "UUG"].includes(codon)) {
      return "Leucine";
    } else if (["UUU", "UUC"].includes(codon)) {
      return "Phénylalanine";
    } else if (["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"].includes(codon)) {
      return "Arginine";
    } else if (["UAU", "UAC"].includes(codon)) {
      return "Tyrosine";
    } else {
      return "Le codon n'est pas reconnu.";
    }
  });

  console.log(`L'ARN ${arn} matche avec la ou les protéines suivante(s) : ${proteins.join("-")}`);
}