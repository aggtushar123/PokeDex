const form = document.querySelector('#searchForm');



const getImage = async function (url) {
    const resMain = await axios.get(url);
    // console.log(resMain.data);
    makePic(resMain.data);
}


const makePic = (data) => {

    // const row = document.createElement('div');
    const cardmain = document.createElement('div');
    cardmain.className = "card mainCard text-white";
    cardmain.style = `display: inline-table; background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${data.sprites.front_default});`;
    const imgMain = document.createElement('img');
    imgMain.src = data.sprites.front_default;
    imgMain.className = "card-img-top img-fluid";
    cardmain.appendChild(imgMain);

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    const pokNme = document.createElement('h5');
    pokNme.className = "display-4";
    pokNme.innerText = data.name;
    cardBody.appendChild(pokNme);
    // const cardPara = document.createElement('p');
    // cardPara.className = "lead text-center";
    // cardPara.innerText = "The weight of your pokemon is: " + data.weight + "lbs";
    // cardBody.appendChild(cardPara);
    // const cardPara2 = document.createElement('p');
    // cardPara2.className = "lead text-center";
    // cardPara2.innerText = "The height of your pokemon is: " + data.height + "lbs";
    // cardBody.appendChild(cardPara2);

    const divlink = document.createElement('a');
    divlink.href = `view.html?q=${data.name}`
    divlink.className = "btn btn-outline-info";
    divlink.innerText = "Click here to know more";

    cardBody.appendChild(divlink);
    cardmain.appendChild(cardBody);

    document.body.appendChild(cardmain);
    // ScrollReveal().reveal('.mainCard', {
    //     distance: '60px',
    //     origin: top,
    //     delay: 200
    // });
}

const mainpage = (pokemons) => {
    for (let i of pokemons) {
        getImage(i.url);
    }

}

window.onload = async function (e) {
    const resMain = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    mainpage(resMain.data.results);
}



//IMAGE IS IN SRPITES ->5TH ELEMENT

const makediv = (pokemon) => {
    document.body.innerHTML = "";
    const newHeading = document.createElement('div');
    newHeading.className = "alert alert-info";
    newHeading.style = "background:none; background-color:transparent; border:none;"
    const newHeadingMain = document.createElement('h1');
    newHeadingMain.className = "display-1 text-white";

    newHeadingMain.textContent = "POKEDEX";

    newHeading.appendChild(newHeadingMain);
    document.body.append(newHeading);



    const row = document.createElement('div');
    row.className = "row";
    const col = document.createElement('div');
    col.className = "col-md-6 offset-md-3 col-xl-4 offset-xl-4";
    row.appendChild(col);


    const source_image = pokemon.sprites.front_default;
    // console.log(source_image);
    const card = document.createElement('div');
    card.className = "card mb-3 viewCard ";
    card.style = `display: inline-table; background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${source_image});`;

    const cardBody = document.createElement('div');
    cardBody.className = "card-body text-white";
    const para3 = document.createElement('div');
    para3.className = "lead";

    const header = document.createElement('div');
    header.className = "text-center"
    header.innerText = "You looked up for";
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


    const paraBaseEx = document.createElement('p');
    paraBaseEx.className = "lead text-center";
    paraBaseEx.innerText = "The base experience of your pokemon is: " + pokemon.base_experience;
    para3.appendChild(paraBaseEx);


    cardBody.appendChild(para3);

    const image = document.createElement('img');
    image.src = source_image;
    image.className = "card-img-top img-fluid";
    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);

    document.body.append(row);
}

const mainFunc = async function (e) {
    e.preventDefault();

    const searchTerm = form.elements.query.value;
    // console.log(form.elements.query.value);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    console.log(res.data);
    makediv(res.data);
}

form.addEventListener('submit', mainFunc)