/* 
1ere semaine

on verifie que chaque champ texte à une valeur valide 

2eme semaine

*/

function openModalForm() {
  document.getElementById('modalForm').style.display = "block";
}

// ecrire la fonction qui ferme la modale du form


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

  /* 2 pour le champ lastname
  si le nombre de caractere entré dans le champ qui a pour id first lastname est inferieur à 2 alors {
      jaffiche le message d erreur : Veuillez entrer 2 caractères
      je colore le bord en rouge
      je met dans la variable firstNameValid la valeur false

  } sinon {
    je colore le bord en vert
    je met dans la variable firstNameValid la valeur true

  }
  */

  // 12 on vérifie si chaque champs est valide 
  if (firstNameValid === true) {
    // on cache la modale du formulaire
    document.getElementById("modalForm").style.display = 'none';

    //MON ELEMENT QUI A POUR ID - on affiche la modale de remeciement avec un display block sur l'éléement
    document.getElementById("thanksModal").style.display = 'block';

    // on vide les champs du formulaire
    document.getElementById('first').value = "";

  }


}