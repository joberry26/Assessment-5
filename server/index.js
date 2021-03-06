const express = require("express");
const cors = require("cors");
const { compliment, fortune, spiritAnimal } = require("./controller");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/fortune/", fortune);
app.get("/api/compliment/", compliment);
app.post("/api/animal/", spiritAnimal);


app.listen(4000, () => console.log("Server running on 4000"));
