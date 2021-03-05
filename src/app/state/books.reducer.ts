import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/book.model";
import { retrieveBookList } from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrieveBookList, (state, { Book }) => [...Book])
);
