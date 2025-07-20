// Paramètres

let unite = "mètres";

const consol = document.querySelector("#console");
const btn = document.querySelector("#Calculer");

function getValue(e) {
  e.preventDefault();

  // Initialisation

  let manquant = 0;

  let answer = "<h3>Réponse</h3>";

  document.querySelector(`#cote1`).style.background = "black";
  document.querySelector(`#cote2`).style.background = "black";
  document.querySelector(`#hypotenuse`).style.background = "black";
  document.querySelector("#trait1").textContent = "";
  document.querySelector("#trait2").textContent = "";
  document.querySelector("#trait3").textContent = "";

  // Récupération des valeurs

  const mode = document.querySelector("#mode").value;
  if (!mode) {
    answer += `<br><p class="critical-error">Le mode n'est pas valide !</p>`;
    consol.innerHTML = answer;
    process.exit(1);
  }

  const coteatrouver = document.querySelector("#tofind").value;
  if (mode === "normal" && !coteatrouver) {
    answer += `<br><p class="critical-error">Veuillez définir un côté à trouver !</p>`;
    consol.innerHTML = answer;
    process.exit(1);
  }
  document.querySelector(`#${coteatrouver}`).style.background = "red";

  let cote1 = document.querySelector("#first").value;
  cote1 || manquant++;
  if (coteatrouver !== "cote1" || mode === "vérification") {
    document.querySelector("#trait1").textContent = `${cote1} ${unite}`;
  }

  let cote2 = document.querySelector("#second").value;
  cote2 || manquant++;
  if (coteatrouver !== "cote2" || mode === "vérification") {
    document.querySelector("#trait2").textContent = `${cote2} ${unite}`;
  }

  let hypotenuse = document.querySelector("#third").value;
  hypotenuse || manquant++;
  if (coteatrouver !== "hypotenuse" || mode === "vérification") {
    document.querySelector("#trait3").textContent = `${hypotenuse} ${unite}`;
  }

  if (manquant > 1) {
    answer += `<br><p class="critical-error">Le nombre de côté défini n'est pas suffisant !</p>`;
    consol.innerHTML = answer;
    process.exit(1);
  }

  // Application du théorème & Réponse

  consol.innerHTML =
    answer +
    '<br><br><br><p class="normal">> ' +
    pythagore(cote1, cote2, hypotenuse, mode, coteatrouver) +
    "</p>";
}

btn.addEventListener("click", getValue);

function pythagore(cote1, cote2, hypotenuse, mode, coteatrouver) {
  if (mode === "normal") {
    if (coteatrouver === "hypotenuse") {
      return (
        `L'hypoténuse mesure <span>` +
        Math.sqrt(cote1 ** 2 + cote2 ** 2) +
        `</span> ${unite}.`
      );
    }
    if (coteatrouver === "cote2") {
      return (
        `Le côté mesure <span>` +
        Math.sqrt(hypotenuse ** 2 - cote1 ** 2) +
        `</span> ${unite}.`
      );
    }
  }
  if (mode === "vérification") {
    if (hypotenuse ** 2 === cote1 ** 2 + cote2 ** 2) {
      return `Le triangle est rectangle.`;
    } else {
      return `Le triangle n'est pas rectangle.`;
    }
  }
}
