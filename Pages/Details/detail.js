let title = window.location.href.split("?")[1].split("&")[0].split("=")[1].split("%20").join(" ")
let imdbID = window.location.href.split("?")[1].split("&")[1].split("=")[1];

document.title = `${title} | Details`;


var productBox = document.getElementById("productBox");
const myApiKey = "56d15062";
async function fetchData() {
    try {
        productBox.innerHTML = ""
        let searchName = document.getElementById("search").value;
        let url = `http://www.omdbapi.com/?apikey=${myApiKey}&i=${imdbID}`
        let res = await fetch(url)
        let data = await res.json();
        console.log(data)
        isFound(data);
    } catch (error) {
        console.log("unable to fetch data");
    }
}

fetchData();

const isFound = (data) => {
    let searchName = document.getElementById("search").value;
    const { Title } = data
    if (Title === undefined) {
        document.getElementById("container").style.backgroundImage = "url('../../Images/notFound.jpg')";
        paraBox.innerHTML = `Sorry!☹️ We haven't found any result related to "${searchName}" keyword.....`
        // document.getElementById("paraBox").style.color = "black"
    } else {
        document.getElementById("container").style.backgroundImage = "url('../../Images/background.jpg')";
        paraBox.innerHTML = `Showing😃 result for : "${title}".....`
        displayData(data)
    }
}


const displayData = (data) => {
    let { Poster, Title, Year, Runtime, Genre, Released, imdbRating, imdbVotes, Type, Metascore, Plot, Language, Country, Director, Writer, Awards, Actors } = data
    console.log(Title, Year);
    let imgDiv = document.createElement("div");
    imgDiv.id = "imgBox"
    imgDiv.className = "glow-on-hover"
    let img = document.createElement("img")
    img.src = Poster
    imgDiv.append(img)


    let produtDiv = document.createElement("div");
    produtDiv.id = "detailsBox";
    produtDiv.className = "glow-on-hover"

    let div1 = document.createElement("div");
    div1.id = "titltBox";
    let h2div = document.createElement("h2")
    let h2Span = document.createElement("span");
    h2div.innerHTML = Title
    h2Span.innerHTML = ` (${Year})`
    h2div.append(h2Span);
    let ptag1 = document.createElement("p")
    ptag1.innerHTML = `${Runtime} | ${Genre} | ${Released}`
    div1.append(h2div, ptag1);
    if (+(imdbRating) > 8.5) {
        let recDiv = document.createElement("div");
        recDiv.innerHTML = "Recommended";
        div1.append(recDiv)
    }


    let div2 = document.createElement("div");
    div2.id = "desBox"

    let div2div = document.createElement("div");
    let rating = document.createElement("div");
    rating.innerHTML = imdbRating
    let rateDiv = document.createElement("div");

    let rateDivP1 = document.createElement("p");
    let rateDivP1Span = document.createElement("span");
    rateDivP1.textContent = "Rating: "
    rateDivP1Span.innerHTML = `${imdbRating}/10 from ${imdbVotes} users`;
    rateDivP1.append(rateDivP1Span);

    let rateDivP2 = document.createElement("p");
    let rateDivP2Span = document.createElement("span");
    rateDivP2.textContent = "Type: "
    rateDivP2Span.innerHTML = Type;
    rateDivP2.append(rateDivP2Span);

    let rateDivP3 = document.createElement("p");
    let rateDivP3Span = document.createElement("span");
    rateDivP3.textContent = "Metascore: "
    rateDivP3Span.innerHTML = Metascore;
    rateDivP3.append(rateDivP3Span);


    rateDiv.append(rateDivP1, rateDivP2, rateDivP3)

    div2div.append(rating, rateDiv)

    let div2p = document.createElement("p");
    div2p.innerHTML = Plot
    div2.append(div2div, div2p)


    let div3 = document.createElement("div");
    div3.id = "peopleBox";
    let div3P1 = document.createElement("p");
    div3P1.innerHTML = "Language: "
    let div3P1Span = document.createElement("span");
    div3P1Span.innerHTML = Language;
    div3P1.append(div3P1Span);

    let div3P2 = document.createElement("p");
    div3P2.innerHTML = "Country: "
    let div3P2Span = document.createElement("span");
    div3P2Span.innerHTML = Country;
    div3P2.append(div3P2Span);

    let div3P3 = document.createElement("p");
    div3P3.innerHTML = "Director: "
    let div3P3Span = document.createElement("span");
    div3P3Span.innerHTML = Director;
    div3P3.append(div3P3Span);

    let div3P4 = document.createElement("p");
    div3P4.innerHTML = "Awards: "
    let div3P4Span = document.createElement("span");
    div3P4Span.innerHTML = Awards;
    div3P4.append(div3P4Span);

    let div3P5 = document.createElement("p");
    div3P5.innerHTML = "Writer: "
    let div3P5Span = document.createElement("span");
    div3P5Span.innerHTML = Writer;
    div3P5.append(div3P5Span);

    let div3P6 = document.createElement("p");
    div3P6.innerHTML = "Actors: "
    let div3P6Span = document.createElement("span");
    div3P6Span.innerHTML = Actors;
    div3P6.append(div3P6Span);



    div3.append(div3P1, div3P2, div3P3, div3P4, div3P5, div3P6)

    produtDiv.append(div1, div2, div3)

    document.getElementById("productBox").append(imgDiv, produtDiv)
}


  // const { Title } = data
        // let paraBox = document.getElementById("paraBox")
        // if (searchName == "") {
        //     alert("Please type a movie name in search box.")
        // } else {
        //     paraBox.style.color = "white"
        //     paraBox.style.fontSize = "35px"
        //     console.log(Title)
        //     if (Title !== undefined) {
        //         paraBox.innerHTML = `We found😃 ${totalResults} results related to "${searchName}" keyword.....`
        //         // displayData(data)
        //     } else {
        //         paraBox.innerHTML = `Sorry!☹️ We haven't found any result related to "${searchName}" keyword`
        //         let h2Box = document.createElement("p")
        //         h2Box.textContent = "404 - File or directory not found."
        //         let h3Box = document.createElement("p")
        //         h3Box.textContent = "The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        //         // paraBox.append(h2Box, h3Box)
        //     }
        // }