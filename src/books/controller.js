const Book = require("./model");

//Message for root page
const postRootPageMessage = async (req, res) => {
    res.send("<p>THIS IS THE ROOT PAGE</p>");
};

//Error message for when an invalid URL is entered
const pageNotFoundMessage = async (req, res) => {
    console.log("PAGE NOT FOUND");
    res.status(404).send("<p>404: Page not found</p>");
};

//Get all books by filtering by an empty object
const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        const successResponse = {
            message: "Success",
            allBooks: allBooks
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

//Get a single book, req must be an object with key value pairs to filter by
const getBook = async (req, res) => {
    try {
        const book = await Book.find(req.body);
        const successResponse = {
            message: "Success",
            book: book
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

//Get a single book by entering the title of the book at the end of the URL
const getBookByUrl = async (req, res) => {
    try {
        const book = await Book.find({title:req.params.title});
        const successResponse = {
            message: "Success",
            book: book
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

//Add a single book to database, req must be an object to create one object, or an array of objects to create multiple
const addBook = async (req, res) => {
    try {
        console.log(req.body);
        const newBook = await Book.create(req.body);
        const successResponse = {
            message: "Success",
            newBook: newBook
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

//Add multiple books to database, req must be an array of objects
const addBooks = async (req, res) => {
    try {
        console.log(req.body);
        const newBook = await Book.insertMany(req.body);
        const successResponse = {
            message: "Success",
            newBook: newBook
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

//Delete one book from database, req must be an object to filter by
const deleteBook = async (req, res) => {
    try {
        console.log(req.body);
        // const newBook = await Book.create(req.body);
        const deletedBook = await Book.deleteOne(req.body);
        const successResponse = {
            message: "Success",
            deletedBook: deletedBook
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

//Delete many books by filtering with key value pairs, can send an empty object to delete all books
const deleteBooks = async (req, res) => {
    try {
        const deletedBooks = await Book.deleteMany(req.body);
        const successResponse = {
            message: "Success",
            deletedBooks: deletedBooks
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

//Update a single book, req must be an array with two json objects, the first being the object to filter by 
// and the second being the new object to update with
const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.updateOne(req.body[0], req.body[1]);
        const successResponse = {
            message: "Success",
            updatedBook: updatedBook
        }
        res.status(201).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

module.exports = {
    postRootPageMessage,
    pageNotFoundMessage,
    addBook,
    addBooks,
    deleteBook,
    deleteBooks,
    updateBook,
    getAllBooks,
    getBook,
    getBookByUrl
};