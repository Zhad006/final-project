const Author = require('../models/Author');
const { validationResult } = require('express-validator');

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find().populate('books', 'title description');
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate('books', 'title description');
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAuthor = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, biography } = req.body;

  try {
    const author = new Author({
      name,
      biography,
    });

    const createdAuthor = await author.save();
    res.status(201).json(createdAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAuthor = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, biography } = req.body;

  try {
    const author = await Author.findById(req.params.id);

    if (author) {
      author.name = name;
      author.biography = biography;

      const updatedAuthor = await author.save();
      res.json(updatedAuthor);
    } else {
      res.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    if (author) {
      await author.remove();
      res.json({ message: 'Author removed' });
    } else {
      res.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};