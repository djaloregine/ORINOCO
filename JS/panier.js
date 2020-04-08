// attention à un moment il faut vérifier que l'ours soit dans la base de données pour être vendu ? 
// il faut que je ramène des données d'afficher JS (get ?)
// est ce mon serveur qui me sert de stock ? 


// obliger la personne à donner son feu vert dans un laps de temps réel : 
/* window.setTimeOut(function() { if(paiement panier n'est pas fait alerter le client)}, équivalent 5min) */


//j'ai une lignePanier qui a été envoyée, je dois la récupérer et la déposer dans le tableau 



// si le panier existe déjà


if (sessionStorage.panier) {

    console.log(JSON.parse(sessionStorage.panier));

    let panier = sessionStorage.getItem("panier");
    panier = JSON.parse(panier);
    console.log(panier);


    for (let i = 0; i < panier.length; i++) {
        let lignePanier = panier[i];
        console.log(lignePanier);

        let codeId = lignePanier.id;
        console.log(codeId);
        let quantiteLigne = lignePanier.quantite;
        let prixLigne = lignePanier.prix;
        let couleurLigne = lignePanier.couleurSelectionnee;
        let prixLignePanier = lignePanier.prixLigne;


        tdId = document.createElement("td");
        tdId.id = "identifiantLigne";
        tdId.textContent = codeId;

        tdQuantite = document.createElement("td");
        tdQuantite.textContent = quantiteLigne;
        tdQuantite.id = "quantiteLigne";

        tdPrix = document.createElement("td");
        tdPrix.textContent = prixLigne;
        tdPrix.id = "prixLigne";

        tdCouleur = document.createElement("td");
        tdCouleur.textContent = couleurLigne;
        tdCouleur.id = "couleurLigne";

        tdPrixLignePanier = document.createElement("td");
        tdPrixLignePanier.textContent = prixLignePanier;
        tdPrixLignePanier.id = "prixLignePanier"

        tdSuppression = document.createElement("td");
        tdSuppression.id = "celluleSupression";
        const textSupression = "Supprimez la ligne"
        tdSuppression.textContent = textSupression;


        buttonSuppression = document.createElement("button");
        buttonSuppression.id = "suppression";
        buttonSuppression.type = "submit";

        trLigneTableau = document.createElement("tr");
        trLigneTableau.id = "ligneTableau"

        affichageLignePanier = document.getElementById("tableau__partie__ligne");
        trLigneTableau.appendChild(tdId);
        trLigneTableau.appendChild(tdQuantite);
        trLigneTableau.appendChild(tdPrix);
        trLigneTableau.appendChild(tdCouleur);
        trLigneTableau.appendChild(tdPrixLignePanier);
        trLigneTableau.appendChild(tdSuppression);
        tdSuppression.appendChild(buttonSuppression);
        affichageLignePanier.appendChild(trLigneTableau);

    }


    tdCellulePrixPanier = document.createElement("label");
    tdCellulePrixPanier.classList = "prix__total";

    affichageCellule = document.getElementById("prix__total");
    affichageCellule.appendChild(tdCellulePrixPanier);

    let panierPrixTotal = [];
    panierPrixTotal.push(prixLignePanier);

    for (let i = 0; i < prixLignePanier; i++) {
        let sommePrixPanier = 0;
        sommePrixPanier = sommePrixPanier + panierPrixTotal[i]
        tdCellulePrixPanier.textContent = sommePrixPanier;

    }

} else {
    console.log("erreur")

}


document.getElementById("buttonSubmitPanierTotal").addEventListener("click", (e) => {

    if (sommePrixPanier === 0) {
        e.preventDefault()
    } else {
        if (sessionStorage.panier) {
            let panier = sessionStorage.setItem("panier");
            panier = JSON.stringify(panier);

        } else {
            console.log("erreur");
        }
    }
})


let contact = {

    nom: document.getElementById("lastName").value,
    prenom: document.getElementById("lastName").value,
    adresse: document.getElementById("adress").value,
    ville: document.getElementById("town").value,
    courriel: document.getElementById("mail").value
};

if (localStorage.contactPanier) {
    let contactPanier = JSON.parse(localStorage.contactPanier);
    contactPanier.push(contact);
    localStorage.setItem("contactPanier", JSON.stringify(contactPanier));

} else {
    localStorage.setItem("contactPanier", JSON.stringify([contact]));
}
console.log(contact);

/* parse de JSON vers JS, stringify de JS versJSON */