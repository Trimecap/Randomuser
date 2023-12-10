import Persons from './classes/Persons.js';
import Data from './classes/Data.js';
import Time from './classes/Time.js';



let div = document.getElementById("container");
let card = document.createElement("div");
card.id = "card";
let button = document.createElement("button");
button.textContent = "Generate User";
div.appendChild(card);
div.appendChild(button);

let img = document.createElement("img");
img.src ="./img/user_nt_found.jpg";
card.appendChild(img);
let spanN = document.createElement("span");
spanN.textContent = "Name: Name";
card.appendChild(spanN);
let spanM = document.createElement("span");
spanM.textContent = "Mail: Mail";
card.appendChild(spanM);
let spanP = document.createElement("span");
spanP.textContent = "Phone: phone";
card.appendChild(spanP);
let spanL = document.createElement("span");
spanL.textContent = "Location: Location";
card.appendChild(spanL);
let spanC = document.createElement("span");
spanC.textContent = "Current Time: Time";
card.appendChild(spanC);

function mostrarDatos(){
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let primera = data.results[0];
    let persona = new Persons(primera.picture.medium, primera.name.first, primera.name.last);
    let datos = new Data(primera.email, primera.cell, primera.location.city);

    const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${datos.getLocation()}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd3b616c4aemsh2b55e3e0237b56cp115f41jsnc7a1464e285f',
        'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
      }
    };

    fetch(url, options)
    .then(response => response.json())
    .then(result =>{
      let time = new Time(result.hour, result.minute, result.second);
      img.src = `${persona.getImg()}`;
      spanN.textContent = `Name: ${persona.getName()} ${persona.getSurname()}`;
      spanM.textContent = `Mail: ${datos.getEmail()}`;
      spanP.textContent = `Phone: ${datos.getPhone()}`;
      spanL.textContent = `Location: ${datos.getLocation()}`;
      spanC.textContent = `Current Time: ${time.hour}:${time.minute}:${time.second}`;
    });
  });
}

button.addEventListener('click', mostrarDatos);


export { Persons, Data, Time, mostrarDatos };