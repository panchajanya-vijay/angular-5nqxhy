import { createAction, props } from "@ngrx/store";
import { Book } from "../book-list/book.model";

export const addBook = createAction(
  "[Book List] Add Book",
  props<{ bookId }>()
);

export const removeBook = createAction(
  "[Book Collection] Remove Book",
  props<{ bookId }>()
);

export const retrieveBookList = createAction(
  "[Book List/API] Retrieve Books Success",
  props<{ Book }>()
);
