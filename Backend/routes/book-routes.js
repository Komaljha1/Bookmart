const express = require("express");
const router = express.Router();
const Book = require("../model/Book")
const booksController = require("../controllers/books-controller")

router.get("/", booksController.getAllBooks);
router.get("/:id",booksController.getById);
router.post("/", booksController.addBooks);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);


module.exports = router;


//get api // to fetch - To transfer l&password=abcdeauntenticate?userid=komal
//post api // TO Transfer or post.