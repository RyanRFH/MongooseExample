require("dotenv").config();
require("./db/connections");

const express = require("express");
const booksRouter = require("./books/routes");

const port = 5001;

const app = express();

app.use(express.json());

app.use(booksRouter);

// const pageNotFoundMessage = async (req, res) => {
//     res.status(404).send("<p>404: Page not found</p>");
// };

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});