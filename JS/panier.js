// attention à un moment il faut vérifier que l'ours soit dans la base de données pour être vendu ? 
// il faut que je ramène des données d'afficher JS (get ?)
// est ce mon serveur qui me sert de stock ? 


class Panier {
    constructor() {
        this.numeroClient = 0;
        this.prixPanierTotal = 0;
    }
    finalisationPanier(client) {
        ++this.numeroClient;


    };
}