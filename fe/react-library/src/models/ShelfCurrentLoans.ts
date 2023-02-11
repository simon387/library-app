import BookModel from "./BookModel";

class ShelfCurrentLoans {
	book: BookModel;
	dayLeft: number;

	constructor(book: BookModel, dayLeft: number) {
		this.book = book;
		this.dayLeft = dayLeft;
	}
}

export default ShelfCurrentLoans;
