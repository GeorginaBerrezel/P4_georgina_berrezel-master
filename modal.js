function openModalForm() {
  console.log('jouvre la modale');
  document.getElementById('modalForm').style.display = "block";
}

// fonction qui ferme ferme la modale par la croix
function closeModalBtn() {
  console.log('CROIX');
  document.getElementById('modalForm').style.display = "none";
}

// ecrire la fonction qui ferme la modale de remerciement du form

function closeModalForm() {
  console.log('je ferme la modale');
  document.getElementById('thanksModal').style.display = "none";
}

function submitForm() {
  event.preventDefault();
  // 1 pour le champ firstname on verifie si le nombre de caractères rentré est supréreieur à 2 
  if (document.getElementById("first").value.length < 2) {
    console.log('Pas assez de lettre PRENOM');
    document.getElementById("errorfirstname").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    document.getElementById("first").style.border = "2px solid #e54858";
    firstNameValid = false;
  } else {
    console.log('BRAVO assez de lettre PRENOM');
    document.getElementById("first").style.border = "2px solid green";
    document.getElementById("errorfirstname").innerHTML = "";
    firstNameValid = true;
  }
  // 2 pour le champ lastname on verifie si le nombre de caractères rentré est supréreieur à 2 
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
  if (document.getElementById("last").value.length < 2) {
    console.log("je n'ai pas assez de caracteres");
    document.getElementById("errorlastname").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    document.getElementById("last").style.border = "2px solid #e54858";
    lastNameValid = false;
  } else {
    console.log("j'ai assez de caracteres");
    document.getElementById("last").style.border = "2px solid green";
    document.getElementById("errorlastname").innerHTML = "";
    lastNameValid = true;
  }

  // 3 POUR LE CHAMP EMAIL
  if (document.getElementById("email").value.length < 2) {
    document.getElementById("errorEmail").innerHTML = "L'adresse email saisie est incorrecte.";
    document.getElementById("email").style.border = "2px solid #e54858";
    emailValid = false;
  } else {
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("errorEmail").innerHTML = "";
    emailValid = true;
  }

  // 4 POUR LE CHAMP BIRTHDAY DATE
  if (document.getElementById("birthdate").value.length < 6) {
    document.getElementById("errorBirthdate").innerHTML = "Veuillez précisez votre date de naissance dans ce champ.";
    document.getElementById("birthdate").style.border = "2px solid #e54858";
    birthDateValid = false;
  } else {
    document.getElementById("birthdate").style.border = "2px solid green";
    document.getElementById("errorBirthdate").innerHTML = "";
    birthdayDateValid = true;
  }

  // 5 POUR LE CHAMP TOURNOIE
  if (document.getElementById("quantity").value.length < 1) {
    document.getElementById("errorQuantityTournament").innerHTML = "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.";
    document.getElementById("quantity").style.border = "2px solid #e54858";
    quantityTournamentValid = false;
  } else {
    document.getElementById("quantity").style.border = "2px solid green";
    document.getElementById("errorQuantityTournament").innerHTML = "";
    quantityTournamentValid = true;
  }

  // 6 POUR LE CHAMP QUEL VILLE
  if (document.getElementById('location1').checked || document.getElementById('location2').checked || document.getElementById('location3').checked || document.getElementById('location4').checked || document.getElementById('location5').checked || document.getElementById('location6').checked) {
    console.log('coché');
    document.getElementById("errorWichTown").innerHTML = "";
    wichTownValid = true;
  } else {
    console.log('pas coché');
    document.getElementById("errorWichTown").innerHTML = "Veuillez sélectionner au moins un choix de ville.";
    wichTownValid = false;
  }

  // 7 POUR LES CONDITIONS D'UTILISATIONS
  if (document.getElementById('checkbox1').checked) {
    console.log('Les conditions d utilisation SONT COCHE');
    document.getElementById("errorConditionUser").innerHTML = "";
    conditionUserValid = true;
  } else {
    console.log('ATTENTION ! Les conditions d utilisation NE SONT COCHE');
    document.getElementById("errorConditionUser").innerHTML = "Veuillez acceptez les conditions d'utilisation.";
    conditionUserValid = false;
  }

  // 12 on vérifie si chaque champs est valide 
  if (firstNameValid === true
     && lastNameValid === true 
     && emailValid === true 
     && birthdayDateValid === true 
     && quantityTournamentValid === true 
     && wichTownValid === true 
     && conditionUserValid === true) {
    document.getElementById("closeform").style.display = 'block'; // on affiche la croix
    document.getElementById("modalForm").style.display = 'none'; // on cache la modale du formulaire
    document.getElementById("thanksModal").style.display = 'block'; // on affiche la modale de remeciement avec un display block sur l'éléement
    // on vide les champs du formulaire
    document.getElementById('first').value = "";
    document.getElementById('last').value = "";
    document.getElementById('email').value = "";
    document.getElementById('birthdate').value = "";
    document.getElementById('quantity').value = "";
  }
}