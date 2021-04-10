const url = "https://api.harvardartmuseums.org/image/";
const apiKey = "15b60412-f8a3-4d9c-80c7-f8e192c3d6f9";

const title = document.querySelector("#js-title");
const img = document.querySelector("#js-img");
const description = document.querySelector("#js-description");
const bttn = document.getElementById("reload");

const getRandom = () => {
    value = Math.floor(100000 + Math.random() * 900000);
    return value;
};

const getArt = (code) => {
    fetch(`${url}${code}?apikey=${apiKey}`)
        .then((response) => {
            //ALWAYS REMEMBER TO RETURN UNLESS YOU USE THE SHORTCUT
            //response => resonse.json()
            console.log(response);
            if (response.status !== 200) {
                getArt(getRandom());
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            if (data.error == "Not found" || data.error == "Not Authorized") {
                getArt(getRandom());
            } else {
                title.innerHTML = data.alttext;
                img.alt = data.alttext;
                img.src = data.baseimageurl;
                description.innerHTML = data.description;
            }
        });
};

getArt(getRandom());
bttn.addEventListener("click", (e)=>{
    getArt(getRandom());
});
