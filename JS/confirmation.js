fetch("http://localhost:3000/api/teddies/order")
    .then(response => response.json().then(dataConfirmation => {
        if (response.ok) {
            console.log(dataConfirmation);

            const contact = [dataConfirmation.contact];
            const products = [dataConfirmation.products];
            const orderId = ""

            document.getElementById("numero--ordre").textContent = `Madame, Monsieur, votre numéro de référence est le suivant : ${orderId}`;

            document.getElementById("contact--confirmation").textContent = `Madame, Monsieur ${contact.lastName} ${contact.firstName}, nous vous remercions pour cette commande et nous espérons qu'elle vous aportera entière satisfaction!`;

            document.getElementById("produits--confirmation").textContent = `Veuillez noter votre commande : ${products}`;
        }


    }))
    .catch((error) => {
        status(400);
    })