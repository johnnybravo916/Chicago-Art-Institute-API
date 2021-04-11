const url = "https://api.artic.edu/api/v1/artworks";

const title = document.querySelector(".artblock__title");
const img = document.querySelector("#js-img");
const artist = document.querySelector(".artblock__details strong");
const year = document.querySelector(".artblock__details em");
const description = document.querySelector(".artblock__details p");
const block = document.querySelector(".container");

const getRandom = () => {
    value = Math.floor(100000 + Math.random() * 900000);
    return value;
};

const getArt = (code) => {
    fetch(`${url}`)
        .then((response) => {
            if (response.status !== 200) {
                console.log(response.status);
            }
            return response.json();
        })
        .then((data) => {
            iiif_endpoint = data.config.iiif_url;
            image_url = data.data[0].image_id;
            //img.src = `${iiif_endpoint}/${image_url}/full/843,/0/default.jpg`;
            data.data.map((art) => {
                console.log(art);
                return (block.innerHTML += `
                    <div class="artblock">
                        <h2 class="artblock__title">
                        ${art.title}
                        </h2>
                        <img id="#js-img" src="${iiif_endpoint}/${art.image_id}/full/843,/0/default.jpg" alt="${art.title}"/>
                        <div class="artblock__details">
                            <strong> ${art.artist_title}</strong>
                            <em> ${art.date_display}</em>
                            <p> ${art.artist_display}</p>
                        </div>
                    </div>
                    `);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

getArt();
