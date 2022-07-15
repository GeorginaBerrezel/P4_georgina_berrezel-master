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
const form = document.getElementById('form');

// Définition des constantes d'erreur 
const errorFirstName = document.querySelector("#errorfirstname");
const errorLastName = document.querySelector("#errorlastname");
const errorEmail = document.querySelector("#errorEmail");
const errorBirthdate = document.querySelector("#errorBirthdate");
const errorQuantityTournament = document.querySelector("#errorQuantityTournament");
const errorWichTown = document.querySelector("#errorWichTown");

// vérifier ce selecteur !!!!!!!!!!!!!!!
const errorConditionUser = document.querySelector("#errorConditionUser");

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

  console.log(firstNameValid);

  lastNameValid = controlInputNames(lastName, errorLastName,
    "Veuillez entrer 2 caractères ou plus pour le champ du nom");

  emailValid = controlInputEmail(email, errorEmail, /*regExpEmail,*/
    "L'adresse email saisie est incorrecte.");

  birthdayDateValid = birthdayDateCheck(birthdayDate, errorBirthdate,
    "Veuillez précisez votre date de naissance dans ce champ.");

  quantityTournamentValid = controlInputQuantity(quantityTournament, errorQuantityTournament,
    "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.",
    "Vous devez saisir seulement des chiffres.");

  wichTownValid = controlInputWichTown(wichTown, errorWichTown,
    "Veuillez sélectionner au moins un choix de ville.");

  // vérifeir que errorConditionUser est correctement rempli par le selecteur du haut
  // faire u nconsole log de errorConditionUser  pour voir si il y a une valeur quand on check

  conditionUserValid = conditionUserCheck(conditionUser, errorConditionUser,
    "Veuillez acceptez les conditions d'utilisation.");


  formValidation();
}

/*Nouvelle fonctions*/
// Function FIRST NAME & LAST NAME
function controlInputNames(input, inputError, textErrorEmpty) {
  if (input.value.length < 2) {
    inputError.innerHTML = textErrorEmpty;
    input.style.border = "2px solid #e54858";
    return false;
  } else {
    input.style.border = "2px solid green";
    inputError.innerHTML = "";
    return true;
  }
}

// Function EMAIL
function controlInputEmail(input, inputError, textErrorEmpty) {
  /*console.log('controlInputEmail');*/
  /*const validEmail = regExpEmail.test(input.value)*/
  if (input.value.length < 2) {
    inputError.innerHTML = textErrorEmpty;
    input.style.border = "2px solid #e54858";
    return false;
  } else {
    input.style.border = "2px solid green";
    inputError.innerHTML = "";
    return true;
  }
}

//Function BIRTHDAY DATE
function birthdayDateCheck(birthdayDate, errorBirthdate, textErrorEmpty) {
  console.log(birthdayDate.value);
  if (birthdayDate.value == "") {
    console.log('erreur');
    errorBirthdate.innerHTML = textErrorEmpty;
    /* console.log('test');*/
    birthdayDate.style.border = "2px solid #e54858";
    birthdayDate = false;
    return false;
  } else {
    console.log('erreur');

    birthdayDateValid = true;
    birthdayDate.style.border = "2px solid green";
    errorBirthdate.innerHTML = "";
    return true;
  }
}

//FUNTION QUANTITY TOURNAMENT
function controlInputQuantity(quantityTournament, errorQuantityTournament, textErrorEmpty, quantityTournamentValid) {
  if (quantityTournament.value == "" || quantityTournament.value < 1) {
    errorQuantityTournament.innerHTML = textErrorEmpty;
    quantityTournament.style.border = "2px solid #e54858";
    quantityTournament = false;
    return false;
  } else {
    quantityTournamentValid = true;
    quantityTournament.style.border = "2px solid green";
    errorQuantityTournament.innerHTML = "";
    return true;
  }
}

//Function WICH TOWN
function controlInputWichTown(wichTown, errorWichTown, textErrorEmpty) {
  for (let i = 0; i < wichTown.length; i++) {
    if (wichTown[i].checked) {
      errorWichTown.innerHTML = "";
      return true;
    }
  }
  errorWichTown.innerHTML = textErrorEmpty;
  /* wichTown.style.border = "2px solid #e54858";*/
  return false;
}



// Function USER CHECK

function conditionUserCheck(conditionUser, errorConditionUser) {
  // faire un console log de errorConditionUser quand on check la case ca doit afficher une valeur
  if (conditionUser.checked) {
    errorConditionUser.innerHTML = "";
    return true
  } else {
    errorConditionUser.innerHTML = "Veuillez acceptez les conditions d'utilisation.";
    return false
  }
}

/*
function conditionUserCheck() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  checkbox1.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}*/



// fonction qui verifie si les controles de champs sont ok = true
function formValidation() {
  console.log(firstNameValid);
  console.log(lastNameValid);
  console.log(emailValid);
  console.log(birthdayDateValid);
  console.log(wichTownValid);
  console.log(conditionUserValid);


  if (firstNameValid === true
    && lastNameValid === true
    && emailValid === true
    && birthdayDateValid === true
    && quantityTournamentValid === true
    && wichTownValid === true
    && conditionUserValid === true) {
    // on affiche la modale de remeciement avec un display block sur l'éléement
    console.log(modalSubmit[0].style.display);
    modalSubmit[0].style.display = 'block';
    return true;
  }
  return false;
}



// DOM ELEMENTS SUBMITTED CONFIRMATION
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// ------ SUBMITTED CONFIRMATION ------ //


// DISPLAY MODAL SUBMIT
function displayModalSubmit() {
  modalbg.style.display = 'none';
  modalSubmit[0].style.display = 'block';
}

// CLOSE SUBMIT
function closeSubmit() {
  modalSubmit[0].style.display = 'none';
  first.style.border = 'none';
  last.style.border = 'none';
  email.style.border = 'none';
  birthdate.style.border = 'none';
  quantity.style.border = 'none';
  firstName = '';
  lastName = '';
}

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);

// FOR ALL FIELDS VALIDATION
function forAllFieldsValidation() {
  checkFirstName()
  checkLastName()
  checkEmail()
  checkBirthdate()
  checkTournamentsQuantity()
  checkLocations()
  checkCheckBox()
}

// SEND FORM

function submitForm(e) {
  /*console.log(e);*/
  e.preventDefault();
 /* console.log(formValidation());*/
  if (formValidation() == true) {
    displayModalSubmit();
    firstName.value = ""
    lastName.value = ""
    birthdayDate.value = ""
    quantityTournament.value = ""
    wichTown.value = ""
    conditionUser.value = ""

  } else {
    forAllFieldsValidation();
    document.getElementById("form").reset();

  }
}
/*
function formValidation() {
  document.getElementById("form").reset();
}
*/