function makeCard(name, color, cost, choretype, description, flavortext, image) {
    const cardList = document.getElementById("card-list");

    var card = document.createElement("div");
    card.setAttribute("class", `chalk-card chalk-card-${color}`);

    var cardTitle = `
    <div class="chalk-card-section chalk-card-section-${color} chalk-card-title-section">
        <span class="chalk-card-title">${name}</span>
        <div class="chalk-card-cost circle">${cost}</div>
    </div>
    `

    // If there's an image, use the image.
    var cardImage = ""
    if (image !== "") {
        var cardImage = `<div class="chalk-card-section chalk-card-image-div">
        <img class="chalk-card-img" src="./assets/images/${image}" />
    </div>`
    }

    var cardType = `
    <div class="chalk-card-section chalk-card-section-${color} chalk-card-type ">
        <span>Chore Type &mdash; ${choretype}</span>
        <span class="material-symbols-outlined"> laundry </span>
    </div>
    `

    var cardText = `
    <div class="chalk-card-section chalk-card-section-lightbg chalk-card-desc ">
        <div class="chalk-card-desc-main-text">${description}</div>
        <hr />
        <div class="chalk-card-desc-flavor-text">${flavortext}</div>
    </div>
    `

    cardHTML = cardTitle + cardImage + cardType + cardText;

    card.innerHTML = cardHTML;
    cardList.append(card);
}

function makeCards(cards) {
    for (card of cards) {
        makeCard(card["name"], card["color"], card["cost"], card["choretype"], card["description"], card["flavortext"], card["image"])
    }

}
