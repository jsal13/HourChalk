function makeCard(title, desc, xp) {
    const cardList = document.getElementById("card-list");

    var cardBody = document.createElement("div");
    cardBody.setAttribute('class', 'card playing-card')

    var cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = title;
    console.log(cardTitle)

    var cardXP = document.createElement("h5");
    cardXP.setAttribute("class", "card-xp");
    cardXP.innerText = xp + "xp";

    var cardDesc = document.createElement("p");
    cardDesc.setAttribute("class", "card-text");
    cardDesc.innerText = desc;

    // var cardBtn = document.createElement("a");
    // cardBtn.setAttribute("class", "btn btn-primary");
    // cardBtn.innerText = "Do Something";

    cardBody.append(cardTitle, cardXP, cardDesc);
    cardList.append(cardBody);
}
