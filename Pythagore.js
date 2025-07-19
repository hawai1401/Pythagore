// Paramètres

const paramètres = require("./Paramètres.json");

const unité = paramètres["Unité de mesure"];

const mode = paramètres.Mode.toLocaleLowerCase();

const coteatrouver = paramètres["Coté à trouver"].toLocaleLowerCase();

let cote1 = paramètres["Côté n°1"];
let cote2 = paramètres["Côté n°2"];
let hypotenuse = paramètres.Hypoténuse;

let manquant = 0;

// Vérification des variables

console.group("\x1b[3mVérification des variables...\x1b[0m");

if (!unité) {
  console.log(`\x1b[31mUnité\x1b[0m`);
} else {
  console.log(`\x1b[32mUnité : ${unité}\x1b[0m`);
}

if (!mode) {
  console.log(`\x1b[31mMode\x1b[0m`);
}
if (mode !== "normal" && mode !== "vérification") {
  console.error(`\x1b[1;31mLe mode n'est pas valide !\x1b[0m`);
  process.exit(1);
} else {
  console.log(`\x1b[32mMode : ${mode}\x1b[0m`);
}

if (mode !== "vérification") {
  if (!coteatrouver) {
    console.log(`\x1b[31mCôté à trouver\x1b[0m`);
  }
  if (
    coteatrouver !== "cote1" &&
    coteatrouver !== "cote2" &&
    coteatrouver !== "hypotenuse"
  ) {
    console.error(`\x1b[1;31mLe côté à trouver n'est pas valide !\x1b[0m`);
    process.exit(1);
  } else {
    console.log(`\x1b[32mCôté à trouver : ${coteatrouver}\x1b[0m`);
  }
}
if (mode === "vérification") {
  console.log(
    `\x1b[2;37;9mCôté à trouver\x1b[0m \x1b[2;37m(Mode ${mode})\x1b[0m`
  );
}

if (!cote1) {
  console.log(`\x1b[31mCôte n°1\x1b[0m`);
  manquant++;
} else {
  console.log(`\x1b[32mCôte n°1 : ${cote1}\x1b[0m`);
}

if (!cote2) {
  console.log(`\x1b[31mCôté n°2\x1b[0m`);
  manquant++;
} else {
  console.log(`\x1b[32mCôté n°2 : ${cote2}\x1b[0m`);
}

if (manquant === 2) {
  console.error(
    `\x1b[1;31mLe nombre de côté défini n'est pas suffisant !\x1b[0m`
  );
  process.exit(1);
}

if (!hypotenuse) {
  console.log(`\x1b[31mhypotenuse\x1b[0m`);
  manquant++;
} else {
  console.log(`\x1b[32mhypotenuse : ${hypotenuse}\x1b[0m`);
}

console.groupEnd();

if (manquant === 2) {
  console.error(
    `\x1b[1;31mLe nombre de côté défini n'est pas suffisant !\x1b[0m`
  );
  process.exit(1);
}
if (mode === "vérification" && manquant === 3) {
  console.error(
    `\x1b[1;31mLe nombre de côté défini n'est pas suffisant pour le mode vérification !\x1b[0m`
  );
  process.exit(1);
}

// Application du théorème

function pythagore(cote1, cote2, hypotenuse, mode, coteatrouver, unité) {
  if (mode === "normal") {
    if (coteatrouver === "hypotenuse") {
      const cote3 = Math.sqrt(cote1 ** 2 + cote2 ** 2);
      console.log(`L'hypotenuse mesure \x1b[32m${cote3}\x1b[0m ${unité}.`);
    }
    if (coteatrouver === "cote1") {
      cote1 = Math.sqrt(hypotenuse ** 2 - cote2 ** 2);
      console.log(`Le côté n°1 mesure \x1b[32m${cote1}\x1b[0m ${unité}.`);
    }
    if (coteatrouver === "cote2") {
      cote2 = Math.sqrt(hypotenuse ** 2 - cote1 ** 2);
      console.log(`Le côté n°2 mesure \x1b[32m${cote2}\x1b[0m ${unité}.`);
    }
  }
  if (mode === "vérification") {
    const calcul1 = hypotenuse ** 2;
    const calcul2 = cote1 ** 2 + cote2 ** 2;
    if (calcul1 === calcul2) {
      console.log("\x1b[32mLe triangle est rectangle.\x1b[0m");
    } else {
      console.log("\x1b[31mLe triangle n'est pas rectangle.\x1b[0m");
    }
  }
}

pythagore(cote1, cote2, hypotenuse, mode, coteatrouver, unité);
