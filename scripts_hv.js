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
            if (response.status !== 200) {
                getArt(getRandom());
            }
            return response.json();
        })
        .then((data) => {
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

fetch("https://api.harvardartmuseums.org/gallery?apikey=15b60412-f8a3-4d9c-80c7-f8e192c3d6f9")
    .then(
        response => response.json()
    )
    .then((data)=>{
        console.log(data.records)
        let dataset = data.records
        //for
        // for (let i=0;i<data.records.length;i++){
        //     console.log(data.records[i])
        // }
        //forEach
        // dataset.forEach((gallery, i) => {
        //     console.log(gallery)
        // })
        //for of
        // for(gallery of dataset){
        //     console.log(gallery)
        // }
        dataset.map((gallery, i)=>{
            console.log(gallery, i)
        })
    })