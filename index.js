var productBox = document.getElementById("productBox").innerText;
var heightOfProductBox = document.getElementById("productBox").clientHeight;
if (heightOfProductBox < 1000) {
    document.getElementById("container").style.height = "100%"
}
var myApiKey = "56d15062";
async function fetchData() {
    try {
        let url = `http://www.omdbapi.com/?apikey=${myApiKey}&t=Beast`
        let response = await fetch(url)
        let data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.log("unable to fetch data");
    }
}
fetchData();