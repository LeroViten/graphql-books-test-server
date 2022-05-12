const Book = require('../model');

module.exports = {
  books: async () => {
    try {
      const books = await Book.find();
      return books.map((book) => book);
    } catch (error) {
      throw error;
    }
  },
};
