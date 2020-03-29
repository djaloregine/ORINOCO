/*var request = new XMLHttpRequest();

request.onreadystatechange = function () {

  if (request.readyState === 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    console.log(response[3].name);

  }
}

request.open("GET", "http://localhost:3000/api/teddies");
request.send();
*/

/* BON CODE 
axios.get("http://localhost:3000/api/teddies").then(response => {
  console.log(response.data[3].name)
})
*/


fetch("http://localhost:3000/api/teddies")
  .then(response => response.json().then(data => {
    if (response.ok) {
      console.log(data);
      // data = nom de mon tableau 
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