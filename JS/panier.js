// obliger la personne à donner son feu vert dans un laps de temps réel : 
/* window.setTimeOut(function() { if(paiement panier n'est pas fait alerter le client)}, équivalent 5min) */


// les données personnelles
const form = document.querySelector('form');
const messageMerci = document.querySelector('.merci');

var contactOK = false;

validContact = (e) => {

    let formulaireContact = {

        nom: document.getElementById("lastName").value,
        prenom: document.getElementById("firstName").value,
        adresse: document.getElementById("adress").value,
        ville: document.getElementById("town").value,
        email: document.getElementById("mail").value

    };

    localStorage.setItem('mesContactsPersonnels', JSON.stringify(formulaireContact));

    let remerciements = formulaireContact.prenom;
    messageMerci.textContent = "Merci " + remerciements;

    contactOK = true;

    e.preventDefault();
};

document.querySelector(".perso").addEventListener("submit", validContact);


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
        tdPrixLignePanier.id = "prixLignePanier";

        trLigneTableau = document.createElement("tr");
        trLigneTableau.id = "ligneTableau";

        affichageLignePanier = document.getElementById("tableau__partie__ligne");
        trLigneTableau.appendChild(tdId);
        trLigneTableau.appendChild(tdQuantite);
        trLigneTableau.appendChild(tdPrix);
        trLigneTableau.appendChild(tdCouleur);
        trLigneTableau.appendChild(tdPrixLignePanier);

        affichageLignePanier.appendChild(trLigneTableau);

    }


    tdCellulePrixPanier = document.createElement("label");
    tdCellulePrixPanier.classList = "prix__total";

    panier = JSON.parse(sessionStorage.panier)

    let panierPrixTotal = 0;

    for (let i = 0; i < panier.length; i++) {

        panierPrixTotal += parseInt(panier[i].prixLigne);

    }
    tdCellulePrixPanier.innerHTML = panierPrixTotal;
    document.getElementById("prix__total").appendChild(tdCellulePrixPanier)


    document.getElementById("buttonSubmitPanierTotal").addEventListener("click", (e) => {

        console.log(panierPrixTotal === 0, !sessionStorage.panier, !contactOK)
        if (panierPrixTotal === 0 || !sessionStorage.panier || !contactOK) {
            e.preventDefault();
            alert("Avez-vous bien rempli vos données personnelles ?");


        } else {

            fetch("http://localhost:3000/api/teddies/order", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },

                    body: JSON.stringify({
                        contact: JSON.parse(localStorage.getItem('mesContactsPersonnels')),
                        //https://devdocs.io/javascript/global_objects/array/map
                        products: JSON.parse(sessionStorage.getItem('panier')).map(ligne => ligne.id)
                    })
                })
                .then((res) => {


                })
                .catch((error) => {
                    alert("Vérifiez vos données");

                })

        }
    })
} else {
    console.log("erreur")

}


















/* parse de JSON vers JS, stringify de JS versJSON */


/*
//RECAPITULAFIF DE COMMANDE : DEBUT
const orderSummary = () => {
    //récupération de la commande
    let ordered = localStorage.getItem("ordered");
    // format JS
    ordered = JSON.parse(ordered);
    
    const contact = ordered.contact;
    const orderId = ordered.orderId;

    // Message de remerciement
    const thanksMessage = document.querySelector(".thanksMessage");
    thanksMessage.textContent = `Chèr(e) ${contact.lastName} ${contact.firstName}, nous vous remercions pour cette commande et nous espérons qu'elle vous aportera entière satisfaction!`;

    //coordonées de l'utilisateur
    const informationName = ["Prénom", "Nom", "Adresse", "Ville", "Email"];
    //récupération du nom des clé de l'objet contact
    const informationValue = Object.values(contact);

    const contactInformation = document.querySelector(".contactInformation ul");
    //liste des coordonées de l'utilisateur de la commande
    for (let i in informationValue) {
        const informationElm = document.createElement("li");
        
        informationElm.textContent = `${informationName[i]} : ${informationValue[i]}` ;
        
        contactInformation.appendChild(informationElm);
    }
    //affichage du numéro de commande
    const showOrderNumber = document.querySelector(".orderNumber");
    const orderNumber = document.createElement("p");
    
    orderNumber.textContent = orderId;
    orderNumber.style.color = "blue";

    showOrderNumber.appendChild(orderNumber);
}
//RECAPITULAFIF DE COMMANDE : FIN
*/