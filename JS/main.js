

fetch("http://localhost:3000/api/teddies")
  .then(response => response.json().then(data => {
    if (response.ok) {
      console.log(data);
      
      for (let i = 0; i < data.length; i++) {
        let nameNounours = data[i].name;
        let imgNounours = data[i].imageUrl;


        liNounours = document.createElement("li");
        liNounours.classList = "ours";
        aNounours = document.createElement("a");
        aNounours.href = "HTML/nosProduits.html?id=" + data[i]._id;
        aNounours.classList = "aOurs"
        pNounours = document.createElement('p');
        pNounours.classList = "pOurs"
        pNounours.textContent = nameNounours;

        imgNounours = document.createElement("img");
        imgNounours.classList = "imgOurs";
        imgNounours.src = data[i].imageUrl;

        ulNounours = document.getElementById("list__produits");
        liNounours.appendChild(aNounours);
        aNounours.appendChild(pNounours);
        liNounours.appendChild(imgNounours);
        ulNounours.appendChild(liNounours);
      }

    } else {
      console.error("retour du serveur : ", response.status);
    }
  }))