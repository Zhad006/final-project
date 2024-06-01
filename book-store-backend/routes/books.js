const express = require('express');
const { check } = require('express-validator');
const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty(),
    check('price', 'Price is required').isNumeric(),
    check('description', 'Description is required').not().isEmpty(),
    check('image', 'Image URL is required').not().isEmpty(),
  ],
  createBook
);
router.put(
  '/:id',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty(),
    check('price', 'Price is required').isNumeric(),
    check('description', 'Description is required').not().isEmpty(),
    check('image', 'Image URL is required').not().isEmpty(),
  ],
  updateBook
);
router.delete('/:id', deleteBook);

module.exports = router;