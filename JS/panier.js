// obliger la personne à donner son feu vert dans un laps de temps réel : 
/* window.setTimeOut(function() { if(paiement panier n'est pas fait alerter le client)}, équivalent 5min) */


// les données personnelles
const form = document.querySelector('form');
const messageMerci = document.querySelector('.merci');

document.getElementById("btnInput").addEventListener("click", () => {

    let formulaireContact = {

        nom: document.getElementById("lastName").value,
        prenom: document.getElementById("firstName").value,
        adresse: document.getElementById("adress").value,
        ville: document.getElementById("town").value,
        email: document.getElementById("mail").value

    };

    localStorage.setItem('mesContactsPersonnels', JSON.stringify(formulaireContact));

    formulaireVérifier = () => {

        if (localStorage.getItem('mesContactsPersonnels')) {
            let remerciements = localStorage.getItem('mesContactsPersonnels[1]');
            messageMerci.textContent = "Merci" + remerciements;

        }
    };
});




/*



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

    let panierPrixTotal = 0;

    for (let i = 0; i < prixLignePanier.length; i++) {

        panierPrixTotal += parseInt(prixLignePanier[i].innerHTML);

    }
    tdCellulePrixPanier.innerHTML = panierPrixTotal;
    document.getElementById("prix__total").appendChild(tdCellulePrixPanier)


    document.getElementById("buttonSubmitPanierTotal").addEventListener("click", (e) => {

        console.log("panier valide");
        if (panierPrixTotal === 0) {
            e.preventDefault();
            return

        } else {
            if (!sessionStorage.panier) {
                console.log("erreur");
            }
        }


        fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            //body : ce que je vais envoyer au serveur et qui doit être en JSON 
            body: JSON.stringify({
                    // je prends les contacts dans le local strorage qui sont en ? 
                    contact: contact, // un objet ,
                    // je prends les produits dans le session strorage qui sont en ? 
                    products: sessionStorage.getItem('panier')
                })
                .then(response => {
                    console.log(response);
                    //status(201) ou status ==201
                    //json.parse
                    if (response.ok) {
                        // me renvoie ce que j'ai mis dans le body + un order-id qui est celui du client 


                    }
                })
                .catch({})


        })

    })

} else {
    console.log("erreur")

}





*/


















/* parse de JSON vers JS, stringify de JS versJSON */