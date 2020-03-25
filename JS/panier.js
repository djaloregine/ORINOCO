const getTeddies = async function () {
    console.log(document.querySelector(".list__commercialisation"));
    let response = await fetch("http://localhost:3000/api/teddies");
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        // data = nom de mon tableau 

     







        for (let i = 0; i < data.length; i++) {
            let numNounours = data[i]._id;
            let nameNounours = data[i].name;
            let imgNounours = data[i].imageUrl;
            let prixNounours = data[i].price;
            let descripNounours = data[i].description;
            let couleurNounours = data[i].colors;

            let BouttonCommande = document.querySelector("button");


        }

    } else {
        console.error("retour du serveur : ", response.status);
    }
}


getTeddies();



























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