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

            divCouleur = document.createElement("div");
            divCouleur.id = "couleurOurs";
            divCouleur.textContent = couleurNounours;

            affichage = document.getElementById("list__produits__affichage");
            affichageNounours.appendChild(pNounours);
            affichageNounours.appendChild(imgNounours);
            affichageNounours.appendChild(divPrix);
            affichageNounours.appendChild(divDescript);
            affichageNounours.appendChild(divCouleur);
            affichage.appendChild(affichageNounours);




        } else {
            console.error("retour du serveur : ", response.status);
        }


    }))


const choix = (number) => {

    let presenterQuantite = document.createElement("buton");
    presenterQuantite.classList = "compteur";
    presenterQuantite.textContent = "Combien souhaitez vous d'ours en peluche ? "
    compteur = document.getElementById("compteur").appendChild(presenterQuantite);

}


const presenterCouleur = (couleurNounours) => {
    for (let i = 0; i < couleurNounours.length; i++) {

        affichageCouleur = document.getElementById("couleursOurs");
        divCouleurRadio = document.createElement("input");
        divCouleurRadio.type = "radio";
        divCouleurRadio.value = couleurNounours[i];

        divCouleurLabel = document.createElement("label");
        divCouleurLabel.textContent = couleurNounours[i];
        divCouleur.appendChild(divCouleurRadio);
        divCouleur.appendChild(divCouleurLabel);
    }
    presenterCouleur(dataAffichage.colors);

}