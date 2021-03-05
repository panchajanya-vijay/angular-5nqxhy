import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { GoogleBooksService } from "./book-list/books.service";
import { addBook, removeBook, retrieveBookList } from "./state/books.actions";
import { selectBookCollection, selectBooks } from "./state/books.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe(Book => {
      this.store.dispatch(retrieveBookList({ Book }));
    });
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
