export function teenageBot() {
  const userInput = prompt(
    "Parle à l'ado comme si tu étais Pascal le grand frère :"
  );

  if (!userInput || userInput.trim() === "") {
    console.log("Quoicoubeh ?");
  } else if (userInput.endsWith("?")) {
    console.log("Way way way way...");
  } else if (userInput === userInput.toUpperCase()) {
    console.log("Oh redescends le 100...");
  } else if (userInput.includes("Fortnite")) {
    console.log("zizouplu c ke d enfan dessu mé azy pr twa jfé un éfor");
  } else {
    console.log(
      "e b vraimen jcompren pa pourkoi vs dite tou sa ke les mot veul dir sur lordinateur com si ki a pa aser dpaysan ki comprene alor ke deja la plu par d jeune i sav mem plu parler c a peine si i sav dir troi mo pask gadji gadjo tchorav niglo etc tou le mond con"
    );
  }
}
