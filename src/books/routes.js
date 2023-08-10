const {Router} = require("express");
const booksRouter = Router();

const {postRootPageMessage, pageNotFoundMessage, addBook, addBooks, deleteBook, deleteBooks, updateBook, getAllBooks, getBook, getBookByUrl} = require("./controller");

booksRouter.post("/books/addBook", addBook);
booksRouter.post("/books/addBooks", addBooks);
booksRouter.delete("/books/deleteBook", deleteBook);
booksRouter.delete("/books/deleteBooks", deleteBooks);
booksRouter.put("/books/updateBook", updateBook);
booksRouter.get("/books/allBooks", getAllBooks);
booksRouter.get("/books/getBook", getBook);
booksRouter.get("/books/getBookByURL/:title", getBookByUrl);
booksRouter.get("/", postRootPageMessage);
booksRouter.get("*", pageNotFoundMessage);
module.exports = booksRouter;