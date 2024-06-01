const express = require('express');
const { check } = require('express-validator');
const {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../controllers/authorController');

const router = express.Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('biography', 'Biography is required').not().isEmpty(),
  ],
  createAuthor
);
router.put(
  '/:id',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('biography', 'Biography is required').not().isEmpty(),
  ],
  updateAuthor
);
router.delete('/:id', deleteAuthor);

module.exports = router;