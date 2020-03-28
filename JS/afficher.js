fetch("http://localhost:3000/api/teddies")
    .then(response => response.json().then(data => {
        if (response.ok) {
            console.log(data);

        }
        fetch("http://localhost:3000/api/teddies?id")
            .then(response => response.json().then(dataAffichage => {
                if (response.ok) {
                    console.log(dataAffichage);

                    for (let i = 0; i < data.length; i++) {
                        let nameNounours = document.getElementsByTagName("pOurs");

                        if (nameNounours.addEventlistener("click", afficher = (data) => {

                                let nameNounours = data[i].name;
                                let imgNounours = data[i].imageUrl;
                                let priceNounours = data[i].price;
                                let descriptionNounours = data[i].description;
                                let couleurNounours = data[i].colors;

                                affichageNounours = document.createElement("div");
                                affichageNounours.classList = " contenant";

                                pNounours = document.createElement('p');
                                pNounours.classList = "pOurs"
                                pNounours.textContent = nameNounours;

                                imgNounours = document.createElement("img");
                                imgNounours.classList = "imgOurs";
                                imgNounours.src = data[i].imageUrl;

                                divPrix = document.createElement("div");
                                divPrix.classList = "prixOurs"
                                divPrix.textContent = priceNounours;

                                divDescript = document.createElement("div");
                                divDescript.classList = "descriptionOurs";
                                divDescript.textContent = descriptionNounours;

                                divCouleur = document.createElement("div");
                                divCouleur.classList = "couleurOurs";
                                divCouleur.textContent = couleurNounours;


                            }))
                            affichage = document.getElementById("list__produits__affichage");
                        affichageNounours.appendChild(pNounours);
                        affichageNounours.appendChild(imgNounours);
                        affichageNounours.appendChild(divPrix);
                        affichageNounours.appendChild(divDescript);
                        affichageNounours.appendChild(divCouleur);
                        affichage.appendChild(affichageNounours);

                    }

                } else {
                    console.error("retour du serveur : ", response.status);
                }
            }))

    }))



/*
            
           
*/