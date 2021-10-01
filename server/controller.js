const animals = [];
let id = 1;
module.exports = {
    fortune: (req, res) => {
        const fortune = ["Do or do not, there is no try!",
                           "yesterday was history. Tomorrow is a mystey. But today is a gift, that's why it's called Present.",
                           "You're a wizard ",
                 "The one thing no one can do in this world is live your life.",
                 "Be."
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
      },

    compliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                            "Cool shirt!",
                                "Your Javascript skills are stellar.",
        ];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
      },

    spiritAnimal: (req, res) => {
        const { title, imageURL } = req.body;
        
        const newAnimal = {
            id,
            title,
            imageURL
        }
        // console.log(newAnimal)

        animals.push(newAnimal);
        id++;

        res.status(200).send(animals)
        // console.log(animals)
    }
}