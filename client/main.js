const complimentButton = document.querySelector("#complimentButton");
const fortuneButton = document.querySelector("#fortuneButton");
const animalButton = document.querySelector("#animalButton");
const animalContainer = document.querySelector("#animal-container");

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const feelings = document.querySelector("#feelings")


const baseURL = `http://localhost:4000`;

const getCompliment = () => {
    axios
        .get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);})
        .catch(err => alert(err))
  };

const getFortune = () => {
    axios
        .get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);})
        .catch(err => alert(err));
  };

  const getSpiritAnimal = () => {
    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')
    
    let animal = {
      title: title.value,
      imageURL: imageURL.value
    }

  axios
    .post("http://localhost:4000/api/animal/", animal)
    .then(createAnimalCard)
    .catch(err => alert(err))
};

function createAnimalCard(res){

  const animalCard = document.createElement('div')
  animalCard.classList.add('animal-card')

  animalCard.innerHTML = `<img alt=''${res.data[0].title} cover' src=${res.data[0].imageURL} class ="animal-cover/>
  <p class="animal-name">${res.data[0].title}</p> `

  animalContainer.appendChild(animalCard);
  console.log('hit',animalContainer)
};

function low () {
  alert('lower than dirt')
  // const myMessage = document.createElement('h2');
  // myMessage.textContent = "lower than dirt";
  // myMessage.id = "low";
  // feelings.appendChild(myMessage)
  
}
function lessLow () {
  alert('a little above lower than dirt')
  // const myMessage = document.createElement('h2');
  // myMessage.textContent = "a little above lower than dirt";
  // myMessage.id = "lessLow";
  // feelings.appendChild(myMessage)
}

function mid () {
  alert('consider me a pb and j')
}
function moreHigh () {
  alert('I could eat two pringle chips right now')
}
function high () {
  alert('I am inevitable')
}


animalButton.addEventListener('click', getSpiritAnimal);
complimentButton.addEventListener('click', getCompliment);
fortuneButton.addEventListener('click', getFortune);

one.addEventListener('click', low)
two.addEventListener('click', lessLow)
three.addEventListener('click', mid)
four.addEventListener('click', moreHigh)
five.addEventListener('click', high)

