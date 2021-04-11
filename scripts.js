const url = "https://api.artic.edu/api/v1/artworks";

const title = document.querySelector("#js-title");
const img = document.querySelector("#js-img");
const description = document.querySelector("#js-description");
const bttn = document.getElementById("reload");

const getRandom = () => {
    value = Math.floor(100000 + Math.random() * 900000);
    return value;
};

const getArt = (code) => {
    fetch(`${url}`)
        .then((response) => {
            if (response.status !== 200) {
               console.log("success")
            }
            return response.json();
        })
        .then((data) => {
            iiif_endpoint = data.config.iiif_url
            image_url = data.data[0].image_id
            img.src = `${iiif_endpoint}/${image_url}/full/843,/0/default.jpg`
        });
};

getArt();
bttn.addEventListener("click", (e)=>{
    getArt(getRandom());
});
