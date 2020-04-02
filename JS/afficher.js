let nameNounours = document.getElementsByTagName("pOurs");


fetch("http://localhost:3000/api/teddies/" + window.location.href.split("/").slice(-1)[0].split("?").slice(-1)[0].split("=").slice(-1)[0])
    .then(response => response.json().then(dataAffichage => {
        if (response.ok) {
            console.log(dataAffichage);

            let nameNounours = dataAffichage.name;
            let imgNounours = dataAffichage.imageUrl;
            let priceNounours = dataAffichage.price;
            let descriptionNounours = dataAffichage.description;
            let couleurNounours = dataAffichage.colors;
            let idNounours = dataAffichage._id;


            affichageNounours = document.createElement("div");
            affichageNounours.classList = " contenant";

            pNounours = document.createElement('p');
            pNounours.classList = "pOurs"
            pNounours.textContent = nameNounours;

            imgNounours = document.createElement("img");
            imgNounours.classList = "imgOurs";
            imgNounours.src = dataAffichage.imageUrl;

            divPrix = document.createElement("div");
            divPrix.classList = "prixOurs"
            divPrix.textContent = priceNounours + ' euros';

            divDescript = document.createElement("div");
            divDescript.classList = "descriptionOurs";
            divDescript.textContent = descriptionNounours;

            affichage = document.getElementById("list__produits__affichage");
            affichageNounours.appendChild(pNounours);
            affichageNounours.appendChild(imgNounours);
            affichageNounours.appendChild(divPrix);
            affichageNounours.appendChild(divDescript);
            affichage.appendChild(affichageNounours);

            //pour donner le choix de la couleur - voir fonction plus bas
            presenterCouleur(dataAffichage.colors);

            //pour calculer la ligne produit 

            document.getElementById("prix").value = priceNounours;
            let quantite = document.getElementById("quantite");
            quantite.value = 1;
            let prixTotalLigne = document.getElementById("prixTotalLigne")
            prixTotalLigne.value = priceNounours;

            document.getElementById("quantite").addEventListener("input", (e) => {
                prixTotalLigne.value = e.target.value * priceNounours;

                // pour faire coincider une ligne produit et une ligne panier

                let panier = [];

                class lignePanier {
                    constructor(id, couleur, quantite, prixUnitaire, prixTotalLigne) {
                        this.id = idNounours;
                        this.couleur = couleurNounours;
                        this.quantite = quantite;
                        this.prixUnitaire = priceNounours;
                        this.prixTotalLigne = prixTotalLigne;
                    }

                    ajouter = () => {
                        panier.push(lignePanier);
                        console.log(panier);
                    }
                }
                localStorage.setItem("panier", {

                });




            })

        } else {
            console.error("retour du serveur : ", response.status);
        }


    }))


const presenterCouleur = (couleurNounours) => {

    divCouleur = document.getElementById("couleur");
    for (let i = 0; i < couleurNounours.length; i++) {


        affichageCouleur = document.getElementById("couleursOurs");
        divCouleurRadio = document.createElement("input");
        divCouleurRadio.name = "peluche";
        divCouleurRadio.type = "radio";
        divCouleurRadio.value = couleurNounours[i];

        if (i === 0) {
            divCouleurRadio.checked = "true"
        }

        divCouleurLabel = document.createElement("label");
        divCouleurLabel.textContent = couleurNounours[i];
        divCouleur.appendChild(divCouleurRadio);
        divCouleur.appendChild(divCouleurLabel);
    }

}