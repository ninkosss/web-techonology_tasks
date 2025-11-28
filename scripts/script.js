function addImages() {

    let imagesUrl = [
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3527290/bd3771d9a3827610b2742de13d8552918008c302/header_alt_assets_2.jpg?t=1764003551",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/582500/header.jpg?t=1764329099",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1286680/header.jpg?t=1737970341",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/06107605348820087bb51ca89ed620c22fe559aa/header.jpg?t=1763413871",
    ];

    let fragment = document.createDocumentFragment();
    let parent = document.querySelector('.trending .games');

    imagesUrl.forEach((url, index) => {
        setTimeout(() => {

            let block = document.createElement("div");
            block.className = "block";

            let img = document.createElement("img");
            img.src = url;
            img.alt = "New Game " + (index + 1);

            let span = document.createElement("span");
            span.textContent = `Кооперативна гра ${index + 1}`; 

            block.appendChild(img);
            block.appendChild(span);

            fragment.appendChild(block);
            parent.appendChild(fragment);

        }, index * 1000);
    });
}

setTimeout(addImages, 5000);