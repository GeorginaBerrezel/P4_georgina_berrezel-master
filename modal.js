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

  quantityTournamentValid = controlInputQuantity(quantityTournament, errorQuantityTournament,
    "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.",
    "Vous devez saisir seulement des chiffres.");

  wichTownValid = controlInputWichTown(wichTown, errorWichTown,
    "Veuillez sélectionner au moins un choix de ville.");

  conditionUserValid = conditionUserCheck (conditionUser, errorConditionUser,
    "Veuillez acceptez les conditions d'utilisation.");  
  }

/*Nouvelle fonctions*/
// Function FIRST NAME & LAST NAME
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

// Function EMAIL
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

//Function BIRTHDAY DATE
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

//FUNTION QUANTITY TOURNAMENT
function controlInputQuantity(quantityTournament, errorQuantityTournament, textErrorEmpty, quantityTournamentValid) {
  if (quantityTournament.value == "" || quantityTournament.value < 1 ) {
    errorQuantityTournament.innerHTML = textErrorEmpty;
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

//Function WICH TOWN
function controlInputWichTown(wichTownValid, errorWichTown, /*textErrorEmpty*/){
for (let i=0; i < wichTown.length; i++) {
if (wichTown[i].checked) {
    wichTownValid = true;
      /*errorWichTown.innerHTML = textErrorEmpty;*/
      /*wichTown.style.border = "2px solid #e54858";*/
}
 }
 if (wichTownValid===false) {
   errorWichTown.innerHTML = "Veuillez sélectionner au moins un choix de ville.";
 }
}



/*
function controlInputWichTown() {
  wichTown.setAttribute('data-error-visible', 'true');
  for (let i = 0; i < wichTown.length; i++) {
      if (wichTown[i].checked) {
        wichTown.setAttribute('data-error-visible', 'false');
          return true;
      }
  }
  return false;
}
*/


/*
function controlInputWichTown(wichTownValid, errorWichTown,){
    let checkbox=document.getElementsByName("location");
    if (checkbox.checked == null || x == "") {
        wichTown check=false;
        return false;
    }

    if(check != false && !confirm('confirm submit?')){
        e.preventDefault();
        return false;
    }
    return true;
}
*/

// Function USER CHECK
/*
function conditionUserCheck(conditionUserValid, errorConditionUser) {
  if(conditionUser.checked) {
    errorConditionUser.innerHTML = "";
    conditionUserValid = true;
  }else {
    errorConditionUser.innerHTML = "Veuillez acceptez les conditions d'utilisation.";
    conditionUserValid = false;
  }
}
*/

function conditionUserCheck() {
  if (checkbox1.checked === false) {
      checkbox1.parentElement.setAttribute('data-error-visible', 'true');
      return false;
  }
  checkbox1.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}



// FOR ALL FIELDS VALIDATION
function checkAllFields() {
  controlInputNames()
  controlInputEmail()
  birthdayDateCheck()
  controlInputQuantity()
  controlInputWichTown()
  conditionUserCheck()
}

function formValidation() {
  if (controlInputNames() === true &&
  controlInputEmail() === true &&
  birthdayDateCheck() === true &&
  controlInputQuantity() === true &&
  controlInputWichTown() === true &&
  conditionUserCheck() === true ) {
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
}

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);