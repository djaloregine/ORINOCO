// est ce que c'est l'ID des produits qui va me servir de code produit ? 
// si oui je fais un get pour le récupérer
// je fais un POST avec le panier du client 


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
    enleverPanier() {
        for (let i = 0; i < this.panier.length; i++) {
            if (this.panier[i].nomArticle === codeBarre.nomArticle) {
                this.panier.splice(i, 1)
                return
            }

        }

    }
}

var visite = 0;