const makediv = (pokemon) => {
    document.body.innerHTML = "";
    const newHeading = document.createElement('div');
    newHeading.className = "alert alert-info text-white";
    newHeading.style = "background-color: transparent; border:none;";
    const newHeadingMain = document.createElement('h1');
    newHeadingMain.className = "display-1";
    newHeadingMain.textContent = "POKEDEX";
    newHeading.appendChild(newHeadingMain);
    document.body.append(newHeading);



    const row = document.createElement('div');
    row.className = "row";
    const col = document.createElement('div');
    col.className = "col-md-6 offset-md-3 col-xl-4 offset-xl-4";



    const source_image = pokemon.sprites.front_default;
    // console.log(source_image);
    const card = document.createElement('div');
    card.className = "card mb-3 viewCard";
    card.style = `display: inline-table; background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${source_image});`;
    const cardBody = document.createElement('div');
    cardBody.className = "card-body text-white";
    const para3 = document.createElement('div');
    para3.className = "lead";

    const header = document.createElement('div');
    header.className = "text-center"
    header.innerText = "You wanted to know about";
    para3.appendChild(header);


    const PokeName = document.createElement('h1');
    PokeName.className = "display-1 text-center";
    PokeName.innerText = pokemon.name;
    para3.appendChild(PokeName);


    const paraw = document.createElement('p');
    paraw.className = "lead text-center";
    paraw.innerText = "The weight of your pokemon is: " + pokemon.weight + "lbs";
    para3.appendChild(paraw);


    const parah = document.createElement('p');
    parah.className = "lead text-center";
    parah.innerText = "The height of your pokemon is: " + pokemon.height + "m";
    para3.appendChild(parah);


    cardBody.appendChild(para3);

    const image = document.createElement('img');
    image.src = source_image;
    image.className = "card-img-top";
    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);

    document.body.append(row);
}


window.onload = async function (e) {

    var params = new URLSearchParams(window.location.search),
        query = params.get("q");
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
    makediv(res.data);
}


// console.log(query);

