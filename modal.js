// Code de départ
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector("#closeform"); /*croix pour fermer la modal*/
const modalBtnSubmit = document.querySelector('.btn-submit');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}
/*
function controlInput() {
  console.log('controlinput');
}
*/

// FORMULAIRE

// Définition des variables
let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let birthdayDateValid = false;
let quantityTournamentValid = false;
let wichTownValid = false;
let conditionUserValid = false;
let regExpName = /^[A-Za-z\-]{2,}$/;
let regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regExpNumbers = /^[0-9]*$/;


// Définition des constantes
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdayDate = document.querySelector("#birthdate");
const quantityTournament = document.querySelector("#quantity");
const wichTown = document.querySelectorAll('input[name="location"]');
const conditionUser = document.querySelector("#checkbox1");

// Définition des constantes d'erreur 
const errorFirstName = document.querySelector("#errorfirstname");
const errorLastName = document.querySelector("#errorlastname");
const errorEmail = document.querySelector("#errorEmail");
const errorBirthdate = document.querySelector("#errorBirthdate");
const errorQuantityTournament = document.querySelector("#errorQuantityTournament");
const errorWichTown = document.querySelector("#errorWhichTown");
const errorConditionUser = document.querySelector("#errorconditionuser");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction qui permettent de fermer la modale
/*
// launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
*/
modalBtn.forEach((btn) => btn.addEventListener("click", () => modalbg.style.display = "block"));


// Click to leave modal Validation


// Vérification des champs prénom, nom et email
modalBtnSubmit.addEventListener("click", controlForm);
function controlForm(event) {
  event.preventDefault();
  firstNameValid = controlInputNames(firstName, errorFirstName,
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom");

  lastNameValid = controlInputNames(lastName, errorLastName,
    "Veuillez entrer 2 caractères ou plus pour le champ du nom");

  emailValid = controlInputEmail(email, errorEmail, /*regExpEmail,*/
    "L'adresse email saisie est incorrecte.");

  birthdayDateValid = birthdayDateCheck (birthdayDate, errorBirthdate,
    "Veuillez précisez votre date de naissance dans ce champ.");

  quantityTournamentValid = controlInputQuantity(quantityTournament, errorQuantityTournament,/* regExpNumbers,*/ 
    "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.",
    "Vous devez saisir seulement des chiffres.");

  wichTownValid = controlInputWichTown(wichTown, errorWichTown,
    "Veuillez sélectionner au moins un choix de ville.");

  conditionUserValid = conditionUserCheck (conditionUser, errorConditionUser);  

  }

/*Nouvelle fonctions*/
// Fonction de vérification des champs prénom et nom
function controlInputNames(input, inputError, textErrorEmpty) {
  if (input.value.length < 2) {
    inputError.innerHTML = textErrorEmpty;
    input.style.border = "2px solid #e54858";
    return false;
  }else {
    input.style.border = "0px";
    inputError.innerHTML = "";
    return true;
  }
}

// Fonction de vérification du champ email
function controlInputEmail(input, inputError, textErrorEmpty) {
  /*console.log('controlInputEmail');*/
  /*const validEmail = regExpEmail.test(input.value)*/
  if (input.value.length < 2) {
    inputError.innerHTML = textErrorEmpty;
    input.style.border = "2px solid #e54858";
    return false;
  }else {
    input.style.border = "0px";
    inputError.innerHTML = "";
    return true;
  }
}

//function birthdayDatecheck
function birthdayDateCheck(birthdayDate, errorBirthdate, textErrorEmpty) {
  /*console.log(birthdayDate.value);*/
  if (birthdayDate.value == "") {
    errorBirthdate.innerHTML = textErrorEmpty;
   /* console.log('test');*/
    birthdayDate.style.border = "2px solid #e54858";
    birthdayDate = false;
    return false;
  }else {
    birthdayDateValid = true;
    birthdayDate.style.border = "Opx";
    errorBirthdate.innerHTML = "";
    return true;
  }
}

//Function quantité de tournoi
function controlInputQuantity(quantityTournament, errorQuantityTournament, textErrorEmpty, regExpNumbers, quantityTournamentValid) {
  console.log(quantityTournament.value);
  /*const validQuantityTournament = regExpNumbers.test(input.value)*/
  /*console.log('validQuantityTournament');*/
  /*console.log('test');*/
  if (quantityTournament.value == "" || quantityTournament.value < 1 ) {
    errorQuantityTournament.innerHTML = textErrorEmpty;
    console.log('test');
    quantityTournament.style.border = "2px solid #e54858";
    quantityTournament = false;
    return false;
  }else {
    quantityTournamentValid = true;
    quantityTournament.style.border = "0px";
    errorQuantityTournament.innerHTML = "";
    return true;
}
}

//Function champ Radio "Dans quelle ville"
function controlInputWichTown(wichTownValid, errorWichTown, textErrorEmpty) {
  console.log('controlInputWichTown');
  for (let i=0; i < wichTown.length; i++) {
    if (wichTown[i].checked) {
        wichTownValid = true;
        errorWichTown.innerHTML = textErrorEmpty;
        wichTown.style.border = "2px solid #e54858";
    }
  }
    if (wichTownValid===false) {
      errorWichTown.innerHTML = "Veuillez sélectionner au moins un choix de ville.";
    }
  }

// Vérification du checkbox des conditions d'utilisation
function conditionUserCheck(conditionUserValid, errorConditionUser) {
  if(conditionUser.checked) {
    errorConditionUser.innerHTML = "";
    conditionUserValid = true;
  }else {
    errorConditionUser.innerHTML = "Veuillez acceptez les conditions d'utilisation.";
    conditionUserValid = false;
  }
}
