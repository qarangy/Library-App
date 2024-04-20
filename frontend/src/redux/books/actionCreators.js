import * as actionTypes from './actionTypes';

const addBook = (newBook) => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  };
};

export default addBook;
