// attention à un moment il faut vérifier que l'ours soit dans la base de données pour être vendu ? 
// il faut que je ramène des données d'afficher JS (get ?)
// est ce mon serveur qui me sert de stock ? 


// obliger la personne à donner son feu vert dans un laps de temps réel : 
/* window.setTimeOut(function() { if(paiement panier n'est pas fait alerter le client)}, équivalent 5min) */


//j'ai une lignePanier qui a été envoyée, je dois la récupérer et la déposer dans le tableau 



// si le panier existe déjà

if (localStorage.panier) {

    console.log(JSON.parse(localStorage.panier));

    let panier = sessionStorage.getItem("panier");
    panier = JSON.parse(panier);
    console.log(panier);

    for (let i = 0; i < panier.length; i++) {
        let lignePanier = panier[i];
        console.log(lignePanier);
    }


    lignePanier = document.getElementById("tableau");
    lignePanier.id = document.getElementsByClassName("identifiantLigne").innerHTML;



} else {
    console.log("erreur")

}




















class Panier {
    constructor() {
        this.numeroClient = 0;
        this.prixPanierTotal = 0;
    }
    finalisationPanier(client) {
        ++this.numeroClient;


    };
}