const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dotenv = require("dotenv")

var cors = require('cors');

app.use(express.static('public'));
app.use(express.json())
app.use(cors({
  origin: '*'
}));

dotenv.config()

const CreateLetter = require("./routes/createLetter")


app.use("/api", CreateLetter)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECT);
}

app.listen(port, () => console.log(`Listening on port ${port}`));
