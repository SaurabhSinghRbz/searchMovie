let title = window.location.href.split("?")[1].split("&")[0].split("=")[1].split("%20").join(" ")
let imdbID = window.location.href.split("?")[1].split("&")[1].split("=")[1];

document.title = `${title} | Details`;

document.querySelector("h1").innerHTML = title + " Details";