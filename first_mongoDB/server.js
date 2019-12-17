const cors = require('cors')
const express = require('express'); 
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
app.use(express.json());
app.use(cors());


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MonogDB connected");
});



// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

