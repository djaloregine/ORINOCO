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


const getTeddies = async function () {
  console.log(document.querySelector(".list__produits"));
  let response = await fetch("http://localhost:3000/api/teddies");
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    // data = nom de mon tableau 
    for (let i = 0; i < data.length; i++) {
      let nameNounours = data[i].name;
      let imgNounours = data[i].imageUrl;


      liNounours = document.createElement("li");
      liNounours.classList = "ours";
      liNounours.appendChild(document.createTextNode(nameNounours));
      document.querySelector(".list__produits").appendChild(liNounours);



      /*
             imgNounours.classList = "imgOurs";
             liNounours.appendChild(document.createElement(imgNounurs));
             document.querySelector(".ours").appendChild(imgNounours); */


    }

  } else {
    console.error("retour du serveur : ", response.status);
  }
}


getTeddies();

spanNounours = document.createElement("div");
span.classList = "img";
document.querySelectorAll(nameNounours).appendChil(spanNounours);





// il me faudra aussi en envoyer