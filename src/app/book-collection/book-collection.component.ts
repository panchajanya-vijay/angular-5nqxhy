import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../book-list/book.model";

@Component({
  selector: "book-collection",
  templateUrl: "./book-collection.component.html",
  styleUrls: ["./book-collection.component.css"]
})
export class BookCollectionComponent {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
}
