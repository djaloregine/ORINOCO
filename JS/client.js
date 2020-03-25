// est ce que c'est l'ID des produits qui va me servir de code produit ? 
// si oui je fais un get pour le récupérer
// je fais un POST avec le panier du client 
// POST avec API et un numéro de commande et j'écoute la réponse du POST (lettre avec accusé de réception)


class Client {
    constructor(nomClient, prenom) {
        this.panier = [];
        this.nomClient = nomClient;
        this.prenom = prenom;
        this.cagnotte = 0;
    }
    fidele() {
        return `${this.nomClient} avec ${this.prenom} cumule ${visite++}. Sa cagnotte est de ${this.cagnotte}`;
    }
    ajouterPanier() {
        this.panier.push();
    }


}


var visite = 0;