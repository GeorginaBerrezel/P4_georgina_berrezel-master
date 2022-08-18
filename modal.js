// Définition des constantes
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById('email');
const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const birthdate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const locations = document.querySelectorAll('input[name="location"]'); // tous les input qui ont un nom 'location'
const conditionUser = document.getElementById('checkbox1');

// Définition des constantes d'erreurs
const errorFirstName = document.getElementById("errorfirstname");
const errorLastName = document.getElementById("errorlastname");
const errorEmail = document.getElementById('errorEmail');
const errorBirthdate = document.getElementById("errorBirthdate");
const errorQuantityTournament = document.getElementById("errorQuantityTournament");
const errorLocation = document.getElementById('errorLocation');
const errorConditionUser = document.getElementById("errorConditionUser");


function openModalForm() {
  document.getElementById('modalForm').style.display = "block";
}

function closeModalBtn() {
  document.getElementById('modalForm').style.display = "none"; // fonction qui ferme ferme la modale par la croix
}

function closeModalForm() {
  document.getElementById('thanksModal').style.display = "none"; // fonction qui ferme la modale de remerciement du form
}

function submitForm() {
  event.preventDefault();

  // POUR LE CHAMPS FIRST 
  if (firstName.value.length < 2) {
    errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    firstName.style.border = "2px solid #e54858";
    firstNameValid = false;
  } else {
    firstName.style.border = "2px solid green";
    errorFirstName.innerHTML = "";
    firstNameValid = true;
  }

// 2 POUR LE CHAMPS LAST
  /* 2 POUR LE CHAMP LASTNAME
  si le nombre de caractere entré dans le champ qui a pour id last est inferieur à 2 alors {
      jaffiche le message d erreur : Veuillez entrer 2 caractères
      je colore le bord en rouge
      je met dans la variable firstNameValid la valeur false

  } sinon {
    je colore le bord en vert
    je met dans la variable firstNameValid la valeur true

  }
  */
  if (lastName.value.length < 2) {
    errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    lastName.style.border = "2px solid #e54858";
    lastNameValid = false;
  } else {
    lastName.style.border = "2px solid green";
    errorLastName.innerHTML = "";
    lastNameValid = true;
  }

  // 3 POUR LE CHAMP EMAIL
  /*
  if (document.getElementById("email").value.length < 2) {
    document.getElementById("errorEmail").innerHTML = "L'adresse email saisie est incorrecte.";
    document.getElementById("email").style.border = "2px solid #e54858";
    emailValid = false;
  } else {
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("errorEmail").innerHTML = "";
    emailValid = true;
  }
*/
  if (email.value.length >= 0) {
    if (regExpEmail.test(email.value)) { // je teste le champ qui a pour id 'email' par rapport à ma constant (rexExpEmail) 
      email.style.border = "2px solid green";
      errorEmail.innerHTML = "";
      emailValid = true;
    } else {
      errorEmail.innerHTML = "L'adresse email saisie est incorrecte.";
      email.style.border = "2px solid #e54858";
      emailValid = false;
    }
  }


  // 4 POUR LE CHAMP BIRTHDAY DATE
  console.log(birthdate.value);
  if (birthdate.value.length < 6) {
    errorBirthdate.innerHTML = "Veuillez précisez votre date de naissance dans ce champ.";
    birthdate.style.border = "2px solid #e54858";
    birthDateValid = false;
  } else {
    const now = new Date().getTime(); // CONST la DATE ACTUEL en ms
    const inputDate = new Date(birthdate.value).getTime(); // CONST la date donnée par l'utilisateur (sa date de naissance)
    const result = now - inputDate; // CONST de la date d'aujourdhui (NOW) MOINS la date de mon input donnée par l'utilisateur (INPUTDATE)
    console.log(result);
    if (result < 0) { // Si le resultat est supérieur à zéro, message d'erreur et cela retourne un false
      errorBirthdate.innerHTML = "Veuillez précisez votre date de naissance dans ce champ.";
      birthdate.style.border = "2px solid #e54858";
      birthDateValid = false;
    } else { // SINON je passe dans ma constante birthdate qui a comme élément pour id "birthdate" une couleur verte, je vide les champs...
      birthdate.style.border = "2px solid green";
      errorBirthdate.innerHTML = "";
      birthdayDateValid = true;
    }
  }

  /*
  AUTRE SOLUTION

  const now = new Date().getTime();                     // constante de la date ACTUEL EN MS
  let inputDate;                                        // constante de la date donnée par l'utilisateur

  if (birthdate.value) {                                // SI ma constante birthdate à comme valeur
    inputDate = new Date(birthdate.value).getTime()     // je récupère la date donnée par l'utilisateur (sa date de naissance)
  } else {                                              // SION 
    inputDate = now                                     // elle est egale à la date d'aujourd'hui
  }

  const result = inputDate - now;                       // CONST la date de mon input donnée par l'utilisateur (INPUTDATE) MOINS la date d'aujourdhui (NOW) 

  if (result < 0) {                                     // SI le resultat est supérieur à zéro c'est ok
    birthdate.style.border = "2px solid green";
    errorBirthdate.innerHTML = "";
    birthdayDateValid = true;
  } else {                                              // SINON c'est faux
    errorBirthdate.innerHTML = "Veuillez précisez votre date de naissance dans ce champ.";
    birthdate.style.border = "2px solid #e54858";
    birthDateValid = false;
  }
  */

  // 5 POUR LE CHAMP TOURNOIE
  if (quantityTournament.value.length < 1) {
    errorQuantityTournament.innerHTML = "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.";
    quantityTournament.style.border = "2px solid #e54858";
    quantityTournamentValid = false;
  } else {
    quantityTournament.style.border = "2px solid green";
    errorQuantityTournament.innerHTML = "";
    quantityTournamentValid = true;
  }

  // 6 POUR LE CHAMP QUEL VILLE
  /*
  if (document.getElementById('location1').checked || document.getElementById('location2').checked || document.getElementById('location3').checked || document.getElementById('location4').checked || document.getElementById('location5').checked || document.getElementById('location6').checked) {
    document.getElementById("errorWichTown").innerHTML = "";
    wichTownValid = true;
  } else {
    document.getElementById("errorWichTown").innerHTML = "Veuillez sélectionner au moins un choix de ville.";
    wichTownValid = false;
  }
*/

  for (const location of locations) {// Pour toutes mes locationS on boucle sur chaque element de location
    if (location.checked) {
      errorLocation.innerHTML = "";
      wichTownValid = true;
      break; // l'element est ok on valide et ON SORT DE LA BOUCLE pour ne pas aller au bout
    } else {
      errorLocation.innerHTML = "Veuillez sélectionner au moins un choix de ville.";
      wichTownValid = false;
    }
  }

  // 7 POUR LES CONDITIONS D'UTILISATIONS
  if (conditionUser.checked) {
    errorConditionUser.innerHTML = "";
    conditionUserValid = true;
  } else {
    errorConditionUser.innerHTML = "Veuillez acceptez les conditions d'utilisation.";
    conditionUserValid = false;
  }

  // on vérifie si chaque champs est valide 
  if (firstNameValid === true
    && lastNameValid === true
    && emailValid === true
    && birthdayDateValid === true
    && quantityTournamentValid === true
    && wichTownValid === true
    && conditionUserValid === true) {
    document.getElementById("closeform").style.display = 'block'; // on affiche la croix
    document.getElementById("modalForm").style.display = 'none'; // on cache la modale du formulaire
    document.getElementById("thanksModal").style.display = 'block'; // on affiche la modale de remeciement avec un display block sur l'élément
    // on vide les champs du formulaire
    firstName.value = "";
    firstName.style.border = "none";

    lastName.value = "";
    lastName.style.border = "none";

    email.value = "";
    email.style.border = "none";

    birthdate.value = "";
    birthdate.style.border = "none";

    quantityTournament.value = "";
    quantityTournament.style.border = "none";

    for (const location of locations) {
      location.checked = false;
    }

    conditionUser.checked = "";
  }
}
