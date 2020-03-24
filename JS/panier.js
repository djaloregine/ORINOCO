

class Panier {
    constructor() {
        this.numeroClient = 0;
        this.addition = 0;

    }
    finalisationPanier(client) {
        ++this.numeroClient;
        client.panier.forEach(codeBarre => {
            this.addition += codeBarre.prix;
            client.enleverPanier(codeBarre);
            stock.stock[codeBarre.nomArticle].quantite--;
        });
    }

    destocker() {
        ;
    }
}*/