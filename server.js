const express = require("express");
const connectDB = require("./helper/connectDB");

// init express

const app = express();

// connect DB

connectDB();

//parse body

app.use(express.json());

//define Routes
app.use("/user", require("./routes/users"));

//define PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
