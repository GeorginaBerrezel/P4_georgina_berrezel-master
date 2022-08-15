/* 
1ere semaine

on verifie que chaque champ texte à une valeur valide 

2eme semaine

*/

function openModalForm() {
  document.getElementById('modalForm').style.display = "block";
}

// fonction qui ferme ferme la modale par la croix
function closeForm() {
  document.getElementsByClassName ('bground').style.display = "none";
}


// ecrire la fonction qui ferme la modale de remerciement du form

function closeModalForm() {
  document.getElementById('thanksModal').style.display = "none";
}

function submitForm() {
  event.preventDefault();
  // 1 pour le champ firstname on verifie si le nombre de caractères rentré est supréreieur à 2 
  if (document.getElementById("first").value.length < 2) {
    document.getElementById("errorfirstname").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    document.getElementById("first").style.border = "2px solid #e54858";
    firstNameValid = false;
  } else {
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
    console.log ("je n'ai pas assez de caracteres");
    document.getElementById("errorlastname").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    document.getElementById("last").style.border = "2px solid #e54858";
    lastNameValid = false;
  } else {
    console.log ("j'ai assez de caracteres");
    document.getElementById("last").style.border = "2px solid green";
    document.getElementById("errorlastname").innerHTML = "";
    lastNameValid = true;
  }

  /* 3 POUR LE CHAMP EMAIL
Si le nombre de caractères entré dans le champs qui a pour id "email" est inferieur à 2 alors {
  j'affiche le message d'erreur : L'adresse email saisie est incorrecte.;
  je color le bord en rouge;
  je met dans la variable emailValid : false;
} sinon {
  je color le bord en vert;
  je met dans la variable emailValid la valeur : true;
}
  */
 
 if (document.getElementById("email").value.length < 2) {
   document.getElementById("errorEmail").innerHTML = "L'adresse email saisie est incorrecte.";
   document.getElementById("email").style.border = "2px solid #e54858";
   emailValid = false;
 } else {
   document.getElementById("email").style.border = "2px solid green";
   document.getElementById("errorEmail").innerHTML = "";
   emailValid = true;
 }

   /* 4 POUR LE CHAMP BIRTHDAY DATE
Si le champ input qui a pour id "email" est vide alors {
  j'affiche le message d'erreur : Veuillez précisez votre date de naissance dans ce champ.;
  je color le bord en rouge;
  je met dans la variable birthDateValid : false;
} sinon {
  je color le bord en vert;
  je met dans la variable birthDateValid la valeur : true;
}
  */
 /*
if (document.getElementById("birthdate").value = "") {
  document.getElementById("errorBirthdate").innerHTML = "Veuillez précisez votre date de naissance dans ce champ.";
  document.getElementById("birthdate").style.border = "2px solid #e54858";
  birthDateValid = false;
} else {
  document.getElementById("birthdate").style.border = "2px solid green";
  document.getElementById("errorBirthdate").innerHTML = "";
  birthdayDateValid = true;
}

   /* 5 POUR LE CHAMP TOURNOIE
Si le champ input qui a pour id "quantity" ne contient pas de valeur alors {
  j'affiche le message d'erreur : Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.;
  je color le bord en rouge;
  je met dans la variable quantityValid : false;
} sinon {
  je color le bord en vert;
  je met dans la variable quantityValid la valeur : true;
}
  */
 /*
 if (document.getElementById("quantity").value.lenght < 1) {
   document.getElementById("errorQuantityTournament").innerHTML = "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.";
   document.getElementById("quantity").style.border = "2px solid #e54858";
   quantityTournamentValid = false;
 } else {
   document.getElementById("quantity").style.border = "2px solid green";
   document.getElementById("errorQuantityTournament").innerHTML = "";
   quantityTournamentValid = true;
 }

    /* 6 POUR LE CHAMP QUEL VILLE
Si le champ input qui a pour Selecteur "'input[name="location"]'" n'est pas coché alors {
  j'affiche le message d'erreur : Veuillez sélectionner au moins un choix de ville.;
  je color le bord en rouge;
  je met dans la variable quantityTournamentValid : false;
} sinon {
  je color le bord en vert;
  je met dans la variable quantityTournamentValid la valeur : true;
}
  */
 /*
if (document.querySelectorAll ('input[name="location"]')) {
  document.getElementById("errorWichTown").innerHTML = "Veuillez sélectionner au moins un choix de ville.";
  document.getElementsByClassName ('.checkbox-icon').style.border = "2px solid #e54858";
  wichTownValid = false;
} else {
  document.getElementsByClassName ('.checkbox-icon').style.border = "2px solid blue";
  document.getElementById("errorWichTown").innerHTML = "";
  wichTownValid = true;
}
*/
if (document.getElementById ('location1').checked || document.getElementById ('location2').checked) {
  console.log ('coché');
} else {
  console.log ('pas coché');
}

    /* 6 POUR LE CHAMP QUEL VILLE
Si le champ input qui a pour Selecteur "'input[name="location"]'" n'est pas coché alors {
  j'affiche le message d'erreur : Veuillez sélectionner au moins un choix de ville.;
  je color le bord en rouge;
  je met dans la variable quantityTournamentValid : false;
} sinon {
  je color le bord en vert;
  je met dans la variable quantityTournamentValid la valeur : true;
}
  */


  // 12 on vérifie si chaque champs est valide 
  if (firstNameValid === true && lastNameValid === true) {
    // on cache la modale du formulaire
    document.getElementById("modalForm").style.display = 'none';

    //MON ELEMENT QUI A POUR ID - on affiche la modale de remeciement avec un display block sur l'éléement
    document.getElementById("thanksModal").style.display = 'block';

    // on vide les champs du formulaire
    document.getElementById('first').value = "";
    document.getElementById('last').value = "";
    /*
    document.getElementById('email').value = "";
    document.getElementById('birthdate').value = "";
    document.getElementById('quantity').value = "";
    */
  }


}