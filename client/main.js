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



function clickedValue () {
  var existingMessage = document.getElementById('myMessage');
  if (existingMessage) {
  existingMessage.remove();}

  const myMessage = document.createElement('h2');
  myMessage.id = "myMessage";





  if(event.target.id === "one"){
    myMessage.textContent = "lower than dirt";
    feelings.appendChild(myMessage)
  } 
  else if (event.target.id === "two"){
    myMessage.textContent = "a little above lower than dirt";
    feelings.appendChild(myMessage)
  } 
  else if (event.target.id === "three"){
    myMessage.textContent = "consider me a pb and j";
    feelings.appendChild(myMessage)
  } 
  else if (event.target.id === "four") {
    myMessage.textContent = "I could eat two pringle chips right now";
    feelings.appendChild(myMessage)
  } 
  else if (event.target.id === "five"){
    myMessage.textContent = "I am inevitable";
    feelings.appendChild(myMessage)
  }
}



animalButton.addEventListener('click', getSpiritAnimal);
complimentButton.addEventListener('click', getCompliment);
fortuneButton.addEventListener('click', getFortune);

one.addEventListener('click', clickedValue)
two.addEventListener('click', clickedValue)
three.addEventListener('click', clickedValue)
four.addEventListener('click', clickedValue)
five.addEventListener('click', clickedValue)

