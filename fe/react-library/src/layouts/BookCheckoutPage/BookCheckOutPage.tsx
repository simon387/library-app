import {useState} from "react";
import BookModel from "../../models/BookModel";

export const BookCheckOutPage = () => {
	const [book, setBook] = useState<BookModel>();
	const [isLoadingBook, setIsLoadingBook] = useState(true);
	const [httpError, setHttpError] = useState(null);

	const bookId = (window.location.pathname).split('/')[2];

	return (
		<div className=''>
			<h3>Hi World!</h3>
		</div>
	);
}