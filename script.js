function makeCard(title, desc, xp, type) {
    const cardList = document.getElementById("card-list");

    var cardBody = document.createElement("div");
    cardBody.setAttribute('class', `card playing-card ${type}`)

    var cardTitle = document.createElement("div");
    cardTitle.setAttribute("class", "card-title-div");
    var cardTitleText = document.createElement("p");
    cardTitleText.setAttribute("class", "card-title");
    cardTitleText.innerText = title;
    cardTitle.append(cardTitleText)

    var cardXP = document.createElement("h5");
    cardXP.setAttribute("class", "card-xp");
    // var cardXPSpan = document.createElement("span")
    // cardXPSpan.setAttribute("class", "badge rounded-pill text-bg-primary")

    var starsDiv = document.createElement("div");
    starsDiv.setAttribute("class", "stars-div");
    for (var idx = 0; idx < xp; idx++) {
        var star = document.createElement("img")
        star.setAttribute("src", "./assets/images/star.svg");
        star.setAttribute("class", "star-icon");
        starsDiv.append(star);
    }
    cardXP.append(starsDiv);

    var cardDesc = document.createElement("p");
    cardDesc.setAttribute("class", "card-text");
    cardDesc.innerText = desc;

    var hr1 = document.createElement("hr");
    var hr2 = document.createElement("hr");

    cardBody.append(cardTitle, hr1, cardXP, hr2, cardDesc);
    cardList.append(cardBody);
}
