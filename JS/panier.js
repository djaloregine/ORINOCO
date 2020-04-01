// attention à un moment il faut vérifier que l'ours soit dans la base de données pour être vendu ? 











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
}