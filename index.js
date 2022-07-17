var productBox = document.getElementById("productBox");
const myApiKey = "56d15062";
async function fetchData() {
    try {
        productBox.innerHTML = ""
        let searchName = document.getElementById("search").value;
        let url = `http://www.omdbapi.com/?apikey=${myApiKey}&s=${searchName}`
        let response = await fetch(url)
        let data = await response.json();
        console.log(data)
        const { totalResults } = data
        let paraBox = document.getElementById("paraBox")
        if (searchName == "") {
            alert("Please type a movie name in search box.")
        } else {
            paraBox.style.color = "white"
            paraBox.style.fontSize = "35px"
            if (totalResults !== undefined) {
                paraBox.innerHTML = `We found😃 ${totalResults} results related to "${searchName}" keyword.....`
                displayData(data)
            } else {
                paraBox.innerHTML = `Sorry!☹️ We haven't found any result related to "${searchName}" keyword.....`
                let h2Box = document.createElement("p")
                h2Box.textContent = "404 - File or directory not found."
                let h3Box = document.createElement("p")
                h3Box.textContent = "The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable."
                // paraBox.append(h2Box, h3Box)
            }
        }
    } catch (error) {
        console.log("unable to fetch data");
    }
}


const displayData = (data) => {
    let { Search } = data
    for (let x of Search) {
        let { Poster, Title, Year } = x
        var mainDiv = document.createElement("div");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        let img = document.createElement("img")
        img.src = Poster
        div1.append(img)
        div2.innerHTML = `${Title} | | (${Year})`;
        mainDiv.append(div1, div2)
        productBox.append(mainDiv)
    }
}