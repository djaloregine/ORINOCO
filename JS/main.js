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


let liNounours = document.querySelector(".list__produits");
liNounours = document.createElement("li");
liNounours.classList = "ours";
let imgNounours = document.createElement("img");


const getTeddies = async function () {
  let response = await fetch("http://localhost:3000/api/teddies");
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    for (let i = 0; i <= 5; i++) {
      let presNounours = data[i].name;
      let imgNounours = data[i].imageUrl;
      imgNounours.src = data[i].imageUrl;
      console.log(presNounours, imgNounours);
    }
    liNounours.innerHTML = presNounours;
    document.querySelector(".ours").appendChild(presNounours);
    liNounours.innerHTML = imgNounours;
    document.querySelector(".ours").appendChild(imgNounours);
  } else {
    console.error("retour du serveur : ", response.status);
  }
}

getTeddies();



document.querySelector(".list__produits").appendChild(liNounours);








// il me faudra aussi en envoyer