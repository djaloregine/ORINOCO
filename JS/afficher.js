let nameNounours = document.getElementsByTagName("pOurs");
/* slice(-1) extrait le split précédent et slice [0] garde le premier élement du tableau */

const id = window.location.href.split("/").slice(-1)[0].split("?").slice(-1)[0].split("=").slice(-1)[0];

fetch("http://localhost:3000/api/teddies/" + id)
    .then(response => response.json().then(dataAffichage => {
        if (response.ok) {
            console.log(dataAffichage);

            let nameNounours = dataAffichage.name;
            let imgNounours = dataAffichage.imageUrl;
            let priceNounours = dataAffichage.price;
            let descriptionNounours = dataAffichage.description;

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
            let prixTotalLigne = document.getElementById("prixTotalLigne");
            prixTotalLigne.value = priceNounours;

            document.getElementById("quantite").addEventListener("input", (e) => {
                prixTotalLigne.value = e.target.value * priceNounours;
            })

            /* sauvegarder set, accéder get. Web storage n'accepte que du JSON */

            document.getElementById("ajout").addEventListener("click", () => {
                let lignePanier = {
                    id,
                    prix: document.getElementById("prixTotalLigne").value,
                    quantite: document.getElementById("quantite").value,
                    couleurSelectionnee: couleurSelectionnee(),
                }
                // si le panier n'existe pas encore
                if (localStorage.panier) {
                    let panier = JSON.parse(localStorage.panier);
                    panier.push(lignePanier);
                    localStorage.setItem("panier", JSON.stringify(panier));
                    // si le panier existe déjà
                } else {
                    localStorage.setItem("panier", JSON.stringify([lignePanier]));

                }
                console.log(JSON.parse(localStorage.panier));

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
            divCouleurRadio.checked = "true";
        }

        divCouleurLabel = document.createElement("label");
        divCouleurLabel.textContent = couleurNounours[i];
        divCouleur.appendChild(divCouleurRadio);
        divCouleur.appendChild(divCouleurLabel);
    }

}

/* https://www.journaldunet.fr/web-tech/developpement/1202681-comment-recuperer-la-valeur-d-un-bouton-radio/*/

const couleurSelectionnee = () => {
    let radios = document.getElementsByName('peluche');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            return (radios[i].value);

        }
    }
}




// https://devdocs.io/dom/fetch_api/using_fetch

//   localStorage.setItem("panier", {}),