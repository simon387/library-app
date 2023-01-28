export default class ReviewModel {
	id: number;
	userEmail: string;
	date: string;
	rating: number;
	book_id: number;
	revireDescription?: string;

	constructor(id: number, userEmail: string, date: string, rating: number, book_id: number, reviewDescription: string) {
		this.id = id;
		this.userEmail = userEmail;
		this.date = date;
		this.rating = rating;
		this.book_id = book_id;
		this.revireDescription = reviewDescription;
	}
}